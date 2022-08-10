// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token, guildID, filename } = require('./config.json');
const { stringify } = require("csv-stringify");
const fs = require('fs');

// Create write stream
const writableStream = fs.createWriteStream(filename);

// Default user columns for csv export
const columns = [
    "id",
    "nickname",
    "bot",
    "username",
    "roles"
];

// Setup stringifier
const stringifier = stringify({ header: true, columns: columns });

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

// When the client is ready, run this code (only once)
client.once('ready', async () => {
    const guild = await client.guilds.fetch(guildID); 

    // Cache guild
    await guild.fetch();

    // Build role dictionary
    let roleDict = {};
    await guild.roles.fetch()
        .then(roles => {
            roles.forEach(role => {
                roleDict[role.id] = role.name;
            });
        })
        .catch(console.error);

    // Retrieve full list of members in guild
    await guild.members.fetch()
        .then(members => {
            members.forEach(member => {
                const user = {
                    id: member.user.id,
                    nickname: member.nickname,
                    bot: member.user.bot,
                    username: member.user.username,
                    roles: member._roles.map(roleId => roleDict[roleId]).join('|')
                }
                stringifier.write(user);	
            });
        })
        .catch(console.error);

    // Write to default output.csv file
    stringifier.pipe(writableStream);

    // Destroy client
    client.destroy();
});

// Login to Discord with your client's token
client.login(token);
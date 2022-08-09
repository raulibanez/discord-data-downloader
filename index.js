// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token, guildID } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

// When the client is ready, run this code (only once)
client.once('ready', async () => {
    const guild = await client.guilds.fetch(guildID); 

    await guild.fetch();

    let roleDict = {};
    await guild.roles.fetch()
        .then(roles => {
            roles.forEach(role => {
                roleDict[role.id] = role.name;
            });
        })
        .catch(console.error);

    console.log('id,nickname,bot,username,roles');   
    await guild.members.fetch()
        .then(members => {
            members.forEach(member => {
                const user = member.user;
                const roles = member._roles.map(roleId => roleDict[roleId]);         
                console.log([user.id, member.nickname, user.bot, user.username, roles.join('|')].join(','));	
            });
        })
        .catch(console.error);

    client.destroy();
});

// Login to Discord with your client's token
client.login(token);
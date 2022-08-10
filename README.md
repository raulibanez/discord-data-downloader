
# Discord Data Downloader

Discord bot example built to export full list of members in a guild.

This application will generate a CSV file with the name specified in config.json

## Discord Bot Setup

In order to run this script you need to create a Discord Bot in the following web address:
https://discord.com/developers/applications

- Click "New Application", choose a name for your bot, e.g. "User Helper" and click "Create".

- Click "Bot", click "Add Bot" button, click "Yes, do it!".

- Click "Reset Token" to retrieve the API Bot Token, click "Yes, do it!". Write down the TOKEN and don't lose it.

- (Optional) Change bot ICON to make it look less dull 😉

- Enable "SERVER MEMBERS INTENT" in the same page.

- Click "OAuth2", click "URL Generator", enable "bot" and "Administrator". Copy the "GENERATED URL" address below, and paste it in a new browser tab.

- Choose your server from the list and click "Continue" to allow the bot join your server.

There your are. You have your bot ready and installed in your server. Now let's continue with the script installation.
## Script Installation

- Download github project in your hard drive and download all NPM modules

- You will need Node.js installed in your machine (e.g. https://nodejs.org/en/download/) and ideally a good IDE tool (e.g. https://code.visualstudio.com/)

```bash
  npm install
```

- Generate a config.json file in root directory with these parameters. You should already have the TOKEN from the previous step. The Guild ID is the ID of your server. You can obtain this value by enabling the "Developer Mode" in Discord preferences, and the right-click your server icon and then click "Copy ID". Filename is needed to choose your preferred file name for the output.

```bash
  {
    "token": "<Discord Bot Token>",
    "guildID": "<Target Guild ID>",
    "filename": "<Output CSV filename, e.g. output.csv>"
  }
```

- Run application

```bash
  node index.js
```

## Sample output

Take a look to an actual CSV file generated with this utility. IDs have been obfuscated just for, idk, someone malicious enough to be spamming around 😁

```csv
id,nickname,bot,username,roles
123456789000000001,,1,MEE6,MEE6
123456789000000002,,1,Zapier,Zapier
123456789000000003,Raúl de Marras,,rauldemarras,Networking|Admin
123456789000000004,,1,Donut Tester,Donut Tester
123456789000000005,,,Superpanda,
123456789000000006,,1,Supercord,Supercord
123456789000000007,,1,Ajolote,Random Up!Steam
123456789000000008,,1,Autocode-Bot,Autocode-Bot
123456789000000009,,1,DataDownloader,DataDownloader
```

## Who am I?

I do a lot of stuff, and building bots is one of them. Do you have a paid community in Discord. check out https://supercord.io. A bot that will help you to fet leads from new members, restrict access to premium, improve the onboarding, launch re-engagement campaigns and much more.
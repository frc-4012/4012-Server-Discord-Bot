// Required Declarations
const Discord = require('discord.js');
const fs = require('fs');
// End required Declaration

//Client Setup 

const Bot = new Discord.Client({
    disableEveryone: true 
});

Bot.login()
// Required Declarations
const Discord = require('discord.js');
const fs = require('fs');


// Bot Declaration
const Bot = new Discord.Client({
    disableEveryone: true 
});

Bot.config = require('./config.js');
Bot.login(Bot.config.token);

// End required declarations 


Bot.on('ready', e => {
    console.log("4012-HELPER is starting.");
    console.log("Setting the status to the one set in the bot configuration.");
    bot.user.setStatus(Bot.config.status, {type: WATCHING} );
    //- To do: Add switching status from an array defined in the config. 
    console.log("The status has been set. ")
})
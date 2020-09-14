const {  db_addUserMMR } = require("../../db/db_controller")
const { stripIndents } = require("common-tags");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "play",
    category: "info",
    description: "Adding mmr",
    run: async (client, message, args) => {
        randNum = Math.floor(Math.random() * (50 - 25) + 25);
        if (Math.random() > 0.42) randNum = randNum
        else randNum = -randNum
        db_addUserMMR(message.author.username, randNum)
            .then(mmr => {
                
                verb = "win"
                if (randNum < 0) {
                    randNum = randNum*(-1)
                    verb = "lose"
                }
                
                if (mmr === "User does not exists") {
                    play_message = new MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setColor(message.author.displayHexColor)
                    .setTitle(mmr)
                    .setDescription("Type !start")
                } else {
                    play_message = new MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setColor(message.author.displayHexColor)
                    .addField("Results", 
                        stripIndents`You ${verb}: **${randNum}** mmr
                        Current mmr: **${mmr}**`, true)
                }
                message.channel.send(play_message);
            })
    }
}
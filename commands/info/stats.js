const {  db_getUserStats } = require("../../db/db_controller")
const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "stats",
    category: "info",
    description: "Showing mmr",
    run: async (client, message, args) => {
        db_getUserStats(message.author.username)
            .then(({mmr, wins, loses}) => {
                stats_message = new MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setColor(message.guild.me.displayHexColor)
                    .addField(name=`MMR: **${mmr}**`, `
                        Wins: **${wins}**
                        Loses: **${loses}**`, true)
                message.channel.send(stats_message);
            });
    }
}
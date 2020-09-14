const {  db_addNewUser } = require("../../db/db_controller")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "start",
    category: "info",
    description: "Start mmr",
    run: async (client, message, args) => {
        db_addNewUser(message.author.username)
            .then(ans => {
                    start_message = new MessageEmbed()
                        .setAuthor(message.author.username, message.author.displayAvatarURL())
                        .setColor(message.author.displayHexColor)
                        .setTitle(ans)
                message.channel.send(start_message);
            });
    }
}
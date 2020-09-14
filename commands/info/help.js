const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");


module.exports = {
    name: "help",
    description: "Print help",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        help_message = new MessageEmbed()
            .setAuthor(message.guild.me.user.username, message.guild.me.user.displayAvatarURL())
            .setColor(message.guild.me.displayHexColor)

            .addField("All commands:", stripIndents`**!help** - Showing this message
            **!ping** - Returns latency
            **!start** - Start pro career
            **!stats** - Shows your stats
            **!play** - Use to get mmr`, true)
            
        message.channel.send(help_message);
    }
}
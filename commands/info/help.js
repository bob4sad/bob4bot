const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");


module.exports = {
    name: "help",
    category: "info",
    description: "Print help",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        help_message = new MessageEmbed()
            .setAuthor(message.guild.me.user.username, message.guild.me.user.displayAvatarURL())
            .setColor(message.guild.me.displayHexColor)
            .setTitle("All commands:")

            .addField("Info:", stripIndents`**!help** - Showing help message
            **!ping** - Returns latency
            **!whois** - Returns user/member information`, true)
            
            .addField("Moderation", stripIndents`**!report [ mention ] [ reason ]** - Creating report message
            **!say [ message ]** - Bot saying your message`, true);
            

        message.channel.send(help_message);
    }
}
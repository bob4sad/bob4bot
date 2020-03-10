module.exports = {
    name: "say",
    category: "moderation",
    description: "Says your input via the bot",
    usage: "<input>",
    run: async (client, message, args) => {
        const { MessageEmbed } = require("discord.js");

        if (message.deletable) message.delete();
        const embed_message = new MessageEmbed()
        .setDescription(args.join(" "))
        .setColor(message.guild.me.displayHexColor)
        .setAuthor(message.author.username, message.author.displayAvatarURL());

        message.channel.send(embed_message);
    }
}
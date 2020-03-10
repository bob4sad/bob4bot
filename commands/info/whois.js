const { formatDate } = require("../../functions.js");
const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "whois",
    category: "info",
    description: "Returns user information",
    usage: "[username | id | mention]",
    run: async (client, message, args) => {
        const currentMember = message.guild.members.cache
            .filter(m => m.user.id === message.author.id)
            .first()
        const currentUser = currentMember.user;

        const joined = formatDate(currentMember.joinedAt);
        
        const created = formatDate(currentUser.createdAt);

        const embed = new MessageEmbed()
            .setTitle(stripIndents`> Info about: ${currentMember.nickname}`)
            .setFooter(currentUser.username, currentUser.displayAvatarURL())
            .setThumbnail(currentUser.displayAvatarURL())
            .setColor(message.guild.me.displayHexColor === "#000" ? "#fff" : message.guild.me.displayHexColor)
            
            .addField('User information', stripIndents`**> ID:** ${currentUser.id}
            **> Username:**  ${currentUser.username}
            **> Discord Tag:** ${currentUser.tag}
            **> Create at:** ${created}`, true)

            .addField('Member information', stripIndents`**> Display name:** ${currentMember.nickname}
            **> Joined at:** ${joined}`, true)

            
            .setTimestamp();

        if(currentUser.presence.game)
            embed.addField('Currently playing', `**> Name:** ${currentUser.presence.game.name}`);
        
        message.channel.send(embed);
        }
}
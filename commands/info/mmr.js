const {  db_getUserMMR } = require("../../db_controller")


module.exports = {
    name: "mmr",
    category: "info",
    description: "Showing mmr",
    run: async (client, message, args) => {
        db_getUserMMR(message.author.username)
            .then(mmr => message.channel.send(mmr));
    }
}
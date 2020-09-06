const {  db_addNewUser } = require("../../db_controller")


module.exports = {
    name: "start",
    category: "info",
    description: "Start mmr",
    run: async (client, message, args) => {
        db_addNewUser(message.author.username)
            .then(mmr => message.channel.send(mmr));
    }
}
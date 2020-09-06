const {  db_addUserMMR } = require("../../db_controller")


module.exports = {
    name: "play",
    category: "info",
    description: "Adding mmr",
    run: async (client, message, args) => {
        randNum = Math.floor(Math.random() * (50 - 25) + 25);
        if (Math.random() > 0.5) randNum = randNum
        else randNum = -randNum
        db_addUserMMR(message.author.username, randNum)
            .then(mmr => {
                if (randNum > 0) {
                    message.channel.send("Вы получили: " + randNum + " mmr\n" + "Ваш mmr: " + mmr);
                } else {
                    message.channel.send("Вы потеряли: " + randNum*(-1) + " mmr\n" + "Ваш mmr: " + mmr);
                }
            })
    }
}
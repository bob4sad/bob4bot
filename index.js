const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const { db_init } = require("./db_controller")

db_init("Users")

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + '/.env'
});

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`I'm online, my name is ${client.user.username}`);

    

    client.user.setPresence({
        status: "online",
        activity: {
            name: "Бога",
            type: "PLAYING"
        }
    });
});
    
client.on("voiceStateUpdate", (oldState, newState) => {
    if (oldState.channelID != newState.channelID) {
        oldState.channelID 
        ? console.log(client
            .channels
            .cache
            .get(oldState.channelID)
            .members
            .map(e => e.user.username)) 
        : console.log("empty");

        newState.channelID
        ? console.log(client
            .channels
            .cache
            .get(newState.channelID)
            .members
            .map(e => e.user.username)) 
        : console.log("empty");
    }
});

client.on("message", async message => {
    const prefix = process.env.PREFIX;

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return; // DEBUG MODE ON !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0 ) return;

    const command = client.commands.get(cmd);
    if (command)
        command.run(client, message, args)
            .then(console.log(`${message.author.username}: <${command.name.toUpperCase()}>`));

});

client.login(process.env.TOKEN);
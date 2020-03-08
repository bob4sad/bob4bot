module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency",
    run: async (client, message, args) => {
        const msg = await message.channel.send("Pinging...");

        msg.edit(`Pong\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms\n`);
    }
}
const Discord = require("discord.js");
const {token} = require("./config.json")

const client = new Discord.Client({
    intents:10000
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('yo!');
	}
});
client.login(token)

const fs = require("fs");
const Discord = require("discord.js");
require("dotenv").config();
const config = require("./config.json");
const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds],
});

module.exports = client;

client.once("ready", async () => {
  console.log("logado em " + client.user.username + " com sucesso!");
  client.user.setPresence({
    activities: [{ name: `Com carinho, Seninha ` }],
    status: `dnd`,
  });
});

client.on("interactionCreate", (interaction) => {
  if (interaction.type === Discord.InteractionType.ApplicationCommand) {
    const cmd = client.slashCommands.get(interaction.commandName);

    if (!cmd) return interaction.reply(`Deu erro Comedia!`);
      interaction["member"] = interaction.guild.members.cache.get(
        interaction.user.id
      );
      cmd.run(client, interaction);
    }
});

client.on("ready", () => {
  console.log(`🔥 Estou online em ${client.user.username}!`);
});

client.slashCommands = new Discord.Collection();
require("./handler")(client);

client.login(process.env.TOKEN);

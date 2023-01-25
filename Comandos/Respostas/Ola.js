const Discord = require("discord.js")

module.exports = {
  name: "oi", // Coloque o nome do comando
  description: "Ela pelo menos te responde", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    let ping = client.ws.ping;
    
    let embed_1;
    let embed_2;

 if (interaction.user.username== "Seninha") {
  embed_1 = new Discord.EmbedBuilder()
  .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
  .setDescription(`Olá Amor:heart::heart:`)
  .setColor("LuminousVividPink");

  embed_2 = new Discord.EmbedBuilder()
  .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
  .setDescription(`Lindo :heart:`)
  .setColor("LuminousVividPink");
 }else{
    embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user},Eu sou a Namorada do Seninha`)
    .setColor("LuminousVividPink");

    embed_2 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Prazer em te conhecer ${interaction.user} :relaxed:`)
    .setColor("LuminousVividPink");
 }
    interaction.reply({ embeds: [embed_1] }).then( () => {
        setTimeout( () => {
            interaction.editReply({ embeds: [embed_2] })
        }, 3000)
    })
  }
}
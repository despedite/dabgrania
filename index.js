const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Lagbot, ready to work.");
});

//Code to initialize the !dab embed, and define !commands.

client.on('ready', () => {
  client.user.setActivity('!commands')
})

 const embed = new Discord.RichEmbed()
.setImage("https://image.ibb.co/gTQ6Dx/ezgif_com_video_to_gif.gif");

//Code actually starts, like, for real


client.on("message", (message) => {
  if (message.content.startsWith("!ping")) {
    message.channel.send("Pong! 🏓");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!dab")) {
      message.channel.send({embed});
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!commands")) {
    message.channel.send("**!ping**: Play a ping-pong match.\n**!dab**: Dabgraña's signature move.");
  }
});

//Get your token in 'ere!
client.login("TU_TOKEN_AQUI");

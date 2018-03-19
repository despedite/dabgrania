const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Lagbot, ready to work.");
});

//Código re loco para inicializar el embed de !dab, y que el estado de Dabgraña sea de !comandos.

client.on('ready', () => {
  client.user.setActivity('!commands')
})

 const embed = new Discord.RichEmbed()
.setImage("https://image.ibb.co/gTQ6Dx/ezgif_com_video_to_gif.gif");

function rng() {
    var rand = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN'];

    return rand[Math.floor(Math.random()*rand.length)];
}

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
  if (message.content.startsWith("!comandos")) {
    message.channel.send("**!ping**: Play a ping-pong match.\n**!dab**: Dabgraña's signature move.");
  }
});

//Ingresa tu token.
client.login("TU_TOKEN_AQUI");

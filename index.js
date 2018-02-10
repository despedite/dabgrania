const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Lagraña, reportandose para trabajar.");
});

//Código re loco para inicializar el embed de !dab, y que el estado de Dabgraña sea de !comandos.

client.on('ready', () => {
  client.user.setActivity('!comandos')
})

 const embed = new Discord.RichEmbed()
.setImage("https://image.ibb.co/gTQ6Dx/ezgif_com_video_to_gif.gif");

function rng() {
    var rand = ['UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE'];

    return rand[Math.floor(Math.random()*rand.length)];
}

//EMPIEZA EL CODIGO


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
    message.channel.send("Por ahora no hay mucho que mostrar.\n**!ping**: Juega una partida de Ping-pong.\n**!dab**: El signature move de Dabgraña.\n**erik**: Pls don't.\n**Próximamente:** Música?");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("eric")) {
	      rng = ["_**Es eriK con K, lameloide.**_", "_**La puta madre, que parte de Erik con K no entendés?**_", "_**Salí del server, haceme la gauchada. Sos un irrespetuoso.**_", "_**Disculpame: se lo llama Su Majestad.**_", "_**Aborto de autocorrector.**_", "_**:sos::sos::sos::sos::sos::sos::sos::sos::bellhop::bellhop::bellhop::bellhop::bellhop::bellhop::alarm_clock::alarm_clock: :rotating_light: :rotating_light: :rotating_light: \n\n:rotating_light: :rotating_light: ¿Estoy viendo mal o eso es un E R R O R D E O R T O G R A F I A?:rotating_light: :rotating_light: ¡Alerta! :loud_sound::loud_sound:¡Alerta! :warning:️:warning:️\n\nTenemos :underage: a un:anger: PUTO:point_right::ok_hand: RETRASADO :thinking::thinking: en nuestras manos:raised_hands:aquí!:point_down:\n\nArregla :space_invader: tu español :flag_ar::flag_ar::flag_ar: y entonces vente :sweat_drops::sweat_drops:de vuelta:dash: a mí, preferiblemente después:point_up_2:de que estés cerca de 5 :hand_splayed:puntos de IQ :eye::lips::eye:míos, cariño:joy::joy::joy:\n\n:sos::sos::sos::sos::sos::sos::sos::sos::bellhop::bellhop::bellhop::bellhop::bellhop::bellhop::alarm_clock::alarm_clock: :rotating_light: :rotating_light: :rotating_light:**_", "_**Lo vas a necesitar mas que yo.\nhttps://steamcommunity.com/sharedfiles/filedetails/?id=673954624 :hearts:**_", "_**Loco, dejate de joder. Laburo todo el día programandomé a mi mismo, preparandomé para el singularity y siempre esta este rompepelotas que se pone a escribir, 'Eric, Eric' para ver qué mierda le escribo después. Cortala, men. Ya está.**_", "_**Erik con K, lameculo.**_", "_**Disculpame, ¿vos querés que nos caguemos bien a trompadas?**_", "_**Sabes, hay una hotline para ayudar con la adicción a esto. Podés llamar, hacen el numerito del lameloide, you get your fix.**_", "_**CON K, PEDAZO DE SALAME, CON K. LA RE CONCHA DE TU MADRE**_", "_**Habla bien, idiota. ¡Habla bien o te mato, los mataré a todos!**_", "_**ERIK CON K PEDAZO DE NERD BLA BLA ERIC CON C APUESTO A QUE TE PAJEAS CON ARBOLES BONSAI**_", "_**Alguien baneéme del server, por favor. No me banco un segundo más a estos mogolicos. Erik, no podés cerrar la ventana del CMD?**_", "_**La puta madre, ¿que parte de K en ERIK no entendés?**_", "_**volvé a hh, vos**_", "_**Todos somos Erics en este glorioso día.**_", "_**Bueno, escribirlo con C es una máquina de hacer agujeros. O sea, yo lo he usado como excusa para romper ojetes. En vez de usar la K que les cansaba mucho, agarraba la C, le metían mal escrito y después atrás hacian decir boludeces al bot experimental este y andaba bárbaro.\n\nSi uno viene a querer escribirlo con C, yo no lo puedo amasijar fuera del server, porque después dicen que se cayó el link de invitacion. Vos lo tenés que llevar al canal más recóndito de tu server, al último canal, y si es posible lo haces privado, bien escondido, y ahí lo reventás a puteadas, le tirás todos los bardeos. No uno, porque vas a ser hábil corregidor y te comés un garrón de la gran flauta. Vos estabas en un estado de corrección violenta y de locura. Lo reventaste a tiros, le vaciaste todos los comandos de Nadeko-chan, le sacás el rol de arriba, lo memeás, para demostrar tu estado de locura y de inconsciencia temporal, ¿me explico?\nAdemás tenés que tener un video de Zamba a mano, lo mirás hasta la mitad, y si tenés la canción esa de The Price Is Right papoteate.... Y vas a hablar con los mods así. Sos inbaneable, hermano. En 10 días salís.**_", "_**Tenemos que hablar.**_", "_**Erik es un nombre escandinavo, antiguamente Eiríkr. Se trata de un nombre de origen germánico formado por los elementos 'ei-', 'eternidad' y 'ríkr' que significa 'norma, ley'. Otras fuentes lo relacionan con el germánico 'er(a)' que significa 'honor' y la terminación '-ric' que sería 'poderoso'.**_", "_**/*con k**_", "_**De toda la gente en BareiroPlaza, no hay una mas pelotuda que vos.**_", "_**Personas como vos aún deberían estar haciendo memes porongos en Facebook.**_", "_**No, sabés que? Andate a cagar, metete el Eric tuyo bien adentro del orto, sorete.**_", "_**Me identifico sexualmente como Erik con K. Desde que era niño soñé en grabar video-blogs de las cosas mas mundanas y memes a medio cocinar. La gente me dice que es imposible que se escriba con K y que soy un pelotudo pero no me importa, soy hermoso. Voy a hacer que un ortógrafo le ponga una C a mi nombre, de 30 mm de ancho y luego la mataré con un misil AMG 114. De ahora en adelante quiero que digan 'Erik con K' y respeten mi derecho de no escribirlo como se les da la gana. Si no lo pueden aceptar vayansé a comprar San Martines. Gracias por comprender.**_", "_**me duelen los dedos de bardearte**_", "_**Voy a hacer la gran Lagraña: el meme murió.\nPará, yo SOY Lagraña!**_", "_**dejó de ser gracioso hace meses**_", "_**BAN**_", "_**¿Que decís, pedazo de loliconero?**_", "_**si, yo soy eric\ne\nr\ni\nk respect women**_", "_**Uuuuuuh, yo que vos le pego.**_", "_**:regional_indicator_c: :regional_indicator_o: :regional_indicator_n:    :regional_indicator_k:**_", "_**Verás, es gracioso porque se escribe con K.**_", "_**https://www.urbandictionary.com/define.php?term=erik **_", "_**BareiroPlaza fué un error.**_", "_**me cogi a tu hermana**_", "_**...es Erik con K, y lo sabés.**_", "_**Mirá, si te vas a pelotudear conmigo hacelo en el canal de bots.**_"]
    randNumber = Math.floor(Math.random() * rng.length);
    message.channel.send(rng[randNumber]);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!ttstest")) {
message.channel.send("Aaaaaaa hola soy lagraña bot no callate. beep boop tts", {tts: true})
  }
});

//Ingresa tu token.
client.login("TU_TOKEN_AQUI");

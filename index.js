var help=["fuck","fumck","fusck","fushk","furck","shucklehead","ash","piss","shit","pee","poo"]
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("I am ready!");
});
g=true
client.on("message", (message) => {
	if (message.content.includes("not allowed")) {
		message.channel.startTyping(134)
		message.channel.stopTyping()
		message.channel.send("fuck, i can say it");
		return;
	}
	if (message.content.startsWith("*")) return;
	if (message.content.startsWith("!")) return;
	if (message.content.startsWith("?")) return;
	if (g==true) {
		g=false;
	}
	if (message.author.bot) return;
  	else if (message.content.includes("lovebot.destroy")) {
	  message.channel.send("destroying");
	  user=client.destroy()
  	}
	if (message.content.includes("who is your owner")){
		j=0
		for (n in ){
			j+=1
		}
		message.channel.send("my owner is dart2.0 i am in "+j+" guilds");
		return;
		
	}
	for (l in help){
	  	if (message.content.includes(help[l])){
			message.channel.send(":no_entry_sign:")
			return
	  	}
  	}
	if (message.content.includes("mute")){
		(message.channel.send("muted"))
	}
	if (g==true){ message.channel.send("HI I'M HERE TO HELP YOU");
	}
	if (message.content.includes("invite")){
		message.channel.send("you can invite me at https://discordapp.com/oauth2/authorize?client_id=655415053306036245&permissions=8&scope=bot")
	}
	else if (message.content.startsWith("hi")) {
		message.channel.send("hi how can i help you?");
		message.author.send("hi")
	} else
	if (message.content.startsWith("hello")) {
		message.channel.send("hi how can i help you?");
	}
	else if (message.content.startsWith("help")) {
		message.channel.send("how can i help you?");
	}
	else if (message.content.includes("server")){
		client.login("NjU1NTA1ODM5ODM4NDYxOTgz.XfefQQ.WXDg3BsO3Ph1ee3dxA2w5huRxAc");
	}
	else if (message.content.includes("java")) {
    message.channel.send("i'm written in java");
  }
  else if (message.content.includes("how are you")) {
    message.channel.send("I'm fine thanks, and you");
  }
  else if (message.content.includes("who are you")) {
    message.channel.send("I'm Dart2.0 and who are you in real live, "+message.author+"?");
  }
  else if (message.content.includes("see")) {
    message.channel.send("I'm fine thanks, and you");
  }
  else if (message.content.includes("weather")) {
  	message.channel.send("It is well i think")
  }
  else if (message.content.includes("what can i do")) {
  	message.channel.send("You can talk to me")
  } //else {
	  //message.channel.send("for bot help say !help or ?help")
  //}
  if (message.content.includes("bot talk")){
  if (message.channel.name=="bot-talk"){
	  message.channel.setName("@starter-channel")
	  message.channel.send("bot talk off")
  }
  else {
  message.channel.setName("@bot talk")
  message.channel.send("bot talk on")
  }
  }
  if (message.content.includes("owner")){
	  message.guild.owner.send(message.author+" asked for you")
  }
  
  
});

client.login("NjU1NTA1ODM5ODM4NDYxOTgz.XfoPwg.j3jHzXYye1aAkN4ryKtU1vfWmLU");

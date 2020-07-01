//myfirstbot.js
//Author: Elijah Nucum


//Variables
const Discord = require("discord.js");
const client = new Discord.Client();
const fbiGif = "https://media3.giphy.com/media/QUY2pzDAKVpX3QacCg/giphy.gif";
const poohGif = "https://i.pinimg.com/originals/50/5a/0e/505a0e4591fc8052631bed84ac0de1ee.gif";
const orangeJusticeAnimeGif = "https://media.tenor.com/images/4d1acc99c73e5bb3966943ea1650fe35/tenor.gif";
const config = require("./config.json");
var loop;
let listOfCommands =
                    [
                      "!ping - ping pong command!",
                      "!greet - greet yourself",
                      "!poohdance - show pooh dancing!",
                      "!help - display a list of commands"
                    ];


//Log --Start
client.on("ready", () =>
{
  console.log("Bot is ready!");

});
//Log --End


//Message Commands


client.on("message", (message) =>
{
  //FBI Command
  if(message.content === "i love lolis" || message.content === "i like lolis")
  {
    message.reply("*The FBI has been called on you*", {files: [fbiGif]});
  }

  else if(message.author.bot) return;
  else if(!message.content.startsWith(config.prefix)) return;

  //Ping Command
  else if(message.content.startsWith(config.prefix + "ping"))
  {
    message.channel.send("pong!");
  }

  //Greet Command
  else if(message.content.startsWith(config.prefix + "greet"))
  {
    message.reply("Hello there!");
  }

  //Pooh Command
  else if(message.content.startsWith(config.prefix + "poohdance"))
  {
    message.channel.send("", {files: [poohGif]});
  }

  //Anime Dance COMMAND
  else if(message.content.startsWith(config.prefix + "animedance"))
  {
    message.channel.send("", {files: [orangeJusticeAnimeGif]});
  }

  //Help Command
  /*
    COMMANDS ADDED TO THIS AS OF xxxxx
    ping
    greet
    pooh
    help
  */
  else if(message.content.startsWith(config.prefix + "help"))
  {
    message.channel.send("List of commands:");

    let description = "";

    for(loop = 0; loop < listOfCommands.length; loop++)
    {
      description += (listOfCommands[loop] + "\n");
    }

    message.channel.send(description);
  }
});


//Login to server
client.login(config.token);

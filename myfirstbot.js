//myfirstbot.js
//Author: Elijah Nucum


//Variables
const Discord = require("discord.js");
const client = new Discord.Client();
const fbiGif = "https://media3.giphy.com/media/QUY2pzDAKVpX3QacCg/giphy.gif";
const poohGif = "https://i.pinimg.com/originals/50/5a/0e/505a0e4591fc8052631bed84ac0de1ee.gif";
const orangeJusticeAnimeGif = "https://media.tenor.com/images/4d1acc99c73e5bb3966943ea1650fe35/tenor.gif";
const orangeJusticeIsabelleGif = "https://thumbs.gfycat.com/CalmFeminineDipper-size_restricted.gif";
let bruhGifs =
              [
                "https://media2.giphy.com/media/JOLzYhXCCHyvMDsTur/giphy.gif",
                "https://media1.tenor.com/images/b309d6cbdc080460ef877242c8ec4e1d/tenor.gif",
                "https://media1.giphy.com/media/VIOkcgpsnA2Zy/giphy.gif",
                "https://media2.giphy.com/media/NrqabhEpXWsGA/giphy.gif?cid=ecf05e47be1d0062a690a9f6e10a5cd99512101a9c36f7cb&rid=giphy.gif",
                "https://media3.giphy.com/media/6RXkMDpm1Qppu/giphy.gif?cid=ecf05e4792289daa5836bd6af7d3a0bb2f57260a4541ac1f&rid=giphy.gif",
                "https://media3.giphy.com/media/kWp8QC99Z6xFn8bF0v/giphy.gif?cid=ecf05e4735ac5d6c2fc62c85fcbf0666d6b879f3a9be6ada&rid=giphy.gif",
                "https://media0.giphy.com/media/Uss9jg5C9REgo/giphy.gif?cid=ecf05e47193f1721997f2efce502d12df26c204ea6406847&rid=giphy.gif"
              ];

const config = require("./config.json");
let prefix = config.prefix;
var loop;
let listOfCommands =  //INSERT BOT COMMANDS DESCRIPTION HERE FOR THE !help COMMAND
                    [
                      "!greet - greet yourself",
                      "!poohdance - show pooh dancing!",
                      "!animedance - anime dance!",
                      "!isabelledance - see Isabelle from Animal Crossing dance!",
                      "!insertbruhmoment - insert a random bruh moment",
                      "!bruhmeter @[insert a username here] - check the bruh percentage of a fellow member",
                      "!help - display a list of commands like you've just done!"
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
  if(message.author.bot) return;

  //If/Else Argument Commands (Checks Text as an Argument)

  //FBI Command
  if(message.content.toLowerCase().includes("i love lolis") || message.content.toLowerCase().includes("i like lolis"))
  {
    message.channel.send("Hello " + message.author.toString() + ", " + "***the FBI has been called on you***", {files: [fbiGif]});
  }

  //Bruh Moment Command
  else if(message.content.startsWith(config.prefix + "insertbruhmoment") || message.content.toLowerCase().includes("bruh"))
  {
    let randomNum = Math.floor((Math.random() * bruhGifs.length) + 0);

    message.channel.send("", {files: [bruhGifs[randomNum]]});
  }

  if(!message.content.startsWith(config.prefix)) return;

  //Switch Argument Commands

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  switch(command)
  {
    case "greet" :    // Greet Command
    {
      message.reply("Hello there!");
      break;
    }
    case "poohdance" :    // Pooh Dance Command
    {
      message.channel.send("", {files: [poohGif]});
      break;
    }
    case "animedance" :   // Anime Girl Dance Command
    {
      message.channel.send("", {files: [orangeJusticeAnimeGif]});
      break;
    }
    case "isabelledance" :    // Isabelle Dance Command
    {
      message.channel.send("", {files: [orangeJusticeIsabelleGif]});
      break;
    }
    case "bruhmeter" :
    {
      let mentionedMember = message.mentions.members.first();
      let randomNum = Math.floor((Math.random() * 100) + 0);

      message.channel.send(mentionedMember.toString() + "'s bruh meter is currently at: " + randomNum + "%");
      break;
    }
    case "help" :   // Help Command, shows the list of commands as written under listOfCommands
    {
      message.channel.send("Hello, I am The Bruh Bot™! Here is my list of commands:");

      let description = "";

      for(loop = 0; loop < listOfCommands.length; loop++)
      {
        description += (listOfCommands[loop] + "\n");
      }

      message.channel.send(description);
      break;
    }
  }
});

//Login to server
client.login(config.token);

const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "t!";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`AhmedxD:`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
})
 
 
 
 
 client.login('NTk4MjUwNzExOTQzMjE3MTUz.XSUPoQ.WdJJjHKafvEeukzUM5PI-QeiQ_o');
 
 
 
 
 
 
 
 
client.on('message', message => {
    if (message.content.startsWith("t!hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```اكتب اسم الشخص الي تبي يتهكر```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [? ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [?? ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [??? ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [???? ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [???????????? ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [????????????? ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [??????????????? ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [??????????????? ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [???????????????? ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [????????????????? ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [?????????????????? ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [?????????????????? ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [?????????????????? ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [?????????????????? ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [??????????????????????????????????????] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [????????????????????????????????????????????????????? ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [????????????????????????????????????????????????????] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ??????????????????????????????????????????????????] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ?????????????????????????????????????????????????????]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('تم تهكير الضحيه')
           }, 33000)
           });
         }
 })
  client.login('NDczODQ2Mzg5NDQ1NDkyNzM5.XSIbQw.bV7syK3mJqjRf-1pTBootdQkc_M');
  
  
  
  
  
  
  
  
  

 
 
 
 
 
 
client.on('message', async message => {
  var prefix ='t!';//البريفيكس
  if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'server')) {
    let guild = message.guild;
    let channel = message.channel;
    let guildicon = guild.icon_url;
    let members = guild.memberCount;
    let bots = guild.members.filter(m => m.user.bot).size;
    let humans = members - bots;
    let allchannels = guild.channels.size;
    let textchannels = guild.channels.filter(e => e.type === "text");
    let voicechannels = guild.channels.filter(e => e.type === "voice");
      var embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setTitle(`معلومات عن السيرفر`)
      .setDescription(`معلومات عن : ${guild.name}`)
      .addField("**صاحب السيرفر :crown:** :", `${guild.owner}`, true)
      .addField("**ايدي السيرفر :id:** :", `${guild.id}`, true)
      .addField("**موقع السيرفر :globe_with_meridians:** :", `${guild.region}`, true)
      .addField("عدد الاشخاص :", `${guild.humans}`, true)
      .addField("**عدد البوتات :robot:**", `${guild.bots}`, true)
      .addField("عدد الرومات الكتابية", `${textchannels.size}`, true)
      .addField("عدد الرومات الصوتية", `${voicechannels.size}`, true)
      .addField("مستوى حماية السيرفر", `${guild.verificationlevel}`, true)
      .addField("صنع هذا السيرفر في", `${guild.createdAt}`, true)
      message.channel.send({ embed: embed });
    }
  });
 
 
 
 
 
 
 
 
 
 
 
 
client.on("message", msg => {
  if(msg.content === 't!' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField(':game_die:|Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});
 
 
 
 
 
 
client.on('message', message => {
  var prefix ='t!.bc'
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField('** الـسيرفر**', `${message.guild.name}`,true)
                .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
                .addField(' **الرسالة** ', args)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                m.send(`${m}`,{embed: bc});
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)  
            .setTitle('?? | جاري ارسال رسالتك ')
            .addBlankField(true)
            .addField('?? | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('??| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
});









client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted')); 
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ان كأن هاذه الميوت عن طريق الخطأ تواصل مع احد اعضاء الادارة**`)
      .addField(`Magic`,`Server`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL) 
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500) 
    
        
    }
    }
})









client.on('message', function(message) {
    if(!message.channel.guild) return;
    if(message.content === 't!cc') {
    if(message.member.hasPermission('MANAGE_ROLES')) {
    setInterval(function(){})
    message.channel.send('يتم انشاء 50 لون انتضر | ??')
    }else{
    message.channel.send('ما معاك البرمشن المطلوب |???')
    }
    }
    });
    
    client.on('message', message=>{
    if (message.content === 't!cc'){
    if(!message.channel.guild) return;
    if (message.member.hasPermission('MANAGE_ROLES')){
    setInterval(function(){})
    let count = 0;
    let ecount = 0;
    for(let x = 1; x < 50; x++){
    message.guild.createRole({name:x,
    color: 'RANDOM'})
    }
    }
    }
    });
	
	
	
	
	
	
	
	
	
	client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '????????????????????????welcome?');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('?| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**SERVER NAME **")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
    
	
	
	
	
	
	
	
	






client.on('message', message => { 
    var prefix = "";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" t!getrank")[0];
    command = command.slice(prefix.length);
    if (command == "t!getrank") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });
    
	
	
	
	
	
	
	
		
	var prefix = "t!ban"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" t!ban")[0];
  command = command.slice(prefix.length);

  let args = message.content.split("t!ban").slice(1);

  if (command == "t!ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});




client.login('NDczODQ2Mzg5NDQ1NDkyNzM5.XSIbQw.bV7syK3mJqjRf-1pTBootdQkc_M');









client.on('message', message => {
    if (message.content.startsWith("t!stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Stats Bot / Info ')
            .addField('``Uptime``', timeCon(process.uptime()), true)
            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('``Guild Count``', client.guilds.size, true)
            .addField('``Bot In channel``' , `${client.channels.size}` , true)
            .addField('``Users rout``' ,`${client.users.size}` , true)
            .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
            .addField('``Bot Id``' , `${client.user.id}` , true)
            .setFooter('SmiLeBoT / Team')
    })
}
});


function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}








	  
	  
	  
	  
	  client.login('NDczODQ2Mzg5NDQ1NDkyNzM5.XSIbQw.bV7syK3mJqjRf-1pTBootdQkc_M');
	  
	  
	
	
	
	
	
	


 
 
 
 





















client.on('message', message => {
  if (true) {
if (message.content === '.t!invite') {
      message.author.send('  https://discordapp.com/api/oauth2/authorize?client_id=473846389445492739&permissions=8&scope=bot  |  تفضل ربط البوت     ').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === ".t!invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
  if (message.content === "t!botinfo") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
  let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.addField("**اسمي | my name :grin: **" , [client.user.username])
.addField("**عدد الشانلات | channels :pen_ballpoint: **" , [client.channels.size])
.addField("**عدد السيرفرات | servers :military_medal: **" , [client.guilds.size])
.addField("**عدد المستخدمين | users :sunglasses: **" , [client.users.size])
.addField("**بنقي | my ping :sleeping: **", [client.ping])
.setTimestamp()
message.channel.sendEmbed(embed);
 }
});







client.login('NDczODQ2Mzg5NDQ1NDkyNzM5.XSIbQw.bV7syK3mJqjRf-1pTBootdQkc_M');








client.on('message', async(message) => {
    if(message.author.juilan || message.channel.type == 't!mc') return;
    let args = message.content.split(' ');
    if(args[0] == `{t!}mutech`){
        if(!message.member.hasPermission('MANAGE_CHANNELS') || !message.guild.me.hasPermission('MANAGE_CHANNELS')) return;
        await message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: false });
        await message.channel.send(`The channel has been muted.`);
    } else if(args[0] == `{t!}unmutech`){
        if(!message.member.hasPermission('MANAGE_CHANNELS') || !message.guild.me.hasPermission('MANAGE_CHANNELS')) return;
        await message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: null });
        await message.channel.send(`The channel has been unmuted.`);
    }
});


















client.on("message", (message) => {
    if (message.content.startsWith("t!cv")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'voice');
        message.channel.sendMessage('تـم إنـشاء روم صـوتي')
        
    }
    });
    
	
	
	
	
	
	
	
	
	
	client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === !!+ "help") {
         message.channel.send('**تم ارسال في الخاص**');
           
   
         
 
 
 message.author.sendMessage(`
 **
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
╔[❖════════════❖]╗
                  Prefix = ' z! '
╚[❖════════════❖]╝
 
╔[❖════════════❖]╗
                    اوامر ادارية
╚[❖════════════❖]╝
 
 ❖t!kick ومنشنه > ➾ لطرد عضو
 
 ❖ t!mute ومنشنه> ➾ اسكات عضو
 
 ❖ t!clear ➾ لتنضيف المحادثة (fixing)
 
 ❖ t!cr [name]> ➾ صنع روم صوتية
 
 ❖ t!ct [name]> ➾ صنع روم كتابية
 
 ❖ t!unmute ومنشنه> ➾ فك الاسكات من العضو
 
 ❖t!bc> ➾ لارسال رسالة لجميع اعضاء السيرفر
 
 
╔[❖════════════❖]╗
                    اوامر عامة
╚[❖════════════❖]╝
 
❖ t!rool> ➾ قرعة
 
❖ t!id ➾ اي دي
 
❖ z!date ➾ التاريخ
 
 
❖ t!support ➾ لارسال رسال لصاحب البوت
 
❖ t!help ➾ المساعدة في العربي
 
❖ t!ping ➾ عرض سرعه اتصال البوت
 
❖ t!botinfo➾ معلومات البوت
 
❖ t!server ➾ معلومات السيرفر
 
❖ t!invite ➾ رابط دعوة البوت
 
╔[❖════════════❖]╗
                      الترحيب
╚[❖════════════❖]╝
 
لتفعيل خاصية الترحيب قم بعمل قناة اسمها "wlc"
 
==================================================================
 
Server support: nop
 
bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=594492286562467849&permissions=8&scope=bot
 
==================================================================
 
 
`);
 
    }
});
 
client.on('message', message => {
    if (message.content.startsWith(prefix + "invs")) {
     if(!message.channel.guild) return;
if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("تم ارسالك في الخاص")
   .setFooter("اسم سيررك ",'رابط صوره سيرفرك')
                   .setTimestamp()
                message.channel.send('**تم الارسال في الخاص**');
 
 
      message.channel.sendEmbed(Embed11).then(message => {message.delete(3000)})
      message.author.sendEmbed(Embed11)
    }
});









client.on("message", (message) => {
    if (message.content.startsWith("t!ct")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'text');
    message.channel.sendMessage('تـم إنـشاء روم كـتابـي')
    
    }
    });
	
	
	
	
	
	
	
	








client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-ar") {
         message.channel.send('**تم ارسالك في الخاص**');
           
   
         
 
 
 message.author.sendMessage(`
 **
__~~The King Bot~~__ By: Peery#0609
╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
client.on('message', message => {
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
╔[❖════════════❖]╗
                  Prefix = ' z! '
╚[❖════════════❖]╝
 
╔[❖════════════❖]╗
                    اوامر ادارية
╚[❖════════════❖]╝
 
 ❖ ومنشنه t!kick > ➾ لطرد عضو
 
 ❖ t!mute ومنشنه > ➾ اسكات عضو
 
 ❖ t!clear ➾ لتنضيف المحادثة (fixing)
 
 ❖ t!cv ➾ صنع روم صوتية
 
 ❖ t!ct➾ صنع روم كتابية
 
 ❖ t!unmute ومنشنه> ➾ فك الاسكات من العضو
 
 ❖ t!obc➾ لارسال رسالة لجميع اعضاء السيرفر
 
 
╔[❖════════════❖]╗
                    اوامر عامة
╚[❖════════════❖]╝
 
❖ t!id ➾ اي دي
 
❖ t!support ➾ لارسال رساله لصاحب البوت
❖ t!help-ar ➾ المساعدة في العربي
 
❖ ${prefix}help-en ➾ المساعدة في الانجليزيلة
 
❖ t!ping ➾ عرض سرعه اتصال البوت
 
❖ t!botinfo ➾ معلومات البوت
 
❖ ${prefix}server ➾ معلومات السيرفر
 
❖ t!invite➾ رابط دعوة البوت
 
╔[❖════════════❖]╗
                      الترحيب
╚[❖════════════❖]╝
 
لتفعيل خاصية الترحيب قم بعمل قناة اسمها "wlc"
 
==================================================================
 
Server support: nop
 
bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=473846389445492739&permissions=8&scope=bot
 
==================================================================
 
 
`);
 
    }
});









var prefix = "t!";

client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});









var prefix = "t!"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});








var prefix = "t!"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});








client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "t!mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
  if (command === "t!unmute")
	  return message.reply("**:white_check_mark: .. تمه فك الميوت عن الشخص**").catch(console.error);
  });
   }
  
  };
  
  });
  
  
  
  
  
  
  
  
  
  client.on('message', async(message) => {
    if(message.author.juilan || message.channel.type == 'dm') return;
    let args = message.content.split(' ');
    if(args[0] == `{prefix}t!mc`){
        if(!message.member.hasPermission('MANAGE_CHANNELS') || !message.guild.me.hasPermission('MANAGE_CHANNELS')) return;
        await message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: false });
        await message.channel.send(`The channel has been muted.`);
    } else if(args[0] == `{prefix}t!unmc`){
        if(!message.member.hasPermission('MANAGE_CHANNELS') || !message.guild.me.hasPermission('MANAGE_CHANNELS')) return;
        await message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: null });
        await message.channel.send(`The channel has been unmuted.`);
    }
});










client.on('message', message => {
    if (message.content === 't!help') {
        message.reply('اذا كنت تبي الهيلب بالعربي اكتب t!help-ar')
        }
});









client.on('message', message => {
    if (message.content === 'تبي الرابط؟') {
        message.reply('لاتنشر واذا نشرت سوفه تتعاقب عقوبه الميوت وثم اذا تكررت بان !! ')
        }
});

client.on('message', message => {
    if (message.content === 'اعطيك الرابط؟') {
        message.reply('لاتنشر واذا نتشرى سوفه تتعاقب عقوبه الميوت وثم اذا تكررت بان !! ')
        }
});

client.on('message', message => {
    if (message.content === 'gooddog') {
        message.reply('احترم..!!مين الكلب!!...لا تخليني اتكلم خلني ساكت!!')
        }
});








client.on('message', message => {
    if (message.content === 'heydog') {
        message.reply('heydog بوجهك يا ***مين الكلب هااا؟ مين هي كلب؟؟انا احسن بوت محترم مو زيك قلت لك خلني ساكت بس!!!')
        }
});









client.on('message', message => {
    if (message.content === 'ياحيوان انا الي عاملك ومبرمجك بالاخير كذا؟') {
        message.reply('اح اسف نسيت يا حلو يا عسل شفت كيفني محترم بس قسم بالله لو غيرك !!...كان...!!')
        }
});








client.on('message', message => {
    if (message.content === 't!unmute') {
        message.reply('تمه فك الميوت من الشخص!!')
        }
});









client.on('message', message => {
    if (message.content === 'يابوتي') {
        message.reply('امرني ي عسل ')
        }
});









client.on('message', message => {
    if (message.content === 'هكر بوت  `@zbot#5201 `') {
        message.reply('تدلل الحين اهكر ام ام امه!!')
        }
});




















  
  
  
  

  client.login('NTk4MjUwNzExOTQzMjE3MTUz.XST62A.dv5zUe91HE9U5ESiFoQnxdTjKr4');
  
  
  
  
  
  
  
  
  
		
		
		client.login('NTk4MjUwNzExOTQzMjE3MTUz.XST62A.dv5zUe91HE9U5ESiFoQnxdTjKr4');
		
		
		
		
		
		
		
		
		
		
		
		
		
		
  
		client.on('message', message => {  
    if (message.author.bot) return; 
    if (message.content.startsWith(prefix + 't!clear')) { 
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`** You don't have Premissions!**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(`** The number can't be more than **100** .**`).then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
    message.channel.send(`** Done , Deleted \`${msgs.size}\` messages.**`).then(messages => messages.delete(5000));
    })
  }
});











client.on('message', message => {
    if (message.content === 'جلاد بوتي كفو') {
        message.reply('ڠٻڕ ۖ انې ּم̍ا احڇۑْ؟ ۗ ☭')
        }
});










    client.on('message', message => {
        var prefix = "t!";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split("say")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });
	  
	  
	  
	  
	  
	  
	  
	  
	  
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('๖̶̶̶ۣۣۜۜ͜ζ͜͡๖̶̶̶ۣۣۜۜ͜ζ͜͡welcome✨');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**SERVER NAME **")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
    
	
	
	
	
	
	
	
	
	client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name','๖̶̶̶ۣۣۜۜ͜ζ͜͡๖̶̶̶ۣۣۜۜ͜ζ͜͡welcome✨');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**SERVER NAME **")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
    
	
	
	
	
	
	
	
	

client.on('message', message => {
    if (message.content === 't!say') {
        message.reply('اكتب الي تبي اقوله انا!! ')
        }
});














client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['t!help','type t!help'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/barontube`);
    }, ms);
    console.log(` ????????? |> Name: ${client.user.username}`);
 console.log(` ????????? |> Servers: ${client.guilds.size}`);
 console.log(` ???????????????????? |> Members: ${client.users.size}`);
 console.log(` ????????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Id: ${client.user.id}`);
 console.log(` ???????????????????`);
 console.log(` ???????????????????`);
});
client.o








   client.on('message',function(message) {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "t!members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info 
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  client.on('message', message => {
    if (message.content.startsWith("t!bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`Number of banned persons **${bans.size}** `))
}
});








client.on('message', message => {
    if (message.content === 't!unban') {
        message.reply('تمه فك البان الي كان مبند من قبل ! ')
        }
});









client.on('message', message =>{
  if(message.content.startsWith(prefix + 't!add')) {
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.channel.send('**Please type the emoji ID after the command!**')
    if(args.length < "18" || args.length > "18" || isNaN(args)) return message.channel.send(`**This emoji Can't be Found :x:**`)
    message.guild.createEmoji(`https://cdn.discordapp.com/emojis/${args}.png`, `${args}`).catch(mstry => {
     return message.channel.send(`**This emoji Can't be Found :x:**`)
    })
    message.channel.send(`**Successfully Added The Emoji ✅**`)
  }
});









client.login('NTk4MjUwNzExOTQzMjE3MTUz.XST62A.dv5zUe91HE9U5ESiFoQnxdTjKr4');






client.on('message', message => {
       if(message.content === prefix + "t!mc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "t!nmc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
    }
       
});









client.on("message", (message) => {
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "t!delete") {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});  










client.on('message', message => {
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
var type = [
    {
            "type": "ما هي عاصمة المملكة العربية السعودية؟",
        "answers": ["الرياض"]
    },
    {
            "type": "ما هي عاصمة الامارات العربية المتحدة؟",
        "answers": ["ابو ظبى"]
    },
    {
            "type": "ما هي عاصمة مملكة البحرين؟",
        "answers": ["المنامة"]
    },
    {
            "type": "ما هي عاصمة سلطنة عمان؟",
        "answers": ["مسقط"]
    },
    {
            "type": "ما هي عاصمة قطر؟",
        "answers": ["الدوحة"]
    },
    {
            "type": "ما هي عاصمة اليمن؟",
        "answers": ["صنعاء"]
    },
    {
            "type": "ما هي عاصمة لبنان؟",
        "answers": ["بيروت"]
    },
    {
            "type": "ما هي عاصمة فلسطين؟",
        "answers": ["القدس"]
    },
    {
            "type": "ما هي عاصمة سوريا؟",
        "answers": ["دمشق"]
          },
    {
            "type": " ما هي عاصمة العراق؟",
        "answers": ["بغداد"]
          },
    {
            "type": "ما هي عاصمة جمهورية مصر العربية؟",
        "answers": ["القاهرة"]
          },
    {
            "type": "ما هي عاصمة تونس؟",
        "answers": ["تونس"]
          },
    {
            "type": "ما هي عاصمة الصومال؟",
        "answers": ["مقديشو"]
          },
    {
            "type": "ما هي عاصمة جيبوتي؟",
        "answers": ["جيبوتى"]
          },
    {
            "type": "ما هي عاصمة جزر القمر؟",
        "answers": ["مورونى"]
          },
    {
            "type": " ما هي عاصمة تركيا؟",
        "answers": ["انقرة"]
          },
    {
            "type": "ما هي عاصمة أفغانستان؟",
        "answers": ["كابول"]
          },
    {
            "type": "ما هي عاصمة روسيا؟",
        "answers": ["موسكو"]
          },
    {
            "type": "ما هي عاصمة استراليا؟",
        "answers": ["كانبرا"]
          },
    {
            "type": "ما هي عاصمة النمسا؟",
        "answers": ["فيينا"]
          },
    {
            "type": "ما هي عاصمة كندا؟",
        "answers": ["مونتريال"]
          },
    {
            "type": "ما هي عاصمة بوليفيا؟",
        "answers": ["لاباز"]
          },
    {
            "type": "ما هي عاصمة هولندا؟",
        "answers": ["امستردام"]
          }
    
];









client.on('message', function(message) {
    if(message.content.startsWith(prefix + 't!roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('حط رقم معين يتم السحب منه');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});










 client.on('message', async message => {
  if(message.content.startsWith(prefix + "t!temp")) {
    await message.channel.send("ارسل اسم الروم").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';

   
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
  time = co.first().content
co.first().delete()
  e.edit("ارسل نوع الروم text, voice")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
    limit = coll.first().content
coll.first().delete()

  e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("تم انقضاء الوقت")
    }, Math.floor(time*60000))
    
  })
  e.edit("تم انشاء الغرفه استمتع")

})
})
})
})
})

  }
})









client.on('message', message => {
  if(message.content.startsWith(prefix + 't!create')) {
    if(!message.guild) return undefined
    if(message.author.bot) return undefined
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/597710816967524352/mystery_twitter.png', 'Twitter')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/594671765339373568/Hypixel-Thumbnail.png', 'Hypixel')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/588151955063570433/582096911448801288.png', 'Right')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/588151956795686932/582096913206345729.png', 'Wrong')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/588151959077257217/582096913487233034.png', 'Discord')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/584632506930823199/582246841186254869.png', 'verified')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/597788682132520991/591895857239031809.gif', 'Cool')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/597788700142862337/587291237250236456.png', 'Love')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/597788729431818253/587291242874798156.png', 'Cry')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/597788758322053130/587505418406723584.gif', 'Craft')
    message.channel.send('**✅ Done**')
    .catch(stery => {
    return message.channel.send(`One Of the Emojies is too big :x:`)
  });}
});











var prefix = "$"
client.on('message', function(message) {
    if(message.content.startsWith(prefix +'t!addrool')) {
        let guild = message.mentions.members.first();
                          let ZmA = new Discord.RichEmbed()
                  .setColor('3fcf24')
                  .setDescription('**__:white_check_mark: تم إضافة رتبة الدعم الفني لك__**')
        message.member.addRole(message.guild.roles.find('name', 'اسم الرتبه'));
                    message.channel.send({embed:ZmA});
    }
});








client.on('message', message => {
    if (message.content === 'هات لي سندويش') {
        message.reply('من اي مطعم وعلى حساب من؟ ')
        }
});








client.on('message', message => {
    if (message.content === 'من مطعمي وعلى حسابك') {
        message.reply('اهو مطعمك دللنا شوي نزل لنا احسن اكل ومجانا ! ها وش قلت؟')
        }
});









client.on('message', message => {
    if (message.content === 'اتدلل اكل مجاني واحسن اكل انزل لك لعيون بوتي') {
        message.reply('اتسلم تسلم يا غالي انا تربايتك انت الي معلمني كل شيء ..!')
        }
});








client.on('message', message => {
    if (message.content === 't!invite') {
        message.reply('الانفايت حق البوت تلاقيه في الهيلب اكتب t!help-ar')
        }
});







 client.login('NTk4MjUwNzExOTQzMjE3MTUz.XST62A.dv5zUe91HE9U5ESiFoQnxdTjKr4');
 
 
 
 
 
 
 
 
 
 var prefix = 't!'; // your prefix
client.on('message', message => {
  if(message.content.split(' ')[0] == `{prefix}ban`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission.');
      if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have permission.');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send(`Usage: ${prefix}ban @mention reason`);
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send('You can\'t ban yourself!');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You can't ban **${user.user.tag}** because his role highest than your role!`);
     if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I can't ban **${user.user.tag}** because his role highest than my role!`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`You can't ban **${user.user.tag}** because he have Administration permissions!`);
     if(!message.guild.member(user.user).bannable) return message.channel.send(`I can't ban **${user.user.tag}**.`);
      message.guild.member(user).ban(reason, user);
      message.channel.send(`Done :+1:, I Banned ${user.user.username} from the server!\nReason: \`\`${reason}\`\``);
    }
});
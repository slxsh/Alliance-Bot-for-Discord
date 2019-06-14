const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

var mf1,mf2,mp2,mp1,ffc,aec,dh,df,cl;
var g1="Ballas Murdablock",g2="MSXIII";									  //Gang-names

bot.on("ready", async()=>{												  //when bot turns on
	console.log(`${bot.user.username} is online.`);						  //Logging in console
	bot.user.setActivity("Type '$help'");								  //To show 'Playing: Type $help' under the bot name
	con.query('SELECT * FROM pts',(err,rows)=>{
		if(err) throw err;
		mf2 = rows[0].gname;											  //selecting first row
		mf1 = rows[1].gname;
		mp1 = rows[2].gname;
		mp2 = rows[3].gname;
		aec = rows[4].gname;
		ffc = rows[5].gname;
		dh  = rows[6].gname;
		df  = rows[7].gname;
		cl  = rows[8].gname;
	});
});

const mysql = require('mysql'); // Linking mySQL to discord.js
const con = mysql.createConnection({ //creating new connection named con
  		host     : '',
  		user     : '',
  		password : '',
  		database : '',
  		port     : ''
});
	con.connect(error => {
	if(error) throw error;
	console.log("Connection to database successful!");
	});


bot.on("message", async message =>{
	if(message.author.bot) return;				//ignore if message is sent  by a bot
	if(message.channel.type === "dm") return;	//ignore if message is sent in dm

	let prefix = botconfig.prefix;				    //getting the prefix and storing it in prefix variable
	let messageArray = message.content.split(" ");  //Splitting the message into array whenever space is encountered
	let cmd = messageArray[0];						//first word of message is stored as command
	let arg1 = messageArray.slice(1);				//second word as first argument
	let arg2 = messageArray.slice(2);				//third word as second argument
	let arg3 = messageArray.slice(3);
	let arg4 = messageArray.slice(4);
	let arg5 = messageArray.slice(5);

	if(cmd === `${prefix}help`) //command to show other supported commands
	{  
		return message.channel.send("```Alliance Bot v1.1.0 by dallaz slash\nUse $capchart to see today's capping list.\nUse $*pointname*capped *(ms/ballas)* e.g. $mf2capped ballas to update the chart.( Admin Command)\nAvailable point names: cl aec mf2 mf1 mp1 mp2 ffc dh df\nMade using Discord.js and MySQL.```");
	}

	if(cmd == `${prefix}capchart`) //to show the chart
	{
		let icon = bot.user.displayAvatarURL; //getting url of bot's avatar
		let chart = new Discord.RichEmbed()   //creating embed, card style message
		.setTitle("Upcoming Points Capture Plan")
		.setColor("#a10ab5")
		.setThumbnail(icon)
		.addField("Material Factory 2 :",mf2,true)
		.addField("Material Factory 1 :",mf1,true)
		.addField("Material Pickup 1 :",mp1,true)
		.addField("Material Pickup 2 :",mp2,true)
		.addField("Crack Lab : ",cl,true)
		.addField("Drug House :",dh,true)
		.addField("FossilFuel Comp :",ffc,true)
		.addField("Drug Factory :",df,true)
		.addField("Auto Exp Company :",aec,true)
		.setFooter("Home Turfs: MS [North Willowfield, South Willowfield] | Ballas Murdablock [East Los Santos East, East Los Santos West]")
		.setTimestamp(); //shows time of message
		return message.channel.send(chart);
	}
	
	if(cmd === `${prefix}mf2capped`){
				if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.find(r => r.name == "chartkeeper")){
						if("ballas" == arg1.toString().toLowerCase())
							{
								mf2=g2;
								message.channel.send("✅ Ballas successfully capped MF2. MSXIII will cap next time. Chart updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'MSXIII' WHERE name ='mf2'");
							}
						else if(arg1.toString().toLowerCase() == "ms")
							{
								mf2=g1;
								message.channel.send("✅ MSXIII successfully capped MF2. Ballas will cap next time. Chart Updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'Ballas Murdablock' WHERE name ='mf2'");
							}
						else
							message.channel.send("❌ Invalid Gang Name, Available names: 'ballas' and 'ms'");}
				else
					message.channel.send("❌ Only admins can update the chart.");
				}
			if(cmd === `${prefix}mf1capped`){
				if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.find(r => r.name == "chartkeeper")){
						if("ballas" == arg1.toString().toLowerCase())
							{
								mf1=g2;
								message.channel.send("✅ Ballas successfully capped MF1. MSXIII will cap next time. Chart updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'MSXIII' WHERE name ='mf1'");
							}
						else if(arg1.toString().toLowerCase() == "ms")
							{
								mf1=g1;
								message.channel.send("✅ MSXIII successfully capped MF1. Ballas will cap next time. Chart Updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'Ballas Murdablock' WHERE name ='mf1'");
							}
						else
							message.channel.send("❌ Invalid Gang Name, Available names: 'ballas' and 'ms'");}
				else
					message.channel.send("❌ Only admins can update the chart.");
			}
			if(cmd === `${prefix}mp2capped`){
				if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.find(r => r.name == "chartkeeper")){
						if("ballas" == arg1.toString().toLowerCase())
							{
								mp2=g2;
								message.channel.send("✅ Ballas successfully capped MP2. MSXIII will cap next time. Chart updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'MSXIII' WHERE name ='mp2'");
							}
						else if(arg1.toString().toLowerCase() == "ms")
							{
								mp2=g1;
								message.channel.send("✅ MSXIII successfully capped MP2. Ballas will cap next time. Chart Updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'Ballas Murdablock' WHERE name ='mp2'");
							}
						else
							message.channel.send("❌ Invalid Gang Name, Available names: 'ballas' and 'ms'");}
				else
					message.channel.send("❌ Only admins can update the chart.");
			}
			if(cmd === `${prefix}mp1capped`){
				if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.find(r => r.name == "chartkeeper")){
						if("ballas" == arg1.toString().toLowerCase())
							{
								mp1=g2;
								message.channel.send("✅ Ballas successfully capped MP1. MSXIII will cap next time. Chart updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'MSXIII' WHERE name ='mp1'");
							}
						else if(arg1.toString().toLowerCase() == "ms")
							{
								mp1=g1;
								message.channel.send("✅ MSXIII successfully capped MP1. Ballas will cap next time. Chart Updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'Ballas Murdablock' WHERE name ='mp1'");
							}
						else
							message.channel.send("❌ Invalid Gang Name, Available names: 'ballas' and 'ms'");}
				else
					message.channel.send("❌ Only admins can update the chart.");
			}
			if(cmd === `${prefix}clcapped`){
				if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.find(r => r.name == "chartkeeper")){
						if("ballas" == arg1.toString().toLowerCase())
							{
								cl=g2;
								message.channel.send("✅ Ballas successfully capped CL. MSXIII will cap next time. Chart updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'MSXIII' WHERE name ='cl'");
							}
						else if(arg1.toString().toLowerCase() == "ms")
							{
								cl=g1;
								message.channel.send("✅ MSXIII successfully capped CL. Ballas will cap next time. Chart Updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'Ballas Murdablock' WHERE name ='cl'");
							}
						else
							message.channel.send("❌ Invalid Gang Name, Available names: 'ballas' and 'ms'");}
				else
					message.channel.send("❌ Only admins can update the chart.");
			}
			if(cmd === `${prefix}aeccapped`){
				if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.find(r => r.name == "chartkeeper")){
						if("ballas" == arg1.toString().toLowerCase())
							{
								aec=g2;
								message.channel.send("✅ Ballas successfully capped AEC. MSXIII will cap next time. Chart updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'MSXIII' WHERE name ='aec'");
							}
						else if(arg1.toString().toLowerCase() == "ms")
							{
								aec=g1;
								message.channel.send("✅ MSXIII successfully capped AEC. Ballas will cap next time. Chart Updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'Ballas Murdablock' WHERE name ='aec'");
							}
						else
							message.channel.send("❌ Invalid Gang Name, Available names: 'ballas' and 'ms'");}
				else
					message.channel.send("❌ Only admins can update the chart.");
			}
			if(cmd === `${prefix}ffccapped`){
				if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.find(r => r.name == "chartkeeper")){
						if("ballas" == arg1.toString().toLowerCase())
							{
								ffc=g2;
								message.channel.send("✅ Ballas successfully capped FFC. MSXIII will cap next time. Chart updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'MSXIII' WHERE name ='ffc'");
							}
						else if(arg1.toString().toLowerCase() == "ms")
							{
								ffc=g1;
								message.channel.send("✅ MSXIII successfully capped FFC. Ballas will cap next time. Chart Updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'Ballas Murdablock' WHERE name ='ffc'");
							}
						else
							message.channel.send("❌ Invalid Gang Name, Available names: 'ballas' and 'ms'");}
				else
					message.channel.send("❌ Only admins can update the chart.");
			}
			if(cmd === `${prefix}dhcapped`){
				if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.find(r => r.name == "chartkeeper")){
						if("ballas" == arg1.toString().toLowerCase())
							{
								dh=g2;
								message.channel.send("✅ Ballas successfully capped DH. MSXIII will cap next time. Chart updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'MSXIII' WHERE name ='dh'");
							}
						else if(arg1.toString().toLowerCase() == "ms")
							{
								dh=g1;
								message.channel.send("✅ MSXIII successfully capped DH. Ballas will cap next time. Chart Updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'Ballas Murdablock' WHERE name ='dh'");
							}
						else
							message.channel.send("❌ Invalid Gang Name, Available names: 'ballas' and 'ms'");}
				else
					message.channel.send("❌ Only admins can update the chart.");
			}
			if(cmd === `${prefix}dfcapped`){
				if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.find(r => r.name == "chartkeeper")){
						if("ballas" == arg1.toString().toLowerCase())
							{
								df=g2;
								message.channel.send("✅ Ballas successfully capped DF. MSXIII will cap next time. Chart updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'MSXIII' WHERE name ='df'");
							}
						else if(arg1.toString().toLowerCase() == "ms")
							{
								df=g1;
								message.channel.send("✅ MSXIII successfully capped DF. Ballas will cap next time. Chart Updated by <@"+message.author.id+">");
								con.query("UPDATE pts SET gname = 'Ballas Murdablock' WHERE name ='df'");
							}
						else
							message.channel.send("❌ Invalid Gang Name, Available names: 'ballas' and 'ms'");}
				else
					message.channel.send("❌ Only admins can update the chart.");
			}
			if(cmd == `${prefix}commenceselfdestructsequence`){
				message.channel.send({
		   			files: ['./selfdestruct.gif']
				});
			}
bot.login(botconfig.token);
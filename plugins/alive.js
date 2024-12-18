const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "🐿️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'https://github.com/Navinofc44/Autovoice-data/raw/refs/heads/main/Converted%20By%20%C2%BBS%CA%9C%C9%9B%CA%9C%CA%8C%CA%80%CA%8C.mp3'
                    }
let des = `*👋 Hello ${pushname}*

_*☣️ 𝐇𝐄𝐘 𝐈 𝐀𝐌 𝐀𝐋𝐕𝐈𝐍 𝐌𝐃 𝐀𝐋𝐈𝐕𝐄 ☣️*_                 
 

> 🧸 𝙰𝙻𝚅𝙸𝙽-𝙼𝙳 𝙼𝙰𝙳𝙴 𝙱𝚈 𝚂𝚄𝚁𝙰𝙽𝙶𝙰 🧸
`
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp3', ptt: true }, { quoted: mek })
return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/5unv5s.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

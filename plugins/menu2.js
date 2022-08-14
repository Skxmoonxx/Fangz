import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `_👋Hallo Ganteng/Cantik_\n\n╰► *ʙᴏᴛ ʙʏ ꜰᴀɴɢᴢ*
╲╲╭━━━━╮
╭╮┃▆┈┈▆┃╭╮
┃╰┫▽▽▽┣╯┃
╰━┫△△△┣━╯
╲╲┃┈┈┈┈┃
╲╲┃┈┏┓┈┃
▔▔╰━╯╰━╯
`

let audioName = "Play-Date-Melanie-Martinez-Cover-by-#U90a2#U51ef#U60a6XKY.opus";
let audioPTT = fs.readFileSync('./mp3/' + audioName)

        conn.sendFile(m.chat, audioPTT, '', '', m, false, { ptt: true })
await conn.sendButton(m.chat, `Hallo Kak...\n➘\nJangan di Spam yah bot nya :)\n`,wm + '\n\n' + botdate, thumbbc, [['• Click Here •','.listmenu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Bot By Fangz',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sgh
                      }}
})
}
handler.command = /^(menu|help)$/i

handler.register = true
handler.exp = 3

export default handler
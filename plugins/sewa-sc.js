import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `_👋Hallo, Mau beli sc?\n\n╰► *ʙᴏᴛ ʙʏ ꜰᴀɴɢᴢ*
`

let td = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(), fileName: wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: wm,
            footer: wm2,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🐈 Github',
                        url: sgh
                    }
                },
                {
                    urlButton: {
                        displayText: '📞 Buy Sc di sini',
                        url: 'https://wa.me/6288215689772',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📛 ᴊᴀɴɢᴀɴ ᴅɪ ᴋʟɪᴋ ᴋᴀᴋ',
                        id: 'huuu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📊 ʙᴏᴛ ɪɴꜰᴏ',
                        id: '.botinfo'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '💬 ʜᴀʟʟᴏ ʙᴏᴛ',
                        id: '.salken'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
await conn.sendButton(m.chat, `Hallo Kak...\n➘\nPastikan anda menyetujui harga yg di berikan\n`,wm + '\n\n' + botdate, giflogo, [['🥞OKE','Ok']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'BOT BY FANGZ',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sgc
                      }}
})
}
handler.help = ['buyscbot','beliscript']
handler.tags = ['store']
handler.command = /^(beliscript|buyscbot)$/i

handler.register = true
handler.exp = 3

export default handler
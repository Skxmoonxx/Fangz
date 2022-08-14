import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Nih sc nya bg (・o・)`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '📮Sc di sini',
                        url: 'https://youtu.be/UOL_t5iwOPo'
                    }
                },
                {
                    urlButton: {
                        displayText: '📞 Owner',
                        url: 'https://wa.me/6288215689772',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📜MENU',
                        id: '.menu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🌸MINTA SC',
                        id: 'Kontol'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '💱DONASI',
                        id: '.donasi'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Beli sc? chat author', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['sc','script']
handler.tags = ['info']
handler.command =  /^(sc|script)$/i

handler.register = true
handler.premium = false
handler.limit = true

export default handler
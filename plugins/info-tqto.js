let handler = async (m, { conn }) => {
let info = `
*${htki} TQTO ${htka}*

💌 Contributor Script Bot
`
const sections = [
   {
	title: `✃ THANKS TO`,
	rows: [
	    {title: "✨ FangzXD", rowId: '.', description: '╰►Kang Recode sc:v' },
	    {title: "✨ Kanna", rowId: '.', description: '╰►Stah' },
	{title: "✨ The.sad.boy01", rowId: '.', description: '╰►Contributor' },
	{title: "✨ Nurutomo", rowId: '.', description: '╰►Contributor' },
	{title: "✨ Adiwajshing", rowId: '.', description: '╰►Contributor' },
	{title: "✨ Amirul", rowId: '.', description: '╰►Contributor' },
	{title: "✨ Bochilgaming", rowId: '.', description: '╰►Penyedia Base' },
	{title: "✨ Fokus ID", rowId: '.', description: '╰►Bantu bikin esce 🗿' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['tqto', 'contributor']
handler.tags = ['info']
handler.command = /^(tqto|thanksto|contributor)$/i
handler.private = false

export default handler

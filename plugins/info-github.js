let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `📮 *SC CHAT GUA DI WA*

Atau Bisa Lewat Link Dibawah Ini :
https://wa.me/6285237596750
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*DITYA BOT GITHUB*', 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = /^(github)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

export default handler 
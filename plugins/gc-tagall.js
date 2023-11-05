const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
let oi = `*👑@ff_aryan2* ${pesan}`
let teks = `*🥷🏻Aryanbot te invoca🥷🏻*\n\n${oi}\n*𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙴𝚂*\n`
for (let mem of participants) {
teks += `🥷🔥 @${mem.id.split('@')[0]}\n`}
teks += `🍓AryanBot`
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;

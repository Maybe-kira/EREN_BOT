import { createHash } from 'crypto';
import PhoneNumber from 'awesome-phonenumber';

let handler = async (m, { conn, usedPrefix, command }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png');
    let user = global.db.data.users[who];
    let messages = user.messages || 0;

    let str = `*الاسم:* ${conn.getName(who)}\n*الرسائل:* ${messages}`;

    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] });
};

handler.help = ['perfil'];
handler.tags = ['group'];
handler.command = ['بروفايل', 'perfil', 'ماي'];

export default handler;

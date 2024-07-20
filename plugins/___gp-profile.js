import { createHash } from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import { canLevelUp, xpRange } from '../lib/levelling.js';
// import db from '../lib/database.js';

let handler = async (m, { conn, usedPrefix, command }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png');
    let user = global.db.data.users[who];
    let { name, exp, diamond, lastclaim, registered, regTime, age, level, warn } = user;
    let messages = user.messages || 0; // التأكد من أن messages ليست NaN أو undefined
    let { min, xp, max } = xpRange(user.level, global.multiplier);
    let username = conn.getName(who);
    let math = max - xp;
    let prem = global.prems.includes(who.split`@`[0]);
    let sn = createHash('md5').update(who).digest('hex');
    let maxwarn = 3; // تعريف maxwarn بقيمة افتراضية

    // تحديد الدور بناءً على النقاط
    const lvpoints = level;
    let role = "?";
    if (lvpoints <= 2) {
        role = "مواطن 👦🏻";
    } else if (lvpoints <= 4) {
        role = "شونين 👦🏻🗡️";
    } else if (lvpoints <= 6) {
        role = "شينوبي 🗡️";
    } else if (lvpoints <= 8) {
        role = "قرصان 🏴‍☠️";
    } else if (lvpoints <= 10) {
        role = "جندي بحرية 👮🏼‍♀️";
    } else if (lvpoints <= 12) {
        role = "صائد قراصنة 💀";
    } else if (lvpoints <= 14) {
        role = "قبطان 👨🏻‍✈️";
    } else if (lvpoints <= 16) {
        role = "نائب ادميرال 👥";
    } else if (lvpoints <= 18) {
        role = "ادميرال 🛡";
    } else if (lvpoints <= 20) {
        role = "كاغي 🎗";
    } else if (lvpoints <= 22) {
        role = "اوتشيها 🔥";
    } else if (lvpoints <= 24) {
        role = "شينيغامي 💀";
    } else if (lvpoints <= 26) {
        role = "سايان 🔥";
    } else if (lvpoints <= 28) {
        role = "سوبر سايان ✊🏻";
    } else if (lvpoints <= 30) {
        role = "قاتل تنين 🐲";
    } else if (lvpoints <= 32) {
        role = "قائد اسطول ☠️";
    } else if (lvpoints <= 34) {
        role = "الفارس الأسود 🖤";
    } else if (lvpoints <= 36) {
        role = "ساموراي 🗡️";
    } else if (lvpoints <= 38) {
        role = "قاتل شياطين 👌🏻";
    } else if (lvpoints <= 40) {
        role = "وريث هاشيرا 🔥";
    } else if (lvpoints <= 42) {
        role = "هاشيرا ⚕️";
    } else if (lvpoints <= 44) {
        role = "قمر ادنى 👿";
    } else if (lvpoints <= 46) {
        role = "قمر أعلى 👹";
    } else if (lvpoints <= 48) {
        role = "قائد جمعية الصيادين 🏹";
    } else if (lvpoints <= 50) {
        role = "مساعد حاكم الدمار 🚀";
    } else if (lvpoints <= 52) {
        role = "حاكم الدمار 👑";
    } else if (lvpoints <= 54) {
        role = "نائب قائد فريق 👨‍⚖️";
    } else if (lvpoints <= 56) {
        role = "قائد فريق ⚔️";
    } else if (lvpoints <= 58) {
        role = "القائد الأعلى 👹";
    } else if (lvpoints <= 60) {
        role = "اسبادا 🔮";
    } else if (lvpoints <= 62) {
        role = "تارتاروس 👹";
    } else if (lvpoints <= 64) {
        role = "E.N.D 🔚";
    } else if (lvpoints <= 66) {
        role = "تنين 🐉";
    } else if (lvpoints <= 68) {
        role = "ملك التنانين 👑";
    } else if (lvpoints <= 70) {
        role = "تشيبوكاي 🪝";
    } else if (lvpoints <= 72) {
        role = "نائب يونكو 💂🏼";
    } else if (lvpoints <= 74) {
        role = "يونكو 🧛🏻";
    } else if (lvpoints <= 77) {
        role = "ملك القراصنة 👒";
    } else if (lvpoints <= 80) {
        role = "منقطع النظير 🔱";
    } else {
        role = "القوت 🐐";
    }

    let str = `*❖ ── ✦ ──『⚜️』── ✦ ── ❖*
*⤶❏ الاسم 👤:* ${username} ${registered ? '\n   • ' + name + ' ' : ''}   
*⤶❏ المنشن 📧 : @${who.replace(/@.+/, '')}*
*⤶❏ الرقم ☎️ : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}*
*⤶❏ الرابط 🖇️ : wa.me/${who.split('@')[0]}${registered ? '\n⤶❏ *🎈العمر*: ' + age + ' years' : ''}*
*⤶❏ التحذيرات ⛔ : ${warn}/${maxwarn}*
*⤶❏ الجواهر 💎 : ${diamond}*
*⭈ 📥 الرسائل: ${messages}* 
*⤶❏ المستوى 📊 : ${level}*
*⤶❏ الاكس بي 📈* : المجموع ${exp} (${user.exp - min} / ${xp})\n${math <= 0 ? `*${usedPrefix}levelup*` : `فاضل لك *${math}اكس بي للصعود الى لفل اخر*`}
*⤶❏ التصنيف 🧮 : ${role}*
*⤶❏ التسجيل 📄 : ${registered ? 'يب' : 'لا'}*
*❖ ── ✦ ──『⚜️』── ✦ ── ❖*`;

    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] });
};

handler.help = ['perfil'];
handler.tags = ['group'];
handler.command = ['بروفايل', 'perfil', 'ماي'];

export default handler;

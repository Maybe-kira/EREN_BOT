import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' && device !== 'web') {
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/48d1b1b70fcc002571a78.jpg'}}, { upload: conn.waUploadToServer });

        const interactiveMessage = {
            body: { text: `*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*\n*〄┃قائمـة الـاوامـر ┃↞ ❮ 🔮 ❯* \n*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*`.trim() },
            footer: { text: ` > لا تنسى قبل كل امر تحط نقطة❗\n> راسل المطور اذا حدث اي عطل🧿`.trim() },
            header: {
                title: `*✧━━ • ━ 「 l✤l 」 ━ • ━━✧*\n*˼‏❖˹┇⇠『 مرحبآ @${mentionId.split('@')[0]}』*\n*╮─────✦❯┇💎┇❮✦─────╭*\n*〄┃ بـووت ↞ 🎀『 مـيزوهـارا 』*\n*〄┃وقت التشغيل ↞ ⌛『 دائم』*\n*〄┃وضـع الـبوت ↞ 🪧『 عـام 』*\n*〄┃الـمـنـصـه ↞ 🌐『 هـيـروكـو』*\n*╯─────✦❯┇💎┇❮✦─────╰*\n❯⏐ 𝐵𝛩𝑇 𝑀𝐼𝑍𝑈𝐻𝐴𝑅𝐴\n*✧━━ • ━ 「 l✤l 」 ━ • ━━✧*\n> جميع الاوامر قم بختيار اي امر🏷\n> افتح القائمة بالضغط على الزر☘️`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: '❯⏐قائـمة الاوامـر🔮',
                            sections: [
                                {
                                    title: 'List',
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐اوامـر الـمطـور↞👑',
                                            title: 'المطور',
                                            description: '',
                                            id: '.ميزو11'
                                        },
                                        {
                                            header: '❯⏐جـمـيـع الاوامـر ↞💎',
                                            title: 'كل الاوامر',
                                            description: '',
                                            id: '.ميزو12'
                                        }
                                    ]
                                }
                            ]
                        })
                    },
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({
                            display_text: '❯⏐الـمـطـور⚡️',
                            id: `.المطور`
                        })
                    },
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({
                            display_text: `❯⏐شـرح الـبـوت🔍 ',
                            id: '.شرح'`
                        })
                    },
                    {
                        name: 'cta_url',
                        buttonParamsJson: JSON.stringify({
                            display_text: '❯⏐قناني الواتساب☘️',
                            url: 'https://whatsapp.com/channel/0029VaenWxX0AgWDJwlaWG0W',
                            merchant_url: 'https://whatsapp.com/channel/0029VaenWxX0AgWDJwlaWG0W'
                        })
                    }
                ],
                messageParamsJson: ''
            }
        };

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m });
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);
    }
};

handler.help = ['الاوامر'];
handler.tags = ['For Test'];
handler.command = /^(الاوامر|اوامر)$/i;
export default handler;

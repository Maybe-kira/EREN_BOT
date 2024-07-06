import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/48d1b1b70fcc002571a78.jpg'}}, { upload: conn.waUploadToServer })
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
                                            header: '❯⏐اوامـر الـقـروبـات↞📜',
                                            title: ' .ميزو1 ',
                                            description: '',
                                            id: ' .ميزو1 '
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐اوامـر الأعـضـاء↞🪽',
                                            title: '.ميزو2',
                                            description: '',
                                            id: '.ميزو2'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐اوامـر  الـترفـيـه↞🎀',
                                            title: 'ميزو3.',
                                            description: '',
                                            id: '.ميزو3'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐اوامـر  التـحمـيل↞🖨️',
                                            title: 'ميزو4.',
                                            description: '',
                                            id: ' ميزو4. '
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐اوامـر الـصـور↞☘️',
                                            title: 'ميزو5',
                                            description: '',
                                            id: ' ميزو5.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐اوامـر الـلـفـل↞🏅',
                                            title: 'ميزو6',
                                            description: '',
                                            id: '.ميزو6'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐اوامـر الملصقات↞❄️',
                                            title: 'ميزو7',
                                            description: '',
                                            id: '.ميزو7'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐اوامـر الأصـوات↞🎵',
                                            title: 'ميزو8',
                                            description: '',
                                            id: '.ميزو8'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐اوامـر ديـنـيـه↞🕌',
                                            title: 'ميزو9',
                                            description: '',
                                            id: '.ميزو9'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐مـعلـومـات الـبـوت↞🪙',
                                            title: 'ميزو10',
                                            description: '',
                                            id: '.ميزو10'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐اوامـر الـمطـور↞👑',
                                            title: 'ميزو11',
                                            description: '',
                                            id: 'ميزو11'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '',
                                    rows: [
                                        {
                                            header: '❯⏐جـمـيـع الاوامـر ↞💎',
                                            title: 'ميزو12',
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
                            display_text: '❯⏐الـمـطـور⚡️',
                            id: `.المطور`
                        })
                    }
                ]
            }
        };

        const message = generateWAMessageFromContent(m.key.remoteJid, {
            "templateMessage": {
                "hydratedTemplate": interactiveMessage
            }
        }, {});

        await conn.relayWAMessage(message);
    }
};

handler.command = /^قائمة$/i

export default handler

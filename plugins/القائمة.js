import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);

    if (device !== 'desktop' && device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/48d1b1b70fcc002571a78.jpg' } });

        const interactiveMessage = {
            body: { text: `test`.trim() },
            footer: { text: `©JoAnimi for test`.trim() },  
            header: {
                title: `test`,
                subtitle: `test`,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: 'قايمة الاوامر',
                            sections: [
                                {
                                    title: 'List',
                                    highlight_label: 'ALOTAIBI',
                                    rows: [
                                        {
                                            header: 'القروبات',
                                            title: 'groups',
                                            description: 'Click Me',
                                            id: '.ميزو1'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ALOTAIBI',
                                    rows: [
                                        {
                                            header: 'الاعضاء',
                                            title: 'Members',
                                            description: 'Click Me',
                                            id: '.ميزو2'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: 'كل الاوامر',
                                            title: 'AllOrders',
                                            description: 'Click Me',
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
                            display_text: 'تواصل مع المطور',
                            id: `.المطور`
                        })
                    },
                    {
                        name: 'send_location',
                        buttonParamsJson: JSON.stringify({})
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
        
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};

handler.help = ['الاوامر'];
handler.tags = ['For Test'];
handler.command = /^(الاوامر|اوامر)$/i;

export default handler;

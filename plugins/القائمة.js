//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'
const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/2a7bf4ee1980dc10aec4e.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `*▢ مرحبا بك يا : @${mentionId.split('@')[0]}*
      ──━━━══⟐══━━━──
 • # اختر القائمه من خلال الزر ☟
 • # اكتب *" . "* قبل كل امر
 • # تأكد من كتابة الامر بشكل صحيح
      ──━━━══⟐══━━━──
▢ اسـم الـبـوت : *فـيـفـي - Vivi*
▢ الــمــطــور : *بــروك - 𝐾 ͟͟𝐿 ͟͟⁩*
▢ مـدة الـتـشـغـيـل : *${uptime}*
╯─━━──═❆ ❮ ❖ ❯ ❆═──━━─╰`.trim() },
            footer: { text: `*_˼‏ 𝙑 𝙞 𝙫 𝙞  𝘽 𝙤 𝙩 – v2.0 – 𝘽 𝙧 𝙤 𝙤 𝙠 ˹_*`.trim() },  
            header: {
                title: `╮━─═❆❮ قـائـمـة الاوامــر ❯❆═─━╭`,
                subtitle: `*▢ مرحبا بك يا : @${mentionId.split('@')[0]}*
      ──━━━══⟐══━━━──
 • # اختر القائمه من خلال الزر ☟
 • # اكتب *" . "* قبل كل امر
 • # مازال هذا البوت تحت التطوير اذا
      واجهتك اي مشكله يرجى التواصل
      مع المطور
      ──━━━══⟐══━━━──
▢ اسم البوت : *فـيـفـي - Vivi*
▢ المطور : *بروك - 𝐾 ͟͟𝐿 ͟͟⁩*
▢ مدة التشغيل : *${uptime}*
╯─━━──═❆ ❮ ❖ ❯ ❆═──━━─╰`,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضـغـط هـنـا ➥',
                    sections: [
                      {
                        title: '⟐═━─⏣─━═❪ 🇻 🇮 🇻 🇮   🇧 🇴 🇹 ❫═━─⏣─━═⟐',
                        highlight_label: '☚',
                        rows: [
                                        {
                                            header: '# قـسـم الـمـهـام🗂️ ⍅',
                                            title: '.مهام',
                                            description: '',
                                            id: '.مهام'
                                          }
                        ]
                      },
                      {
                        highlight_label: '',
                        rows: [
                          {
                            header: '# قـسـم الـطـلـبـات📥 ⍅',
                            title: '.طلبات',
                            description: '',
                            id: '.طلبات'
                          }
                        ]
                      },
                      {
                        highlight_label: '',
                        rows: [
                          {
                            header: '# قـسـم الالـعـاب🎮 ⍅',
                            title: '.ميزو1',
                            description: '',
                            id: '.ميزو1'
                          }
                        ]
                      },
                      {
                        highlight_label: '',
                        rows: [
                          {
                            header: '# قـسـم الـتـرفـيـه🏵️ ⍅',
                            title: '.ميزو3',
                            description: '',
                            id: '.ميزو3'
                          }
                        ]
                      },            {
                        highlight_label: '',
                        rows: [
                          {
                            header: '# قـسـم الـديـن📿 ⍅',
                            title: '.ميزو12',
                            description: '',
                            id: '.ميزو12
                          }
                        ]
                      },
                                    {
                                        highlight_label: '',
                                        rows: [
                                            {
                                            header: '# قـسـم الـمـجـمـوعـة⚙️ ⍅',
                            title: '.المجموعة',
                            description: '',
                            id: '.المجموعة'
                                        }
                                        ]
                                    }
                    ]
                  })
                },
                              {

                              },
                              {

                              },
                              {

                              },
                              {


                              },
                              {

                              },
                              {

                              },
                              {

                              },
                              {

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
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(اوامر|الاوامر|الأوامر|أوامر)$/i;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

export default handler;

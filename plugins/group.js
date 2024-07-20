/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const moment = require("moment-timezone");
const fs = require('fs-extra')
const Levels = require("discord-xp");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
//---------------------------------------------------------------------------
cmd({
            pattern: "انضم",
            desc: "joins group by link",
            category: "للمالك",
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`Please give me Query ${tlang().greet}`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com"))
                citel.reply("Link Invalid, Please Send a valid whatsapp Group Link!");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("🟩انضم للمجموعة"))
                .catch((err) => citel.reply("حدث خطأ اثناء الانضمام"));

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ملصق",
            alias: ["s"],
            desc: "Makes sticker of replied image/video.",
            category: "تحويل",
            use: '<رد على صورة او فيديو.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*رد على صورة او فيديو.*`);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
            if (citel.quoted) {
                let media = await citel.quoted.download();
                citel.reply("*ثواني بس..*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            } else if (/video/.test(mime)) {
                if ((quoted.msg || citel.quoted)
                    .seconds > 20) return citel.reply("المقطع لازم يكون اقل من *20 ثانية*");
                let media = await quoted.download();
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.FULL, // The sticker type
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 70, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const stikk = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });
            } else {
                citel.reply("*رد على صورة او فيديو وابشر*");
            }
        }
    )
    //---------------------------------------------------------------------------
/*cmd({
        pattern: "support",
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text) => {
        citel.reply(`*Check your Pm ${tlang().greet}*`);
        await Void.sendMessage(`${citel.sender}`, {
            image: log0,
            caption: `*اكتب .المالك وكلم غومونريونغ اذا عندك اقتراح او استفسار`,
        });

    }
)*/

//---------------------------------------------------------------------------
/*cmd({
            pattern: "انذار",
            desc: "Warns user in Group.",
            category: "للمشرفين",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text,{ isCreator }) => {
             if (!citel.isGroup) return citel.reply('امر خاص بالمجموعات')
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins) return citel.reply('خاص بالمشرفين.')
 const S=m;function Z(){const F=['126402oKAcRa','date','Removing\x20User\x20because\x20Warn\x20limit\x20exceeded\x0a\x0a*All\x20Warnings.*\x0a','chat','8qachoN','580yXDZAo','groupParticipantsUpdate','114528WgITIL','reply','groupMetadata','│\x20*🔰Time:-*\x20','find','locale','log','196311jXGmuc','quoted','save','*\x0a╭─────────────◆\x0a│\x20*🍁In\x20Group:-*\x20','759700KYdstU','warnedby','pushName','reason','8dUtMfa','2BlOCqD','550MdvhLT','*----Warn----*\x0aUser:\x20@','54828ViphBF','subject','1100323uEahgH','30204512uUuJcj','*There\x20are\x20total\x20','split','│\x20*⚠️Warned\x20by:-*\x20','length','sender','setDefault','group','Asia/KOLKATA','../config','215XZLRSE','HH:mm:ss','warn','remove'];Z=function(){return F;};return Z();}(function(U,w){const c=m,s=U();while(!![]){try{const q=parseInt(c(0x1eb))/0x1*(parseInt(c(0x1f0))/0x2)+parseInt(c(0x1e7))/0x3*(parseInt(c(0x1ef))/0x4)+-parseInt(c(0x200))/0x5*(-parseInt(c(0x204))/0x6)+-parseInt(c(0x1f5))/0x7*(-parseInt(c(0x1dd))/0x8)+-parseInt(c(0x1f3))/0x9*(-parseInt(c(0x1de))/0xa)+parseInt(c(0x1f1))/0xb*(parseInt(c(0x1e0))/0xc)+-parseInt(c(0x1f6))/0xd;if(q===w)break;else s['push'](s['shift']());}catch(B){s['push'](s['shift']());}}}(Z,0x707d4));function m(Y,U){const w=Z();return m=function(s,q){s=s-0x1dd;let B=w[s];return B;},m(Y,U);}if(!citel['quoted'])return citel[S(0x1e1)]('Please\x20quote\x20a\x20user\x20master.');const timesam=moment(moment())['format'](S(0x201));moment['tz'][S(0x1fc)](S(0x1fe))[S(0x1e5)]('id');try{let metadata=await Void[S(0x1e2)](citel[S(0x207)]);await new warndb({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202),'reason':text,'group':metadata[S(0x1f4)],'warnedby':citel[S(0x1ed)],'date':timesam})[S(0x1e9)]();let ment=citel[S(0x1e8)][S(0x1fb)];Void['sendMessage'](citel['chat'],{'text':S(0x1f2)+citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+'\x0aWith\x20Reason:\x20'+text+'\x0aWarned\x20by:\x20'+citel[S(0x1ed)],'mentions':[citel[S(0x1e8)][S(0x1fb)]]},{'quoted':citel});let h=await warndb[S(0x1e4)]({'id':citel['quoted'][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});const Config=require(S(0x1ff));if(h[S(0x1fa)]>Config['warncount']){teskd=S(0x206);let h=await warndb[S(0x1e4)]({'id':citel[S(0x1e8)][S(0x1fb)][S(0x1f8)]('@')[0x0]+S(0x202)});teskd+=S(0x1f7)+h[S(0x1fa)]+'\x20\x20warnings.*\x0a';for(let i=0x0;i<h[S(0x1fa)];i++){teskd+='*'+(i+0x1)+S(0x1ea)+h[i][S(0x1fd)]+'\x0a',teskd+=S(0x1e3)+h[i][S(0x205)]+'\x0a',teskd+=S(0x1f9)+h[i][S(0x1ec)]+'\x0a',teskd+='│\x20_📍Reason:\x20'+h[i][S(0x1ee)]+'_\x0a╰─────────────◆\x0a\x0a';}citel[S(0x1e1)](teskd),await Void[S(0x1df)](citel['chat'],[citel['quoted'][S(0x1fb)]],S(0x203));}}catch(Y){console[S(0x1e6)](Y);}
            
        }
    )*/
    //---------------------------------------------------------------------------
cmd({
            pattern: "الغاء-حظر",
            desc: "Unblocked to the quoted user.",
            category: "للمالك",
            filename: __filename,

        },
        async(Void, citel, text,{ isCreator }) => {

            if (!citel.quoted) return citel.reply("Please reply to user");
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.updateBlockStatus(users, "unblock")
                .then((res) => console.log(jsonformat(res)))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "ايدي",
        desc: "get jid of all user in a group.",
        category: "للمالك",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(tlang().owner)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
		const participants = citel.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }
      citel.reply(textt)

    }
)

    //---------------------------------------------------------------------------


//---------------------------------------------------------------------------
cmd({
            pattern: "اقتراح",
            desc: "Sends requst to main Bot developer.",
            category: "معلومات المالك",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!text) return reply(`Example : ${
        prefix + command
      } hello dev please add a downloader feature`);
            textt = `*| REQUEST |*`;
            teks1 = `\n\n*User* : @${
    citel.sender.split("@")[0]
  }\n*Request* : ${text}`;
            teks2 = `\n\n*Hii ${pushname},تم ارسال اقتراحك الى غومونريونغ! *.\n*شكرا لك.*`;
            for (let i of owner) {
                Void.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [citel.sender],
                }, {
                    quoted: citel,
                });
            }
            Void.sendMessage(citel.chat, {
                text: textt + teks2 + teks1,
                mentions: [citel.sender],
            }, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
/*cmd({
  pattern: "حذف-انذار",
  desc: "Deletes all previously given warns of quoted user.",
  category: "للمشرفين",
  filename: __filename,
  use: '<quote|reply|number>',
}, async (Void, citel, text, { isCreator }) => {
  if (!isCreator && !isAdmins) return citel.reply('هذا الأمر خاص بمشرفي المجموعة.')
  if (!citel.quoted) return citel.reply('منشن الشخص طال عمرك')
  await warndb.deleteOne({ id: citel.quoted.sender.split('@')[0] + 'warn' });
  return citel.reply('تم حذف الانذارات، بداية صفحة جديدة👍🏻\n.')
}
   )*/
    //---------------------------------------------------------------------------
/*cmd({
            pattern: "poll",
            desc: "Makes poll in group.",
            category: "group",
            filename: __filename,
            use: `question;option1,option2,option3.....`,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let [poll, opt] = text.split(";");
            if (text.split(";") < 2)
                return await citel.reply(
                    `${prefix}poll question;option1,option2,option3.....`
                );
            let options = [];
            for (let i of opt.split(',')) {
                options.push(i);
            }
            await Void.sendMessage(citel.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
    )*/
    //---------------------------------------------------------------------------
cmd({
            pattern: "بروفايل",
            desc: "Shows profile of user.",
            category: "عام",
            filename: __filename,
        },
        async(Void, citel, text) => {
            var bio = await Void.fetchStatus(citel.sender);
            var bioo = bio.status;
            let meh = citel.sender;
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "?";
          if (lvpoints <= 2) {
  var role = "مواطن 👦🏻";
} else if (lvpoints <= 4) {
  var role = "شونين 👦🏻🗡️";
} else if (lvpoints <= 6) {
  var role = "شينوبي 🗡️";
} else if (lvpoints <= 8) {
  var role = "قرصان 🏴‍☠️";
} else if (lvpoints <= 10) {
  var role = "جندي بحرية 👮🏼‍♀️";
} else if (lvpoints <= 12) {
  var role = "صائد قراصنة 💀";
} else if (lvpoints <= 14) {
  var role = "قبطان 👨🏻‍✈️";
} else if (lvpoints <= 16) {
  var role = "نائب ادميرال 👥";
} else if (lvpoints <= 18) {
  var role = "ادميرال 🛡";
} else if (lvpoints <= 20) {
  var role = "كاغي 🎗";
} else if (lvpoints <= 22) {
  var role = "اوتشيها 🔥";
} else if (lvpoints <= 24) {
  var role = "شينيغامي 💀";
} else if (lvpoints <= 26) {
  var role = "سايان 🔥";
} else if (lvpoints <= 28) {
  var role = "سوبر سايان ✊🏻";
} else if (lvpoints <= 30) {
  var role = "قاتل تنين 🐲";
} else if (lvpoints <= 32) {
  var role = "قائد اسطول ☠️";
} else if (lvpoints <= 34) {
  var role = "الفارس الأسود 🖤";
} else if (lvpoints <= 36) {
  var role = "ساموراي 🗡️";
} else if (lvpoints <= 38) {
  var role = "قاتل شياطين 👌🏻";
} else if (lvpoints <= 40) {
  var role = "وريث هاشيرا 🔥";
} else if (lvpoints <= 42) {
  var role = "هاشيرا ⚕️";
} else if (lvpoints <= 44) {
  var role = "قمر ادنى 👿";
} else if (lvpoints <= 46) {
  var role = "قمر أعلى 👹";
} else if (lvpoints <= 48) {
  var role = "قائد جمعية الصيادين 🏹";
} else if (lvpoints <= 50) {
  var role = "مساعد حاكم الدمار 🚀";
} else if (lvpoints <= 52) {
  var role = "حاكم الدمار 👑";
} else if (lvpoints <= 54) {
  var role = "نائب قائد فريق 👨‍⚖️";
} else if (lvpoints <= 56) {
  var role = "قائد فريق ⚔️";
} else if (lvpoints <= 58) {
  var role = "القائد الأعلى 👹";
} else if (lvpoints <= 60) {
  var role = "اسبادا 🔮";
} else if (lvpoints <= 62) {
  var role = "تارتاروس 👹";
} else if (lvpoints <= 64) {
  var role = "E.N.D 🔚";
} else if (lvpoints <= 66) {
  var role = "تنين 🐉";
} else if (lvpoints <= 68) {
  var role = "ملك التنانين 👑";
} else if (lvpoints <= 70) {
  var role = "تشيبوكاي 🪝";
} else if (lvpoints <= 72) {
  var role = "نائب يونكو 💂🏼";
} else if (lvpoints <= 74) {
  var role = "يونكو 🧛🏻";
} else if (lvpoints <= 77) {
  var role = "ملك القراصنة 👒";
} else if (lvpoints <= 80) {
  var role = " منقطع النظير 🔱";
} else {
  var role = " القوت 🐐";
}
            let ttms = `${userq.xp}` / 8;
            const timenow = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Asia/Kolakata')
                .locale('id')
            try {
                pfp = await Void.profilePictureUrl(citel.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
╮👤 *مرحبا، ${citel.pushName}!*
│
├⭈ ❖ اليوزر: ${citel.pushName}
├⭈ ✨ الحالة: ${bioo}
├⭈ 🎭 الدور: ${role}
│
├⭈ 🍁 المستوى: ${userq.level}
├⭈ 📥 الرسائل: ${ttms}
│
╰─🚀 *Powered by ${tlang().title}*
`;
            let buttonMessage = {
                image: {
                    url: pfp,
                },
                caption: profile,
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "رانك",
            desc: "Sends rank card of user.",
            category: "عام",
            filename: __filename,
        },
        async(Void, citel, text) => {
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "?";
                           if (lvpoints <= 2) {
  var role = "مواطن 👦🏻";
} else if (lvpoints <= 4) {
  var role = "شونين 👦🏻🗡️";
} else if (lvpoints <= 6) {
  var role = "شينوبي 🗡️";
} else if (lvpoints <= 8) {
  var role = "قرصان 🏴‍☠️";
} else if (lvpoints <= 10) {
  var role = "جندي بحرية 👮🏼‍♀️";
} else if (lvpoints <= 12) {
  var role = "صائد قراصنة 💀";
} else if (lvpoints <= 14) {
  var role = "قبطان 👨🏻‍✈️";
} else if (lvpoints <= 16) {
  var role = "نائب ادميرال 👥";
} else if (lvpoints <= 18) {
  var role = "ادميرال 🛡";
} else if (lvpoints <= 20) {
  var role = "كاغي 🎗";
} else if (lvpoints <= 22) {
  var role = "اوتشيها 🔥";
} else if (lvpoints <= 24) {
  var role = "شينيغامي 💀";
} else if (lvpoints <= 26) {
  var role = "سايان 🔥";
} else if (lvpoints <= 28) {
  var role = "سوبر سايان ✊🏻";
} else if (lvpoints <= 30) {
  var role = "قاتل تنين 🐲";
} else if (lvpoints <= 32) {
  var role = "قائد اسطول ☠️";
} else if (lvpoints <= 34) {
  var role = "الفارس الأسود 🖤";
} else if (lvpoints <= 36) {
  var role = "ساموراي 🗡️";
} else if (lvpoints <= 38) {
  var role = "قاتل شياطين 👌🏻";
} else if (lvpoints <= 40) {
  var role = "وريث هاشيرا 🔥";
} else if (lvpoints <= 42) {
  var role = "هاشيرا ⚕️";
} else if (lvpoints <= 44) {
  var role = "قمر ادنى 👿";
} else if (lvpoints <= 46) {
  var role = "قمر أعلى 👹";
} else if (lvpoints <= 48) {
  var role = "قائد جمعية الصيادين 🏹";
} else if (lvpoints <= 50) {
  var role = "مساعد حاكم الدمار 🚀";
} else if (lvpoints <= 52) {
  var role = "حاكم الدمار 👑";
} else if (lvpoints <= 54) {
  var role = "نائب قائد فريق 👨‍⚖️";
} else if (lvpoints <= 56) {
  var role = "قائد فريق ⚔️";
} else if (lvpoints <= 58) {
  var role = "القائد الأعلى 👹";
} else if (lvpoints <= 60) {
  var role = "اسبادا 🔮";
} else if (lvpoints <= 62) {
  var role = "تارتاروس 👹";
} else if (lvpoints <= 64) {
  var role = "E.N.D 🔚";
} else if (lvpoints <= 66) {
  var role = "تنين 🐉";
} else if (lvpoints <= 68) {
  var role = "ملك التنانين 👑";
} else if (lvpoints <= 70) {
  var role = "تشيبوكاي 🪝";
} else if (lvpoints <= 72) {
  var role = "نائب يونكو 💂🏼";
} else if (lvpoints <= 74) {
  var role = "يونكو 🧛🏻";
} else if (lvpoints <= 77) {
  var role = "ملك القراصنة 👒";
} else if (lvpoints <= 80) {
  var role = " منقطع النظير 🔱";
} else {
  var role = " القوت 🐐";
}
           let disc = citel.sender.substring(3, 7);
let textr = `╮ ${tlang().greet}\n│ 🌟 رانك: ${citel.pushName}∆${disc}\n\n`;
let ttms = `${userq.xp}` / 8;
textr += `⭈ 🎭 الدور: ${role}\n⭈ 🟢 نقاط الخبرة: ${userq.xp} / ${Levels.xpFor(userq.level + 1)}\n`;
textr += `⭈ 🏡 المستوى: ${userq.level}\n⭈ 📥 مجموع الرسائل: ${ttms}\n`;
try {
  ppuser = await Void.profilePictureUrl(citel.sender, "image");
} catch {
  ppuser = THUMB_IMAGE;
}
Void.sendMessage(citel.chat, {
  image: await getBuffer(ppuser),
  caption: textr + `╰─ Powered by ${tlang().title}`,
}, {
  quoted: citel,
});
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "لائحة",
            alias: ["deck"],
            desc: "To check leaderboard",
            category: "عام",
            filename: __filename,
        },
        async(Void, citel) => {
            const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
            let leadtext = `
*-------------------------------*
*----● لائحة الصدارة ● -----*
*-------------------------------*
\n\n`
            for (let i = 0; i < fetchlb.length; i++) {
                const lvpoints = fetchlb[i].level
                var role = "?";
                       if (lvpoints <= 2) {
  var role = "مواطن 👦🏻";
} else if (lvpoints <= 4) {
  var role = "شونين 👦🏻🗡️";
} else if (lvpoints <= 6) {
  var role = "شينوبي 🗡️";
} else if (lvpoints <= 8) {
  var role = "قرصان 🏴‍☠️";
} else if (lvpoints <= 10) {
  var role = "جندي بحرية 👮🏼‍♀️";
} else if (lvpoints <= 12) {
  var role = "صائد قراصنة 💀";
} else if (lvpoints <= 14) {
  var role = "قبطان 👨🏻‍✈️";
} else if (lvpoints <= 16) {
  var role = "نائب ادميرال 👥";
} else if (lvpoints <= 18) {
  var role = "ادميرال 🛡";
} else if (lvpoints <= 20) {
  var role = "كاغي 🎗";
} else if (lvpoints <= 22) {
  var role = "اوتشيها 🔥";
} else if (lvpoints <= 24) {
  var role = "شينيغامي 💀";
} else if (lvpoints <= 26) {
  var role = "سايان 🔥";
} else if (lvpoints <= 28) {
  var role = "سوبر سايان ✊🏻";
} else if (lvpoints <= 30) {
  var role = "قاتل تنين 🐲";
} else if (lvpoints <= 32) {
  var role = "قائد اسطول ☠️";
} else if (lvpoints <= 34) {
  var role = "الفارس الأسود 🖤";
} else if (lvpoints <= 36) {
  var role = "ساموراي 🗡️";
} else if (lvpoints <= 38) {
  var role = "قاتل شياطين 👌🏻";
} else if (lvpoints <= 40) {
  var role = "وريث هاشيرا 🔥";
} else if (lvpoints <= 42) {
  var role = "هاشيرا ⚕️";
} else if (lvpoints <= 44) {
  var role = "قمر ادنى 👿";
} else if (lvpoints <= 46) {
  var role = "قمر أعلى 👹";
} else if (lvpoints <= 48) {
  var role = "قائد جمعية الصيادين 🏹";
} else if (lvpoints <= 50) {
  var role = "مساعد حاكم الدمار 🚀";
} else if (lvpoints <= 52) {
  var role = "حاكم الدمار 👑";
} else if (lvpoints <= 54) {
  var role = "نائب قائد فريق 👨‍⚖️";
} else if (lvpoints <= 56) {
  var role = "قائد فريق ⚔️";
} else if (lvpoints <= 58) {
  var role = "القائد الأعلى 👹";
} else if (lvpoints <= 60) {
  var role = "اسبادا 🔮";
} else if (lvpoints <= 62) {
  var role = "تارتاروس 👹";
} else if (lvpoints <= 64) {
  var role = "E.N.D 🔚";
} else if (lvpoints <= 66) {
  var role = "تنين 🐉";
} else if (lvpoints <= 68) {
  var role = "ملك التنانين 👑";
} else if (lvpoints <= 70) {
  var role = "تشيبوكاي 🪝";
} else if (lvpoints <= 72) {
  var role = "نائب يونكو 💂🏼";
} else if (lvpoints <= 74) {
  var role = "يونكو 🧛🏻";
} else if (lvpoints <= 77) {
  var role = "ملك القراصنة 👒";
} else if (lvpoints <= 80) {
  var role = " منقطع النظير 🔱";
} else {
  var role = " القوت 🐐";
}
                let data = await sck1.findOne({ id: fetchlb[i].userID })
                let namew = fetchlb[i].userID
                let ttms = fetchlb[i].xp / 8
                leadtext += `*${i + 1}●الاسم*: ${data.name}\n*●المستوى*: ${fetchlb[i].level}\n*●النقاط*: ${fetchlb[i].xp}\n*●الدور*: ${role}\n*●الرسائل*: ${ttms}\n\n`;
            }
            return citel.reply(leadtext)
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ترقية",
            desc: "Provides admin role to replied/quoted user",
            category: "للمشرفين",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!isAdmins) return citel.reply(tlang().admin);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            try {
                let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return;
                await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
            } catch {
                //		citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "طرد",
            desc: "Kicks replied/quoted user from group.",
            category: "للمشرفين",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!isAdmins) return citel.reply(tlang().admin);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            try {
                let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return;
                await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
            } catch {
                //		citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
/*cmd({
            pattern: "memegen",
            desc: "Write text on quoted image.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let mime = citel.quoted.mtype
            if (!/image/.test(mime)) return citel.reply(`رد على صورة، مع كتابة `)
            mee = await Void.downloadAndSaveMediaMessage(citel.quoted)
            mem = await TelegraPh(mee)
            meme = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
            let buttonMessage = {
                image: meme,
                caption: "تفضل",
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
            await fs.unlinkSync(mee)

        }
    )*/
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
cmd({
            pattern: "افتار-القروب",
            desc: "Sets a profile pic in Group..",
            category: "للمشرفين",
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;


            let mime = citel.quoted.mtype
            if (!citel.isGroup) citel.reply(tlang().group);
            if (!isAdmins) citel.reply(tlang().admin);
            if (!isBotAdmins) citel.reply(tlang().botadmin);
            if (!citel.quoted) return citel.reply(`رد على صورة واستخدم الامر ${command}`);
            if (!/image/.test(mime)) return citel.reply(`رد على صورة واستخدم الامر${command}`);
            if (/webp/.test(mime)) return citel.reply(`رد على صورة واستخدم الامر ${command}`);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            await Void.updateProfilePicture(citel.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            citel.reply(tlang().success);

        }
    )
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
cmd({
            pattern: "اضافة",
            desc: "Add that person in group",
            fromMe: true,
            category: "للمشرفين",
            filename: __filename,
            use: '<number>',
        },
        async(Void, citel, text,{isCreator}) => {
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!text) return citel.reply("عطني رقم الشخص اللي بتضيفه للقروب");
            if (!isCreator) return citel.reply(tlang().owner)
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.groupParticipantsUpdate(citel.chat, [users], "add");

        }
    )
    //---------------------------------------------------------------------------
/*cmd({
            pattern: "getjids",
            desc: "Sends chat id of every groups.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `All groups jid\n\n`
            citel.reply(`Fetching jid from ${anu.length} Groups`)
            for (let i of anu) {
                let metadata = await Void.groupMetadata(i);
                await sleep(500)
                jackhuh += `*Subject:-* ${metadata.subject}\n`
                jackhuh += `*Member :* ${metadata.participants.length}\n`
                jackhuh += `*Jid:-* ${i}\n\n`

            }
            citel.reply(jackhuh)

        }
    )*/
    //---------------------------------------------------------------------------
cmd({
        pattern: "خفض",
        desc: "Demotes replied/quoted user from group",
        category: "للمشرفين",
        filename: __filename,
        use: '<quote|reply|number>',
    },
    async(Void, citel, text) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

        if (!isAdmins) return citel.reply(tlang().admin);
        if (!isBotAdmins) return citel.reply(tlang().botAdmin);
        try {
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            if (!users) return;
            await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
        } catch {
            //		citel.reply(tlang().botAdmin);

        }
    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "حذف",
            alias: ["delete"],
            desc: "Deletes message of any user",
            category: "للمشرفين",
            filename: __filename,
            use: '<quote/reply message.>',
        },
        async(Void, citel, text) => {
            if (citel.quoted.Bot) {
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })

            }
            if (!citel.quoted.isBot) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply('خاص بالمشرفين')
                if (!isBotAdmins) return citel.reply(' مقدر احذف الرسايل بدون اشراف')
                if (!citel.quoted) return citel.reply(`رد على الرسالة.`);
                let { chat, fromMe, id } = citel.quoted;
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
/*cmd({
            pattern: "انذارات",
            desc: "Check warns",
            category: "للمشرفين",
            filename: __filename,
            use: '<quoted/reply user.>',
        },
        async(Void, citel, text) => {
            if (!citel.isGroup) return citel.reply('خاص بالمجموعات.')
            if (!citel.quoted) return citel.reply('منشن اللي بتشوف انذاراته طال عمرك')
            teskd = `*جميع الانذارات.*\n\n`
            let h = await warndb.find({ id: citel.quoted.sender.split('@')[0] + 'warn' })
            console.log(h)
            teskd += `*There are total ${h.length}  warnings.*\n`
            for (let i = 0; i < h.length; i++) {
                teskd += `*${i+1}*\n╭─────────────◆\n│ * مجموعة:-* ${h[i].group}\n`
                teskd += `│ *🔰الوقت:-* ${h[i].date}\n`
                teskd += `│ *⚠️تم اصدار الانذار من قبل:-* ${h[i].warnedby}\n`
                teskd += `│ _📍السبب: ${h[i].reason}_\n╰─────────────◆\n\n`
            }
            citel.reply(teskd)
        }

    )*/
    //---------------------------------------------------------------------------
cmd({
            pattern: "حظر",
            desc: "blocks that person",
            fromMe: true,
            category: "للمالك",
            filename: __filename,
            use: '<quote/reply user.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply("رد عاللي بتحظره طال عمرك");
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.updateBlockStatus(users, "block")
                .then((res) => console.log(jsonformat(res)))
                .catch((err) => console.log(jsonformat(err)));

        }
    )
    //---------------------------------------------------------------------------


//---------------------------------------------------------------------------
if(Config.WORKTYPE!=='private'){
cmd({ on: "text" }, async(Void, citel) => {
    const randomXp = 8;
    let usrname = citel.pushName
    const hasLeveledUp = await Levels.appendXp(citel.sender, "RandomXP", randomXp);
    if (hasLeveledUp) {
        const sck1 = await Levels.fetch(citel.sender, "RandomXP");
        const lvpoints = sck1.level;
        var role = "?";
                 if (lvpoints <= 2) {
  var role = "مواطن 👦🏻";
} else if (lvpoints <= 4) {
  var role = "شونين 👦🏻🗡️";
} else if (lvpoints <= 6) {
  var role = "شينوبي 🗡️";
} else if (lvpoints <= 8) {
  var role = "قرصان 🏴‍☠️";
} else if (lvpoints <= 10) {
  var role = "جندي بحرية 👮🏼‍♀️";
} else if (lvpoints <= 12) {
  var role = "صائد قراصنة 💀";
} else if (lvpoints <= 14) {
  var role = "قبطان 👨🏻‍✈️";
} else if (lvpoints <= 16) {
  var role = "نائب ادميرال 👥";
} else if (lvpoints <= 18) {
  var role = "ادميرال 🛡";
} else if (lvpoints <= 20) {
  var role = "كاغي 🎗";
} else if (lvpoints <= 22) {
  var role = "اوتشيها 🔥";
} else if (lvpoints <= 24) {
  var role = "شينيغامي 💀";
} else if (lvpoints <= 26) {
  var role = "سايان 🔥";
} else if (lvpoints <= 28) {
  var role = "سوبر سايان ✊🏻";
} else if (lvpoints <= 30) {
  var role = "قاتل تنين 🐲";
} else if (lvpoints <= 32) {
  var role = "قائد اسطول ☠️";
} else if (lvpoints <= 34) {
  var role = "الفارس الأسود 🖤";
} else if (lvpoints <= 36) {
  var role = "ساموراي 🗡️";
} else if (lvpoints <= 38) {
  var role = "قاتل شياطين 👌🏻";
} else if (lvpoints <= 40) {
  var role = "وريث هاشيرا 🔥";
} else if (lvpoints <= 42) {
  var role = "هاشيرا ⚕️";
} else if (lvpoints <= 44) {
  var role = "قمر ادنى 👿";
} else if (lvpoints <= 46) {
  var role = "قمر أعلى 👹";
} else if (lvpoints <= 48) {
  var role = "قائد جمعية الصيادين 🏹";
} else if (lvpoints <= 50) {
  var role = "مساعد حاكم الدمار 🚀";
} else if (lvpoints <= 52) {
  var role = "حاكم الدمار 👑";
} else if (lvpoints <= 54) {
  var role = "نائب قائد فريق 👨‍⚖️";
} else if (lvpoints <= 56) {
  var role = "قائد فريق ⚔️";
} else if (lvpoints <= 58) {
  var role = "القائد الأعلى 👹";
} else if (lvpoints <= 60) {
  var role = "اسبادا 🔮";
} else if (lvpoints <= 62) {
  var role = "تارتاروس 👹";
} else if (lvpoints <= 64) {
  var role = "E.N.D 🔚";
} else if (lvpoints <= 66) {
  var role = "تنين 🐉";
} else if (lvpoints <= 68) {
  var role = "ملك التنانين 👑";
} else if (lvpoints <= 70) {
  var role = "تشيبوكاي 🪝";
} else if (lvpoints <= 72) {
  var role = "نائب يونكو 💂🏼";
} else if (lvpoints <= 74) {
  var role = "يونكو 🧛🏻";
} else if (lvpoints <= 77) {
  var role = "ملك القراصنة 👒";
} else if (lvpoints <= 80) {
  var role = " منقطع النظير 🔱";
} else {
  var role = " القوت 🐐";
}
        if (Config.levelupmessage !== 'false') {
            await Void.sendMessage(citel.chat, {
                image: {
                    url: await botpic(),
                },
                caption: `╮───────────╭
│ 🎉🎊 *مَبْرُوك!* 🎉🎊 │
│ ⭐️ *ازداد مستواك!* ⭐️ │
├───────────┤
│ 👤 *الاسم:* ${citel.pushName} │
│ 🎐 *المستوى:* ${sck1.level} ⚔️ │
│ 🛑 *نقاط الخبرة:* ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)} │
│ 📍 *الدور:* *${role}* │
├───────────┤
│ 🥳 استمتع! 👍 │
╯───────────╰
`,
            }, {
                quoted: citel,
            });
        }
    }

})
}

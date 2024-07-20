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

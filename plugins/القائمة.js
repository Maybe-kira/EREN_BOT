let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '> ⧉┆مرحبا ياعزيزي 😍 ⤌⤈\n> ↝👋🏻↜\n> ⧉┆انا بوت واتساب'
 },
 body: {
 text: '> ♩☜ اعمل في الخاص وجروبات\n> ♩☜ وظيفتي حماية جروبك\n> ♩☜اوامر كلمه .الاوامر لمعرفه\> n♩☜ اوامر البوت وطريقه الاستخدام\n> ♩☜ مميزات البوت كثيره جدا\n> ♩☜ ويعمل بجودة فائقه وعاليه\n> 𓍹————————————𓍻\n> ↜★ اوامر سورس بوت العتبان ★↝\n> 𓍹————————————𓍻'
  },
  nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '❰ اختار من القائمه📄 ❱',
  sections: [
  {
  title: 'قسم الاوامر',
  highlight_label: 'بوت بلاك & عفروتو',
  rows: [
  {
  header: 'يعطيك اوامر القروبات',
  title: '.ميزو1',
  description: '',
  id: '.ميزو1'
  },
  {
  header: 'يعطيك اوامر الاعضاء',
  title: '.ميزو2',
  description: '',
  id: '.ميزو2'
  },
  {
   header: 'يعطيك اوامر الترفيه',
  title: '.ميزو3',
  description: '',
  id: '.ميزو3'
  },
   {
    header: 'يعطيك اوامر التحميل',
  title: 'التحميل',
  description: '',
  id: '.ميزو4'
  },
   {
    header: 'يعطيك اوامر الصور',
  title: '.ميزو5',
  description: '',
  id: '.ميزو5'
  },
   {
    header: 'يعطيك اوامر اللفل',
  title: '.ميزو6',
  description: '',
  id: '.ميزو6'
  },
   {
   header: 'يعطيك اوامر الملصقات',
  title: 'الملصقات',
  description: '',
  id: '.ميزو7'
  },
  {
    header: 'يعطيك اوامر البحث و التنزيل',
  title: 'البحث و التنزيل',
  description: '',
  id: '.ميزو8'
  },
  {
  header: 'يعطيك اوامر التحويل',
  title: 'التحويل',
  description: '',
  id: '.ميزو9'
  },
  {
  header: 'يعطيك كل الاامر',
  title: '.ميزو12',
  description: '',
  id: '.ميزو12'
  }
  ]
  }
  ]
  }),
  messageParamsJson: ''
  }
  ]
  }
  }
  }
  }
  }, {})

  }

  handler.help = ['info']
  handler.tags = ['main']
  handler.command = ['مهام','اوامر','er','youssef','ui','op']

  export default handler

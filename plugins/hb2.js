================================================
*@video: Send Video
===============================================
*//
cmd({hb}
  pattern: 'video',
  desc: 'Sends video',
  category: 'gen',
  use: '<option>',
}, async(Void,citel,text) => {Void}
await Void.sendMessage(citel.chat,{image:{url: 'https://imgur.com/gallery/tjWjr2x'}, caption: "HAPPY BIRTHDAY" }) 

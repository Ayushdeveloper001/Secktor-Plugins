================================================
*@video: Send Video
===============================================
*//
cmd({
  pattern: 'video',
  desc: 'Sends video',
  category: 'gen',
  use: '<option>',
}, async(Void,citel,text) => {
await Void.sendMessage(citel.chat,{image:{url: 'https://imgur.com/gallery/tjWjr2x'}, caption: "HAPPY BIRTHDAY" }) 

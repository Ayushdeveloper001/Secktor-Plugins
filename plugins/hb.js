================================================
*@video: Send Video
===============================================
*//
cmd({hb}
  pattern: 'video',
  desc: 'Sends video',
  category: 'gen',
  use: '<option>',
}, async(Void,citel,text) => {
await Void.sendMessage(citel.chat,{image:{url: 'https://www.google.com/search?q=happy+birthday&client=ms-android-oppo-rvo3&prmd=imsvn&sxsrf=AJOqlzWs_WuurHCibnRU9OM_TD90v25A2Q:1673277401625&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiLuomJ5Lr8AhXY1HMBHdKOBtcQ_AUoAXoECAIQAQ&biw=320&bih=608&dpr=3.38#imgrc=ONwxRQED7CblvM'}, caption: "HAPPY BIRTHDAY" }) 

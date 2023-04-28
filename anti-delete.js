const {Module} = require('../main')
const {skbuffer} = require('raganork-bot');
const {MODE} = require('../config');
let auto = MODE == 'public' ? false : true

//change it according to you


		pattern: 'delete ?(.*)',
		fromMe: true,
		desc: 'anti delete',
		type: 'whatsapp',
	},
	async (message, match) => {
		if (!match || (match != 'pm' && match != 'direct' && match != 'null'))
			return await m.sendReply(
				"*Anti delete Message*\n*Example :* delete pm | group | null\n p - Send deleted messages to your chat or sudo\n g - Send deleted Message on chat where it delete\n null - Don't do anything with delete (off)"
			)
		await setVar({ ANTI_DELETE: match })
		const message =
			match == 'null'
				? '_Anti delete Disabled_'
				: match == 'p'
	          		? '_Deleted Messages send to your chat or sudo_'
				: '_Deleted Messages send to the chat itself_'
		await message.send(msg)
	}
)

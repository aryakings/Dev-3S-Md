global . you   = [ '6289506540113' ] // Bot Pengembang
global . rowner  = [ '6289506540113' ] // Pemilik Asli Bot
global.owner = ['6289506540113'] // Owner Bot
global.police = ['6289506540113'] // Police Bot
global.mods = ['6289506540113']  // Want some help?
global.prems = ['6289506540113'] // Premium user has unlimited limit
global.helper = ['6289506540113']
global.allowCall = [] // Allow To Call You
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz', 
  vhtear: 'https://api.vhtear.com', 
  some: 'https://some-random-api.ml', 
  zeks: 'https://api.zeks.me', 
  pencarikode: 'https://pencarikode.xyz', 
  zahir: 'https://zahirr-web.herokuapp.com', 
  restapi: 'https://x-restapi.herokuapp.com', 
  adi: 'https://adiofficial-api.herokuapp.com' , 
  bx: 'https://bx-hunter.herokuapp.com', 
  leyscoders: 'https://leyscoders-api.herokuapp.com', 
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
 'https://api.zeks.me': '', // Kunjungi website nya
  'https://api.xteam.xyz': '', // Kunjungi website nya
  'https://api.vhtear.com': '', // Kunjungi website nya
  'https://pencarikode.xyz': '', // Kunjungi website nya
  'https://zahirr-web.herokuapp.com': '', // Kunjungi website nya
  'https://x-restapi.herokuapp.com': '', // Kunjungi website nya
  'https://adiofficial-api.herokuapp.com': '', // Kunjungi website nya
  'https://bx-hunter.herokuapp.com': '', // Kunjungi website nya
  'https://leyscoders-api.herokuapp.com': '', // Kunjungi website nya
}

// Config Whatsapp socket
global.socket = {
	qr: true, //wajib keknya
	version: false, // jika mau
	logger: true, //on in aja
	retryMap: false, //not recommend now
	pendingMessage: false, //off aja ngab, ntar lag
}

global.useMulti = false //Bug?

// Sticker WM
global.packname = 'Cʀᴇᴀᴛᴇᴅ Bʏ'
global.author = 'ᴛᴄsɪ • ɑrgɑ.com ×፝֟͜×'
global.wm = '© ᴛᴄsɪ • ɑrgɑ.com ×፝֟͜×'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.lelang = []
global.barter = []

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

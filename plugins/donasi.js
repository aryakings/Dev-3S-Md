let handler = async m => conn.sendButton(m.chat, `
      ━━━━『 *DONASI KAK* 』━━━━
➸ Dana : 0895-3166-0936
➸ Gopay : 0895-3166-0936
➸ Pulsa : 0895-3166-0936 
*➸ QRIS : Chat Owner*

(Melanggar Rules Di Ban 1 hari) 
Donasi supaya bot terus update & Aktif

`.trim(), '© Arga', { 'button[0]': 'Owner', 'row[0]': '.owner'}, m, {}, 'location', 'https://telegra.ph/file/1149dc82a0cc9d2d8b0c5.jpg') // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['donasi']
handler.command = /^dona(te|si)$/i

module.exports = handler
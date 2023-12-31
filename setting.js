/*
ssssss   oooooooo   uu    uu  ll
ss       oo    oo   uu    uu  ll
ss       oo    oo   uu    uu  ll
ssssss   oo    oo   uu    uu  ll
    ss   oo    oo   uu    uu  ll
    ss   oo    oo   uu    uu  ll
ssssss   oooooooo   uuuuuuuu  lllllllll


           kk  kk  iiii  ll       ll     EEEEEE RRRRRRR
           kk kk    ii  ll       ll      EE     RR   RR
           kkk      ii  ll       ll      EE     RR   RR
           kkk      ii  ll       ll      EEEEEE RRRRRRR
           kk kk    ii  ll       ll      EE     RR R
           kk  kk   ii  ll       ll      EE     RR  R
           kk    kk ii  lllllll  lllllll EEEEEE RR   R

WHATSAPP BOT BY MR SOUL KILLER OF

WHATSAPP - 94775341543
SUPPORT GROUP -https://chat.whatsapp.com/D4eytSR8uFxG1DkOpnlFyP
YOUTUBE - http://youtube.com/PODDAGAMING


ℹ️ SPECIAL INFORMATION ℹ️

Welcome to SOUL KILLER OFC Whatsapp Bot settings.js.
Information provided to you.
If you use true or false
true = if you want to do that task
false = return if you don't want to do the task.
When you change the ones inside the commas, change them correctly.
If you are using Sex Video Downloader, you need to get permission from Bot Devoper. 

*/

const fs = require('fs')
const chalk = require('chalk')

/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen massage use " true " , මැසේජ් සීන් කරන්න ඔනි නම් true දාන්න ඔනි නැත්තම් false දාන්න
global.READ_MASSAGE = true
//👇 enable DISABLE Girls Voice Reply , Auto Voice Reply යවන්න ඔනි නම් true දාන්න 
global.VOICE_REPLY = true
//👇 Do you want show time on your bio use "true" want DISABLE use "false" , ස්වයං ක්‍රීය Bio එක ඔනි නම් true දාන්න
global.AUTO_BIO = true
//👇 Inbox massage block PM block , ඉන්බොක් බ්ලොක් 
global.INBOX_BLOCK = false
//👇 Auto react  , ස්වයංක්‍රීය රියක්ට්
global.AUTO_REACT = false
//👇 Bad word Auto delete ( fuk,pussy,sex,porn hub,xxxx ) නරක වචන ඩිලීට් කිරීම , ඔබ විසින් වචන දැමිය යුතුය 
global.ANTI_BADWORD = true
//👇 Kick And Auto Delete Group link Senders , ස්මූහ ස්බැදි දමන අයව ඉවත් කරයි
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false ) වෙල්කම් ගූඩ් බායි මැසේජ් යවන්න ඔනි නම් 
global.SEND_WELCOME = true
global.SEND_GOODBYE = true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = true
//👇 Put Bot Offline
global.BOT_OFFLINE = true
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = false
//👇 Desabale Bot inbox ඉන්බොක්ස් බ්ලොක් නොවී වැඩ නොකරන්නනම් 
global.DISABLE_INBOX = false 
//👇 DISABLE inbox message send ඉන්බොක්ස් වැඩනොකරන බවට මැසේජ් එක යැවිම true or false 
global.DISABLE_INBOX_MESSAGE_SEND = true
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = false
//👇 Only Inbox Use ( Only PM Work )
global.INBOX_ONLY_WORK = false
//👇 Auto ChatGPT ( You Must put CHATGPT API KEY For use this )
global.AUTO_OPEN_AI = true
//👇 Bot On Privet
global.PRIVET_BOT = false
//👇 DISABLE Bot Commands But Others Are Working 
global.DISABLE_COMMANDS = false
//👇 DISABLE Bot Commands On Message Send On Off
global.DISABLE_COMMAND_MESSAGE_SEND = false 
global.AUTO_SEEN_STATUS = true



/*
       ✨ SOUL KILLER OFC BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['94775341543'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 SOUL KILLER OFC BOT'
//👇 Your Bot Name
global.botnma =  'SOUL KILLER OF BOT' 
//👇 Your name
global.ownernma =  'SOUL KILLER OFC BOT' 
//👇 Sticker Author Name
global.packname =  'SOUL KILLER OFC' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = ' HI YOU ARE BLOCK !!! OWNER  COMMAND'
//👇 Owner React Imoji
global.OWNER_REACT =  'HAHAHAHAHAHA'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your NEW Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your  NEW Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://telegra.ph/file/82f8d65f56c7cc63d98bf.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `ඉන්නවා බන් මොකද වද දෙන්නේ...........තෝව මරාගෙන කනවා ♠️`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || `ආදරෙයි මැණික group එකට ආවට ❤️`
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || `https://telegra.ph/file/82f8d65f56c7cc63d98bf.jpg`
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || `යනවා නම් යමන් බන් 🙄මොකද වද දෙන්නේ`
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || `https://telegra.ph/file/82f8d65f56c7cc63d98bf.jpg`
//👇 DISABLE PM Block numbers
global.NO_BLOCK = ["94742317866","94775341543"]
//👇 DISABLE download words
global.IMG_BLOCKER = ["xxx","sex","mia"]
//👇 Open ai API Put Withouth "sk-" ( "sk-" අයින් කරල ඉතුරු ටික දාන්න )
global.CHATGPT_API = ''
//👇 Sex  video Download Allowed Groups
global.SEX_DOWNLOAD_GROUPS = ['120363147404508506@g.us']
//👇 Your Bot Group Link
global.GROUP_LINK = 'https://chat.whatsapp.com/D4eytSR8uFxG1DkOpnlFyP'
/*

   🍃 OTHER 🍃

*/
global.PORT = process.env.PORT ||  '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
global.mess = {
    success: '✅ HARI BALLO!',
    admin: '*Only admins can use this command !*',
    botAdmin: '* ISSELLA ADMIN DIYAM MATA UTTOOOOOO !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups (GROUP LINK= https://chat.whatsapp.com/D4eytSR8uFxG1DkOpnlFyP ) !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot OWNER !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    IMG_BLOCK : "This Word is Ban from image downloader",
    DISABLE_INBOX : "Inbox DISABLE By Bot Owner Please Only Use Groups https://chat.whatsapp.com/D4eytSR8uFxG1DkOpnlFyP",
    ONLY_SEX_GROUP : "UBE WAYSA KIYADA UTTOOOOOOOO",
    DISABLE_CMD : "🚫 Commands Are DISABLE by owner",
    BAD_DETECT : 'YOU ARE DONKEY',
    BLOCK : 'යමන් බන් 🙄',
    UNBLOCK : 'ආදරෙයි මැණික',
    KICK : ' හෙනම ගහපන්',
    ADD : 'ආදරෙයි',
    LEAVE : 'BYE ALL',
    PROMOTE : 'ආදරෙයි මැණික',
    DEMOTE : 'යමන් බන් 🙄'
}




//other
global.pemilik = ['94775341543'] //වෙනස් කරන්න  EPOOOOO
global.premium = ['94775341543'] //වෙනස් කරන්න  EPOOOO
global.pengguna = 'SOUL KILLER OFC' //  ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '👽'
global.weem = 'SOUL KILLER OFC'

global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//global.alivelogo = `https://telegra.ph/file/82f8d65f56c7cc63d98bf.jpg`
global.imgalive = fs.readFileSync('./Media/image/SOUL KILLER.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

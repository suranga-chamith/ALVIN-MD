const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "https://files.catbox.moe/cx9d75.jpg", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am Suranga*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "public", //private or public
AUTO_VOICE:"false" //true or false
};

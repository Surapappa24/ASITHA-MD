const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=XyxThJYR#ylqedQKeOhtP-RLMxXKUwBK-Sq-HHg6IKiYkBR1l8ew",
MONGODB: process.env.MONGODB || "mongodb://mongo:JnVnXlGgpxqGpWBBzOloXlrjTrkgcwfv@junction.proxy.rlwy.net:39155",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};

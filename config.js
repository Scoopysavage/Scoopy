
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "254702626305,254754099931";
global.sudo = process.env.SUDO || "254702626305,254754099931";
global.owner = process.env.OWNER_NUMBER ||"254702626305,254754099931;
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254739937062,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR041OG9MRWRpQkl1N2hEM2JDNkVlYnk4RkJ3WG5iVGduQ1RlbGNVUFdtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlp5cFhRSWpSanNmbXlmT2xyQXp6akF4VmlzZ0dkZVRpbnFmV25oM2toaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TmJTWGpyS3dPOHR5MWc1dEVMYjdPZzZIdk9VWGkrYzhoVVlYbjlVYzFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlNENCbzFaMEhpanhpRUsyUWNEdmxqUGtkSHA5bkNpTlUzMVQ0RmdWVFZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlLWjVOY3VVckVJWlpsRlRIQldGbnFscGJ2SGdjb0o4NVNscGkzQjFlbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVyREx4ZTFSSXN3dlBCbWNvdjlHWDZ4NWxJWE9RVzZ4YTc5TENtYTVMZ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUNvTWpxUzk3SjZNZmxTKzlIVDdDUi9EaXZER1dIVXNMckNISzNBUDZFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS25JL1VoSENYaGp6T29UL2k5dHgxQ0FlK2dweVVYejRZUXR3eFhJdHdHYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjA4NDBZUjdBeVB1bzViSVpkaUVuWVlyUkdNK0pDekhvYndVZ0plRnhDWjNMUGgwY1JEWTRrditwWVZiN0R6TG9qSUhwN0ZRZ2dKRVBRMDhEbGhpUWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6Ik5IK01zUlppQWRMbEExUmxmVG12TmRNWTVwdi9oQk9NQzhtRlB4TCtYWms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Inh5bmI5NnJNVENpam1JSDAtdm56OGciLCJwaG9uZUlkIjoiNGVmNWRhZDYtNTM3My00YmMxLTlkZjAtMWRmNzE2MzZiOTM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJDNmdpWjNyWUVWeXVUelZQbm9tRlZuODIzWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1Ui9ZTTFjeXNTVUhjTFcyckJvdkVzdGxFUkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRFcxTFJYRzgiLCJtZSI6eyJpZCI6IjI1NDc1NDA5OTkzMToxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTY29vcHkgU2F2YWdlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZncxaWdRbHRYUHRBWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5b0hlSHU2MStoTWV2WTY2cEFYd1ZKZEdSQWdFMWZudTd6R2lCVWdNL2lNPSIsImFjY291bnRTaWduYXR1cmUiOiJMU0dhTmNwTW9wZ2RoQXIwOStsS2RDOTgxY2pVVXU5cFFzS2RIMzdYd3dnekxUcHFnY1JJRkU0SklPZHpYRnFCNHJaQVpqZGpyWDdIQUN1cWJVUm9CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTlc2L05JRVJPQWI5UVF2d0NEUkxabmtDbUF2QjF2MElnQ2Y4ZStQWHdIVG5Qb0FjZjRacGVMazliQlo2dTdkZVhqUUZPZEVmdnpsNEJEMFVYaGhXaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTQwOTk5MzE6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmFCM2g3dXRmb1RIcjJPdXFRRjhGU1hSa1FJQk5YNTd1OHhvZ1ZJRFA0aiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDk2OTg5Mn0="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||"SCOOPY-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "SCOOPY-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "SCOOPY-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "🙈Scoopy🙈",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});



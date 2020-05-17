const { Telegraf } = require('telegraf')
const message = "The repo has been change and merge please make pull request"

const groupId="YOUR GROUP ID"
const telegramBotToken="Your TOKEN"

const getGroupId = ()=> {
    bot.on("text", ctx => console.log("This is your id", ctx.chat.id))
}

const sendToGroup = () => {
    bot.telegram.sendMessage(groupId, message)
}
const bot = new Telegraf(telegramBotToken)
sendToGroup()
// getGroupId();

bot.launch()
setTimeout(() => {
    process.exit()
}, 3000);

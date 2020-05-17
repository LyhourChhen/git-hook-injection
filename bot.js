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
// GET GROUP ID 
// Talk with botFater to get a new bot 
// GET BOT TOKEN into bot-script 
// Add bot into group that we want to notify 
// Uncomment it only when you want to get groupId 
// After Add into group start the bot by `navigate to .git-hook npm or yarn start but don't forget to comment sendToGroup()`
// Then you will see the groupID in your console after just add as static into groupId varieble.
// Uncomment sendToGroup() function and commnet back bot.on
// and it should be work :)
bot.launch()
setTimeout(() => {
    process.exit()
}, 3000);

const { Telegraf } = require('telegraf')
const message = "The repo has been change and merge please make pull request"
const sendToGroup = () => {
    bot.telegram.sendMessage(-405150540, message)
}
const bot = new Telegraf("1206032150:AAGwkvJyNePiUWMcTz6RbiAAyxMdJM-9M84")
sendToGroup()
bot.launch()
setTimeout(() => {
    process.exit()
}, 3000);
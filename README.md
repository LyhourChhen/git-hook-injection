## Git-hook-injection

**The script which let you to inject the git-hook and let you to embedded telegram alert bot to your development group.**

## Installation 
```sh

# I personally prefer to have those folder run in the root of the project 
# To reverse it just change the path.
git config core.hooksPath .githooks/ 
# Let follow precedure 
cd ~ && git clone https://github.com/LyhourChhen/git-hook-injection.git 
cd git-hook-injection 
cp -r $(your development path)

```
## Setup Instruction 
```js
// GET GROUP ID 
// Talk with botFater to get a new bot 
// GET BOT TOKEN into bot-script 
// Add bot into group that we want to notify 
// Uncomment it only when you want to get groupId 
// After Add into group start the bot by `navigate to .git-hook npm or yarn start but don't forget to comment sendToGroup()`
// Then you will see the groupID in your console after just add as static into groupId varieble.
// Uncomment sendToGroup() function and commnet back bot.on
// and it should be work :)
```


**@LyhourChhen**


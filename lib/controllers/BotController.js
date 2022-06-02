require('dotenv').config()
const BotMsg = require("../models/BotMsg");

class BotController{
    
    static BotMsg(token){
        BotMsg.sendMsgBot(token);
    }
}




BotController.BotMsg(process.env.TOKEN);
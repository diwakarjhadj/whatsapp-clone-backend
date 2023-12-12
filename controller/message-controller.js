import Message from '../model/message.js';
import Conversation from '../model/Conversation.js';
export const newMessage=async(req,res)=>{
    try{
        const newMessage= new Message(req.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message: req.body.text});
        return res.status(200).json("Message has been sent Successfully");
    }catch(err){
        console.log(err.message);
    }
}
import Message from '../model/message.js';
import Conversation from '../model/Conversation.js';
export const newMessage=async(req,res)=>{
    try{
        const newMessage= new Message(req.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message: req.body.text});
        return res.status(200).json("Message has been sent Successfully");
    }catch(err){
        return res.status(500).json(err.message);
    }
}

export const getMessages=async(req,res)=>{
    try{
        console.log("hi",req.params.id);
        const message= await Message.find({conversationId: req.params.id});
        console.log("message is",message)
        return res.status(200).json(message);
    }catch(err){
        return res.status(500).json(err.message);
    }
}

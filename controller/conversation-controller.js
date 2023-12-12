import Conversation from "../model/Conversation.js";

export const newConversation=async (req,res)=>{
    try{
        const senderId=req.body.senderId;
        const receiverId=req.body.receiverId;
        const exist= await Conversation.findOne({members:{$all: [receiverId,senderId]}})
        if(exist){
            return res.status(200).json('Already Exisit');
        }
        const newConversation=new Conversation({
            members: [senderId,receiverId]
        })
        await newConversation.save();
        return res.status(200).json('conversation saved Successfully');
    }catch(err){
        return res.status(500).json(err.message);
    }
}

export const getConversation=async (req,res)=>{
    try{
        const senderId=req.body.senderId;
        const receiverId=req.body.receiverId;
        let conversation=await Conversation.findOne({members: {$all: [receiverId, senderId]}});
        return res.status(200).json(conversation);
    }
    catch(err){
        return res.status(500).json(err.message);
    }
}
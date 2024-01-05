import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection=async ()=>{
    // const URL= `mongodb://${USERNAME}:${PASSWORD}@ac-4bazfug-shard-00-00.r4szeae.mongodb.net:27017,ac-4bazfug-shard-00-01.r4szeae.mongodb.net:27017,ac-4bazfug-shard-00-02.r4szeae.mongodb.net:27017/?ssl=true&replicaSet=atlas-1crty0-shard-0&authSource=admin&retryWrites=true&w=majority`;

    const URL= `mongodb://${USERNAME}:${PASSWORD}@ac-4bazfug-shard-00-00.r4szeae.mongodb.net:27017,ac-4bazfug-shard-00-01.r4szeae.mongodb.net:27017,ac-4bazfug-shard-00-02.r4szeae.mongodb.net:27017/?ssl=true&replicaSet=atlas-1crty0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    try{
        await mongoose.connect(URL);
        console.log('Database Connected Successfully');
    }catch(err){
        console.log('Error',err.message);
    }
}

export default Connection;
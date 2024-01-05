import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb://${USERNAME}:${PASSWORD}@ac-4bazfug-shard-00-00.r4szeae.mongodb.net:27017,ac-4bazfug-shard-00-01.r4szeae.mongodb.net:27017,ac-4bazfug-shard-00-02.r4szeae.mongodb.net:27017/?ssl=true&replicaSet=atlas-1crty0-shard-0&authSource=admin&retryWrites=true&w=majority`,
    file: (req, file) => {
        const match = ["image/png", "image/jpg"];
        if (match.indexOf(file.mimetype) === -1) {
            return `${Date.now()}_file_${file.originalname}`;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}_file_${file.originalname}`
        };
    }
});
export default multer({ storage });


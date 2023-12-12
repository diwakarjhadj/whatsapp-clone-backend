import express from 'express';
import Connection from './database/db.js';
import Route from './routes/route.js';
import cors from 'cors';

const app = express();

// Use cors middleware
app.use(cors());

// Use built-in middleware for parsing JSON and urlencoded data
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/', Route);

Connection();

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));

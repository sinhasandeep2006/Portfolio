import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db.js';
import { handleContact } from './controllers/contactController.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', handleContact);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

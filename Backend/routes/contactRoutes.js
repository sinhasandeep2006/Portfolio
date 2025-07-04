import express from 'express';
import { handleContact } from '../controllers/contactController.js';

const router = express.Router();

router.post('/contact', handleContact);

export default router;

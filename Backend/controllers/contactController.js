import pool from '../db.js';
import nodemailer from 'nodemailer';

export const handleContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to MySQL
    await pool.query(
      'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    // Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
  from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
  to: process.env.MAIL_RECEIVER,
  subject: 'New Contact Message',
  html: `
    <h2>New Message from Portfolio</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br/> ${message}</p>
  `,
});

    res.status(200).json({ success: true, message: 'Message sent and saved.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
};

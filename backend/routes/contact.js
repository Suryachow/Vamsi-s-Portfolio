import express from 'express';
import Contact from '../models/Contact.js';
import mongoose from 'mongoose';

const router = express.Router();

// In-memory fallback storage for when MongoDB is unavailable
const inMemoryMessages = [];

const isDbConnected = () => mongoose && mongoose.connection && mongoose.connection.readyState === 1;

// Submit contact form
router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (isDbConnected()) {
      const newContact = new Contact({
        name,
        email,
        message,
        createdAt: new Date()
      });

      await newContact.save();

      return res.status(201).json({
        success: true,
        message: 'Message sent successfully! (persisted to MongoDB)'
      });
    }

    // Fallback: store message in memory
    const fallbackMsg = {
      id: inMemoryMessages.length + 1,
      name,
      email,
      message,
      createdAt: new Date()
    };

    inMemoryMessages.push(fallbackMsg);

    return res.status(201).json({
      success: true,
      message: 'Message received and stored in-memory (MongoDB unavailable)',
      fallback: true
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error sending message',
      error: error.message
    });
  }
});

// Get all messages (admin)
router.get('/messages', async (req, res) => {
  try {
    if (isDbConnected()) {
      const messages = await Contact.find().sort({ createdAt: -1 });
      return res.json({ success: true, messages });
    }

    // Return in-memory messages when DB not connected
    return res.json({ success: true, messages: inMemoryMessages });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching messages',
      error: error.message
    });
  }
});

export default router;


// routes/message.route.js
import express from "express";
import { saveContactMessage, getContactMessages } from "../controller/message.controller.js";

const router = express.Router();

// POST route to save a new contact message
router.post("/message", saveContactMessage);

// GET route to retrieve all contact messages
router.get("/messages", getContactMessages);  // Use /messages to match the pattern

export default router;



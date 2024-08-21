// controller/message.controller.js
import message from "../model/message.model.js";  // Adjust the path if needed

export const saveContactMessage = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newMessage = new Contact({ name, email, message });
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Failed to save message" });
    }
};

export const getContactMessages = async (req, res) => {
    try {
        const messages = await message.find();
        res.status(200).json(messages);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Failed to retrieve messages" });
    }
};



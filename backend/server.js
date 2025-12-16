import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import { faq } from "./faqData.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Function to match FAQ
function getFAQAnswer(message) {
  const userText = message.toLowerCase();

  for (let item of faq) {
    if (userText.includes(item.question.toLowerCase())) {
      return item.answer;
    }
  }
  return null;
}

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;
    if (!userMessage) {
      return res.json({ answer: "Empty message." });
    }

    // Step 1: Check company FAQ
    const faqMatch = getFAQAnswer(userMessage);
    if (faqMatch) {
      return res.json({
        answer: faqMatch,
        source: "company-faq"     
      });
    }

    // Step 2: Ask Groq AI (Updated Model)
    const aiResponse = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile", // 🔥 Updated working model
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: userMessage }
      ],
    });

    const reply = aiResponse.choices[0].message.content;

    return res.json({
      answer: reply,
      source: "ai"
    });

  } catch (err) {
    console.error("Backend Error:", err);
    res.status(500).json({
      answer: "Server error. Try again later.",
      error: err?.message
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend running on port ${PORT}`)
);

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(bodyParser.json());




// --- API Endpoint ---
app.post("/ask", async (req, res) => {
  const { question } = req.body;

  try {
    // Send request to local Ollama
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemma:2b", // or "mistral"
        prompt: question,
        stream: false, // full response at once
      }),
    });

    const data = await response.json();

    if (data && data.response) {
      res.json({ answer: data.response });
    } else {
      res.json({ answer: "⚠️ No response received from Ollama." });
    }
  } catch (error) {
    console.error("Ollama error:", error);
    res.status(500).json({ answer: "❌ Error connecting to Ollama. Make sure it's running." });
  }
});

// --- Start Server ---
app.listen(5000, () => {
  console.log("✅ Backend connected and running on http://localhost:5000");
});

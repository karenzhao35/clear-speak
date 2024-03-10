const OpenAI = require("openai");
require('dotenv').config()
const ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function summarize(text) {
    
    let prompt = "Please give a thorough summary of this text with headings: " + text;
    const completion = await ai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant designed to format output in Markdown with headings.",
          },
          { role: "user", content: prompt },
        ],
        model: "gpt-3.5-turbo-1106",
      });
  

    return completion;
}

module.exports = summarize;
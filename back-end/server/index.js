const express = require("express");
const convertPdfToJson = require("./pdfToJson"); 

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

app.post("/pdf-to-json", async (req, res) => {
    try {
        const json = await convertPdfToJson();
        res.json(json);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

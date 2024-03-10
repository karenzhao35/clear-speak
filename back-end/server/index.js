const express = require("express");


const PORT = process.env.PORT || 3001;

const app = express();

const data = {
  "url": "https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/eng.pdf",
  "lang": "eng",
  "inline": true,
  "pages": "0-",
  "async": false,
  "name": "result.txt"
}

function fetchPdfToJson() {
  fetch('https://api.pdf.co/v1/pdf/convert/to/text-simple', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'x-api-key': 'halim.aye64@gmail.com_QRg6B1o99n4v115Eje0LM58I7221P0R9Q8RvR57a5b2zA3nxT16103fSUVUjAk7W'
  },
  body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => console.log(JSON.stringify(response)))
}

app.get("/api", (req, res) => {
    fetchPdfToJson();
    res.json({ message: "Hello from server!" });
  });

  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
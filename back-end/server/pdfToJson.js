const fetch = require('node-fetch');

async function convertPdfToJson() {
    var data = {
        "url": "https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/eng.pdf",
        "lang": "eng",
        "inline": true,
        "pages": "0-",
        "async": false,
        "name": "result.csv"
    };

    const response = await fetch('https://api.pdf.co/v1/pdf/convert/to/csv', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': 'halim.aye64@gmail.com_QRg6B1o99n4v115Eje0LM58I7221P0R9Q8RvR57a5b2zA3nxT16103fSUVUjAk7W'
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

module.exports = convertPdfToJson;
var data = {
    "url": "https://www.ohchr.org/sites/default/files/UDHR/Documents/UDHR_Translations/eng.pdf",
    "lang": "eng",
    "inline": true,
    "pages": "0-",
    "async": false,
    "name": "result.csv"
  }

fetch('https://api.pdf.co/v1/pdf/convert/to/csv', {
method: 'POST',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json',
'x-api-key': 'sample@sample.com_123a4b567c890d123e456f789g01'
},
body: JSON.stringify(data)
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
## **Inspiration**

Regardless of who they are or where they come from, education is a right for everybody. However, there is much that needs to be done to bridge inequities that exist within education. It can be quite daunting to read pages upon pages of huge chunks of monotonous text - even more so for people with learning disabilities or accessibility needs, or who aren't as fluent in English. We wanted to be able to extract key information from long documents in a way that is more accessible and digestible for the user.

## **What it does**

Our application takes in a URL to a PDF from the user and then summarizes and displays it concisely with the help of large language models!

## **How we built it**

We used React.js for our frontend, and Node.js and Express.js for the backend. On the frontend, we have users sending in a URL to their PDF, which is then sent to the backend for processing. On the backend, we have API calls to first convert the PDF to simple text using the pdf.co API, and then sends this format to OpenAI's API for summarizing the text with an appropriate prompt. This output text is then fed to the frontend for display.

## **Challenges we ran into**

Establishing the connections for our endpoints between the frontend and backend was probably the most significant challenge we faced. We're also pretty unfamiliar with API calls and are still learning as we go!

## **Accomplishments that we're proud of**

- Having a pretty user interface :D
- Being able to figure out how to configure the endpoints so that they'd work!
- Figuring out how to perform API calls

## **What we learned**

To never underestimate how tedious frontend can be

## **What's next for ClearSpeak**

Implementing text augmentation features, like allowing users to pick a font, increase and decrease font size, choose their desired colour contrast, etc. We'd also really like to incorporate a text-to-speech feature and a language-translating feature to increase accessibility!

# handling upload

To handle uploading a PDF file from your frontend React app to your backend Express.js server and then manipulating it, you'll need to set up a few components and endpoints on both the frontend and backend sides. Here's a basic structure and technique to achieve this:

### Frontend (React):

1. **Component for Uploading PDF**:
Create a component in your React app where users can select and upload a PDF file. You can use a file input element or a custom-designed file uploader component.
2. **HTTP Request**:
Use `fetch` or a library like `axios` to send a POST request to your backend server with the uploaded PDF file.

### Backend (Express.js):

1. **Route for Uploading PDF**:
Create a route in your Express.js server to handle the file upload. This route will receive the PDF file from the frontend.
2. **File Upload Middleware**:
Use middleware such as `multer` to handle file uploads in Express.js. Multer is a middleware specifically designed for handling multipart/form-data, which is commonly used for file uploads.
3. **PDF Manipulation**:
Once the PDF file is uploaded, you can use libraries like `pdf-lib` or `pdfjs-dist` to manipulate the PDF file as needed. These libraries allow you to read, modify, and write PDF files programmatically.
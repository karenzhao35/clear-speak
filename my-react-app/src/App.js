import React, {useState, useRef} from "react";
// import {GoogleAuth} from "google-auth-library";
// import google from "googleapis";
import neswpaper_image from './newspaper.svg';
import upload_image from './cloud-upload.svg'
import summarize_image from './pencil.svg'
import axios from 'axios';
import './App.css';

function App() {
  const [url, setURL] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const ref = useRef();

  const serverURL = "http://localhost:3001/api"
  
  const fetchInfo = () => { 
    return axios.post(serverURL) 
             .then((response) => {setDisplay(response.data.message)
              console.log("Hello front end")});
  }
  
  React.useEffect(() => {
    fetchInfo(); 
  }, [])

  const handleClick = (e) => {
    var inputText = document.getElementById('textInput').value;
    setURL(inputText);
  }

  const [selectedFile, setSelectedFile] = useState(null);

  const [message2, setMessage2] = useState("");


  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  // };


  const summarizeFunction = () => {
    setMessage2('Hello World2');
  }


  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <div className="App-background">
        <div className='App-template'>
          <div className='child1'>
            <div className='logo-header'>
              <img src={neswpaper_image}/>
              <div className='logo-text'>ClearSpeak</div>
            </div>
            <div className='catchphrase'>Condense & Comprehend Knowledge</div>

{/* 
            <button onClick={handleClick} className="upload-button">
              <img src={upload_image}/> Upload File
            </button> 
            <input ref={ref} type="file" accept=".pdf" style={{ display: 'none'}} 
              onChange={handleFileChange} /> */}

            <button onClick={handleClick} className="upload-button">
              <img src={upload_image}/> Upload URL
            </button> 
            <input ref={ref} type="text" id="textInput" /* style={{ display: 'none'}}*/ /> 


            <button onClick={summarizeFunction} className="summarize-button">
              <img src={summarize_image}/> Summarize
            </button>
            <p>{message2}</p>
          </div>
          <div className='child2'></div>
        </div>
      </div>
    </div>
  );
}
export default App;


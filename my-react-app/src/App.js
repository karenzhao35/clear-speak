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
    return axios({
      method: "POST",
      url: serverURL,
      headers: { 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" },
      data: {
          url : url
      }
    }) 
             .then((response) => setDisplay(response.data.message))
             .catch(error => console.log(error));
  }
  
  React.useEffect(() => {
    fetchInfo(); 
  }, [url])

  const handleClick = (e) => {
    var inputText = document.getElementById('textInput').value;
    setURL(inputText);
  }

  const [message2, setMessage2] = useState("");

  const summarizeFunction = () => {
    setMessage2('Hello World2');
  }

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
          <div className='child2'>
            <div className="text-title">Summarized Text</div>
            <div className="text-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;


import React, {useState, useRef} from "react";
// import {GoogleAuth} from "google-auth-library";
// import google from "googleapis";
import neswpaper_image from './newspaper.svg';
import upload_image from './cloud-upload.svg'
import summarize_image from './pencil.svg'
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import './App.css';

function App() {
  const [display, setDisplay] = React.useState("");
  const [textbox, setBox] = React.useState(false);
  const [inputText, setInputText] = React.useState("");
  const ref = useRef();

  const serverURL = "http://localhost:3001/api"
  
  const fetchInfo = () => { 
    return axios({
      method: "POST",
      url: serverURL,
      headers: { 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" },
      data: {
          url : inputText
      }
    }) 
             .then((response) => setDisplay(response.data.message))
             .catch(error => console.log(error));
  }

  const handleClick = (e) => {
    fetchInfo();
  }

  const onClick = (e) => {
    setBox(true);
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  

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

            <div className='note'>URL must be a link to a PDF</div>
            {
              textbox == false &&
              <button onClick={onClick} className="upload-button">
                <img src={upload_image}/> Upload URL
              </button> 
            }

            {
              textbox == true &&
              <input type="text" className="text-field" onChange={handleChange} value={inputText}></input>
              // <input ref={ref} className="text-field" type="text" id="textInput"></input>
            }

            <button onClick={handleClick} className="summarize-button">
              <img src={summarize_image}/> Summarize
            </button> 

          </div>
          <div className='child2'>
            <div className="text-title">Summarized Text</div>
            <div className="text-box">
              <div className="summary-text">
                <ReactMarkdown>
                  {display}
                </ReactMarkdown>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;


import React, {useState} from "react";
import neswpaper_image from './newspaper.svg';
import upload_image from './cloud-upload.svg'
import summarize_image from './pencil.svg'
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");

  const uploadFunction = () => {
    setMessage('Hello World');
  }

  const summarizeFunction = () => {
    setMessage2('Hello World2');
  }

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


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
            <button onClick={uploadFunction} className="upload-button">
              <img src={upload_image}/> Upload File
            </button> 
            <p>{message}</p>
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

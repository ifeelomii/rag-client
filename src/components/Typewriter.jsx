import { useState } from "react";
import Particle from "./Particles";
import axios from "axios";

const Typewriter=() =>{
    const [value,setValue] = useState('Start Searching!');
    const [count, setCount] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleInput = () => {
        const element = document.getElementById('search-box');
        element.style.height = "auto"; 
        // element.style.maxWidth = "12em"
        element.style.height = element.scrollHeight + "px";
        if (value.length === element.style.width) {
            setValue(value+'\n');
        }
    };

    const handleClick = () => {
        if(count === 0) setValue("");
        setCount(count + 1);
        setShowButton(value != null || value ==="" ?true:"");
    };

    const submitQuery =(e)=>{
        console.log(`Output: ${e.target.value} `);
        e.preventDefault();
        setResponse(e.target.value);

        if(response != null){
            
        }
        // axios.post('https://api.example.com/data', value)
        // .then((res) => {
        //     setResponse(res.data); 
        // })
        // .catch((err) => {
        //     setError(err.message);  
        // });
    }
    return (
      <>
        <Particle />
        <div className="response">
            <p>{response}</p>
        </div>
        <div className="outer-container">
          <div
            contentEditable
            className="typewriter"
            onChange={handleInput}
            suppressContentEditableWarning={true}
          >
            <textarea
              type="text"
              contentEditable
              id="search-box"
              rows={1}
              value={value}
              onClick={handleClick}
              onChange={handleChange}
              onInput={handleInput}
              placeholder="Enter text here!"
            />
          </div>
          <div>
            {showButton && (
              <button id="search-button" onClick={submitQuery}>
                <span id="arrow-symbol">&#10230;</span>
              </button>
            )}
          </div>
        </div>
      </>
    );
};

export default Typewriter;
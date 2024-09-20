import { useState } from "react";
import Particle from "./Particles";

const Typewriter=() =>{
    const [value,setValue] = useState('Start Searching !');
    const [count,setCount] = useState(0);

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleClick = () => {
        if(count == 0) setValue("");
        setCount(count+1);
    };

    const handleBlur=()=>{

    };

    const submitQuery =(e)=>{
        console.log(`Output: ${e.target.value} `)
    }
    return(
    <>
        <Particle/>
        <div 
            contentEditable 
            className="typewriter board" 
            onChange={handleInput}
            suppressContentEditableWarning={true}
        > 
            <input type="text" contentEditable id="search-box" value={value} onBlur={handleBlur} onClick={handleClick} onChange={handleInput} placeholder="Enter text here !"/>
        </div>
    </>);
};

export default Typewriter;
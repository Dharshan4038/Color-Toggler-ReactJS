import React from 'react'
import colorNames from 'colornames';

export const InputContainer = ({color,setColor,text,setText,setHexValue}) => {
    

    function handleChange(event) {
        setColor(event.target.value);
        setHexValue(colorNames(event.target.value));
    }

    function handleClick() {
        setText((text==="white" && text !== "") ? "black" : "white");
    }

    return (
        <form className='input-container' onSubmit={(e)=>e.preventDefault()} >
            <input type="text" placeholder='Enter Color...' onChange={handleChange} value={color} />
            <button onClick={handleClick} className='toggle-btn bg-secondary text-white'>Toggle Color</button>
        </form>
    )
}

export default InputContainer;
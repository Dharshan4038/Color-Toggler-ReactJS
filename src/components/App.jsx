import React, { useState } from 'react'
import ColorContainer from './ColorContainer';
import InputContainer from './InputContainer';

export const App = () => {
    const [color,setColor] = useState("");
    const [text,setText] = useState("");
    const [hexValue,setHexValue] = useState("");

    return (
        <div>
            <ColorContainer 
                color = {color}
                text = {text}
                hexValue = {hexValue}
            />
            <InputContainer
                color = {color}
                setColor = {setColor}
                text = {text}
                setText = {setText}
                setHexValue={setHexValue}
            />
        </div>
    )
}

export default App;
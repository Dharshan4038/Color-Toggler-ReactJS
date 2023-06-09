import React from 'react';

export const ColorContainer = ({color,text,hexValue}) => {

    return (
        <div className='color-container' style={{backgroundColor: color,color: text}} >
            <h3>{(color.length) ? color : "Empty Value" } </h3>
            <h4>{ hexValue }</h4>
        </div>
    )

}

export default ColorContainer;
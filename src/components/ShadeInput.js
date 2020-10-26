import React from 'react';

const ShadeInput = (props)=>{
    return (
        <div className="shade-search">
        <div className="emojis">Color Shade Generator</div>
        <input
        type="text" onChange={(e) => props.onInputChange(e.target.value)}
        className="shade-input" value={props.color}/>
            <div className="">By Tasikul Islam</div>
        </div>
    );
}

export default ShadeInput;

import React, { useState,useEffect } from 'react';
import Values from 'values.js';
import isColor from 'is-color';
import Shade from './Shade';

const Shades=({color})=>{
    const [shades, setShades] = useState([]);
    useEffect(()=>{
        if(isColor(color)){
            createShades();
        }
    },[color]);
    const createShades=()=>{
        const shades= new Values(color).shades(1);
        setShades(shades);
    }

    return (
        <div className="shades">
           {
               shades.map(shade=>(<Shade shade={shade}/>))
           }
        </div>
    )
}

export default Shades

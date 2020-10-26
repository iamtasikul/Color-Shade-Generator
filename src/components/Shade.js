import React,{useState,useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const Shade=({shade})=>{
    const [copied,setCopied]=useState(false);
    useEffect(() => {
        let interval;
        if (copied == true) {
          interval = setInterval(() => {
            setCopied(false);
          }, 1500);
        }
        return () => {
          clearInterval(interval);
        };
      }, [copied]);
    return (
        <CopyToClipboard text={shade.hexString()} onCopy={() => setCopied(true)}>
            <div className="shade" style={{backgroundColor:shade.hexString()}}>
            {copied ? (
          <span className="copied">copied!</span>
        ) : (
          <span>{shade.hexString()}</span>
        )}
</div>
        </CopyToClipboard>
    );
};

export default Shade;
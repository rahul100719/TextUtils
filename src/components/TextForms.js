import React, { useState } from 'react';

function TextForms(props) {
   const handleUpText=()=>{
        // console.log("handleUpText");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Data is converted to UpperCase",'success')
    }
    const handleLowerText=()=>{
        // console.log("handleUpText");
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Data is converted to LowerCase",'success')
    }
    const handleClearText=()=>{
        // console.log("handleUpText");
        let newText='';
        setText(newText)
    }
    const handleChangeText=(event)=>{
        // console.log("ON Change");
        setText(event.target.value)
    }

    const copyText=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const [text, setText] = useState('');
    
    let textLength=text.trim().split(/[ ]+/).length ;
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
    <div className="container" >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="3"  value={text}  onChange={handleChangeText}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}}  ></textarea>
        <button type="button" className="btn btn-primary my-2" onClick={handleUpText}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLowerText}>Convert to LowerCase</button>
        <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleClearText}>Clear Text</button>
        <button type="button" className="btn btn-primary my-2 mx-2" onClick={copyText}>Copy Text</button>
        <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>words <b>{textLength}</b> and character <b>{text.length}</b></p>
        <p>{(0.008*textLength)} In Mintues Read</p>
        <h2>Preview</h2>
        <p>{textLength>1?text:'Enter something into the TextArea'}</p>
      </div>
      </div>
    </>
  );
}

export default TextForms;

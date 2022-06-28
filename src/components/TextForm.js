import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClearTextClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Handle Copied", "success");   
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Cleared Extra Space", "success");
    }
    const [text,setText] = useState('');
    return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearTextClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

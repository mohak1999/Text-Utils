import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        
        if(typeof text !== "undefined"){
            let upperCaseText = text.toUpperCase();
            setText(upperCaseText);
            props.showAlert("Successfully Converted to Upper Case", "success");
        }
    }

    const handleLoClick = () => {

        if(typeof text !== "undefined"){
            let lowerCaseText = text.toLowerCase();
            setText(lowerCaseText);
            props.showAlert("Successfully Converted to Lower Case", "success");
        }
    }

    const handleOnChange = (event) => {
        
        setText(event.target.value);
    }

    const clearInput = () => {
        
        setText("");
        props.showAlert("Successfully Cleared Text", "success");
    }

    const copyInput = () => {

        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied Successfully", "success");
    }

    const removeExtraSpace = () => {

        let textToRemoveSpace = text.split(/[ ]+/);
        setText(textToRemoveSpace.join(' '));
        props.showAlert("Extra Space Removed Successfully", "success");
    }

    const [text, setText] = useState();
    
    return (
        <>
        <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h1 style={{color: props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#495057' : 'white', color: props.mode === 'light' ? 'black' : 'white'}} placeholder="Enter a Text" value={text} onChange={handleOnChange} id="myBox" rows="8" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver to Upper Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Conver to Lower Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copyInput}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-danger mx-1 my-1" onClick={clearInput}>Clear</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h3>Your Text Summary</h3>
            <p>{typeof text === 'undefined' ? 0 : text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length}  words and {typeof text !== 'undefined' ? text.length : 0} characters</p>
            <p>{0.008 * (typeof text !== 'undefined' ? text.split(" ").length : 0) } Minutes to read this text.</p>
            <h3>Preview</h3>
            <div>{text}</div>
        </div>
        </>
    )
}

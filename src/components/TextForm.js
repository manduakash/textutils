import React, { useState } from "react";


const TextForm = (props) => {

  // state
const [text, setText] = useState('');

// handling on change method
const handleOnChange = (e)=>{
  setText(e.target.value);
}

// converting to uppercase
const handleUppercase = ()=>{
  if(text.length>0){
  setText(text.toUpperCase());
  props.showAlert("success","Text has been converted to uppercase successfully!")
}else{
  props.showAlert("warning","There is no text to apply this operation!")
}
}

// converting to lowercase
const handleLowercase = ()=>{
  if(text.length>0){
  setText(text.toLowerCase());
  props.showAlert("success","Text has been converted to lowercase successfully!")
}else{
  props.showAlert("warning","There is no text to apply this operation!")
}
}

// clear text logic
const handleClearText = ()=>{
  if(text.length>0){
  setText("");
  props.showAlert("success","Text has been cleared successfully!")
}else{
  props.showAlert("warning","There is no text to apply this operation!")
}
}

// copy text logic
const handleCopyText = ()=>{
  if(text.length>0){
    let text = document.getElementById("text-box");
    navigator.clipboard.writeText(text.value);
    props.showAlert("success","Text has been copied successfully!")
  }else{
    props.showAlert("warning","There is no text to copy!")
  }
}

// handling extra spaces
const handleExtraSpaces=()=>{
  let newText = text.split(/[ ]+/);
  if (text.length > 0) {
    setText(newText.join(" "));
    props.showAlert("success", "Extra spaces have been removed successfully!");
  } else {
    props.showAlert("warning", "There is no text to copy!");
  }
}

  return (
    <div style={props.ThemeStyle}>
        <h1>Enter text to analyze</h1>
      <div className="mb-3">
        <label htmlFor="text-box" className="form-label">
        </label>
        <textarea
          className="form-control"
          id="text-box"
          rows="8"
          placeholder="Enter text here"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==="light"?"#e9e9e9":"#315c97", color: props.mode==="light"?"black":"white"}}
        ></textarea>
      </div>
      <button className="btn btn-sm btn-primary me-2 my-2" onClick={handleUppercase}>convert to uppercase</button>
      <button className="btn btn-sm btn-primary me-2 my-2" onClick={handleLowercase}>convert to lowercase</button>
      <button className="btn btn-sm btn-primary me-2 my-2" onClick={handleExtraSpaces}>remove extra spaces</button>
      <button className="btn btn-sm btn-secondary me-2 my-2" onClick={handleClearText}>clear text</button>
    <div className="container">
      <h6 className="mt-3">Your text summary</h6>
      <small>{text?text.split(" ").length:0 && console.log(text.split(" "))} words, {text.length} characters and 000 lines</small>
      <h5 className="mt-3">Preview</h5>
      <p className="text-break">{text.length===0?"Enter something in the text-box to preview it here!":text}</p>
    <button className="btn btn-sm btn-primary me-2 my-2" onClick={handleCopyText}>copy text</button>
    </div>

    </div>
  );
};

export default TextForm;

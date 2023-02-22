import React, { useState } from "react";
import Page from "./Page";
import html2PDF from 'jspdf-html2canvas';


const TextForm = (props) => {
  // state
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("blue");
  const [textStyle, setTextStyle] = useState("akashHandWritten");
  const [textType, setTextType] = useState("fs-normal");



  // handling on change method
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  // converting to uppercase
  const handleUppercase = () => {
    if (text.length > 0) {
      setText(text.toUpperCase());
      props.showAlert(
        "success",
        "Text has been converted to uppercase successfully!"
      );
    } else {
      props.showAlert("warning", "There is no text to apply this operation!");
    }
  };

  // converting to lowercase
  const handleLowercase = () => {
    if (text.length > 0) {
      setText(text.toLowerCase());
      props.showAlert(
        "success",
        "Text has been converted to lowercase successfully!"
      );
    } else {
      props.showAlert("warning", "There is no text to apply this operation!");
    }
  };

  // clear text logic
  const handleClearText = () => {
    if (text.length > 0) {
      setText("");
      props.showAlert("success", "Text has been cleared successfully!");
    } else {
      props.showAlert("warning", "There is no text to apply this operation!");
    }
  };

  // copy text logic
  const handleCopyText = () => {
    if (text.length > 0) {
      let text = document.getElementById("text-box");
      navigator.clipboard.writeText(text.value);
      props.showAlert("success", "Text has been copied successfully!");
    } else {
      props.showAlert("warning", "There is no text to copy!");
    }
  };

  // handling extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    if (text.length > 0) {
      setText(newText.join(" "));
      props.showAlert(
        "success",
        "Extra spaces have been removed successfully!"
      );
    } else {
      props.showAlert("warning", "There is no text to copy!");
    }
  };

// const handlePdf = () => {
//     const input = document.getElementById('textContent');

//     html2canvas(input)
//         .then((canvas) => {
//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF('p', 'px', 'a4');
//             var width = pdf.internal.pageSize.getWidth();
//             var height = pdf.internal.pageSize.getHeight();

//             pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
//             pdf.save("test.pdf");
//         });
// };
const html2canvas=()=>{
  let page = document.getElementById('textContent');
  html2PDF(page, {
    jsPDF: {
      format: 'a4',
    },
    imageType: 'image/jpeg',
    output: './pdf/generate.pdf'
  });
};


  return (
    <div style={props.ThemeStyle}>
      <h1>Free Copy and Paste Font Generator</h1>
      <small>
        You can use it for your Instagram name, bio, caption or Facebook
        messages or for Pubg and FreeFire username!
      </small>
      <div className="mb-3">
        <label htmlFor="text-box" className="form-label"></label>
        <textarea
          className="form-control"
          id="text-box"
          rows="8"
          placeholder="Enter text here"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "#e9e9e9" : "#315c97",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <button
        className="btn btn-sm btn-primary me-2 my-2"
        onClick={handleUppercase}
      >
        convert to uppercase
      </button>
      <button
        className="btn btn-sm btn-primary me-2 my-2"
        onClick={handleLowercase}
      >
        convert to lowercase
      </button>
      <button
        className="btn btn-sm btn-primary me-2 my-2"
        onClick={handleExtraSpaces}
      >
        remove extra spaces
      </button>
      <button
        className="btn btn-sm btn-secondary me-2 my-2"
        onClick={handleClearText}
      >
        clear text
      </button>
      <div className="container">
        <h6 className="mt-3">Your text summary</h6>
        <small>
          {text ? text.split(" ").length : 0 && console.log(text.split(" "))}{" "}
          words, {text.length} characters and 000 lines
        </small>
        <h5 className="mt-3">Preview</h5>
        <p
          className="text-break"
          style={{
            height:
              "auto"
          }}
        >
          {text.length === 0
            ? "Enter something in the text-box to preview it here!"
            : text}
        </p>
        <button
          className="btn btn-sm btn-primary me-2 my-2"
          onClick={handleCopyText}
        >
          copy text
        </button>
      </div>

      <div className="container row">
        <div className="col-md-6 col-sm-12">
          <Page text={text} handleOnChange={handleOnChange} textColor={textColor} textStyle={textStyle} textType={textType}></Page>
        </div>

        <div className="container justify-content-center page-options col-md-6 col-sm-12">

        <h6>Text Style:</h6>
        <select className="form-select form-select-sm" multiple aria-label=".form-select-sm example">
          <option value="akashHandWritten" onClick={(e)=>{setTextStyle(e.target.value)}}> Hand-written 1</option>
          <option value="CedarvilleCursive-Regular" onClick={(e)=>{setTextStyle(e.target.value)}}>Hand-written 2</option>
          <option value="glossy-sheen" onClick={(e)=>{setTextStyle(e.target.value)}}>Hand-written 3</option>
        </select>
        <hr/>

        <h6>Text Color:</h6>
        <select className="form-select form-select-sm" multiple aria-label=".form-select-sm example">
          <option value="blue" onClick={(e)=>{setTextColor(e.target.value)}}>Blue</option>
          <option value="black" onClick={(e)=>{setTextColor(e.target.value)}}>Black</option>
          <option value="red" onClick={(e)=>{setTextColor(e.target.value)}}>Red</option>
          <option value="green" onClick={(e)=>{setTextColor(e.target.value)}}>Green</option>
        </select>
        <hr/>

        <h6>Text Type:</h6>
        <select className="form-select form-select-sm" multiple aria-label=".form-select-sm example">
          <option value="fw-normal" onClick={(e)=>{setTextType(e.target.value)}}>Normal</option>
          <option value="fw-bold" onClick={(e)=>{setTextType(e.target.value)}}>Bold</option>
          <option value="fs-5 fw-bold text-decoration-underline" onClick={(e)=>{setTextType(e.target.value)}}>Heading</option>
          <option value="text-decoration-underline" onClick={(e)=>{setTextType(e.target.value)}}>underline</option>
          <option value="text-decoration-line-through" onClick={(e)=>{setTextType(e.target.value)}}>cut</option>
        </select>

        <button className="btn btn-success" id="btnSave" onClick={html2canvas}>Save</button>


        </div>
      </div>
    </div>
  );
};

export default TextForm;

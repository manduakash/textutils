import React, { useState } from "react";
import Page from "./Page";
import html2PDF from 'jspdf-html2canvas';


const TextForm = (props) => {
  // state
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("blue");
  const [textStyle, setTextStyle] = useState("akashHandWritten");
  const [textType, setTextType] = useState("fs-normal");
  const [textSize, setTextSize] = useState("normal");
  const [wordSpace, setWordSpace] = useState("2px");
  const [lineSpace, setLineSpace] = useState("14px");


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

const html2canvas=()=>{
  let page = document.getElementById('page');
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
      <h1 className="overflow-hidden">Free assignment Generator</h1>
      <small>
        You can use it for your school or college assigments/lab without writting it just simply copy and past then take screenshot of it!
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
        <h6 className="overflow-hidden mt-3">Your text summary</h6>
        <small>
          {text ? text.split(/\s+/).filter((element)=>{return element.length!==0}).length : 0}{" "}
          words, {text.length} characters and {text ? text.split(/\n+/).length : 0}{" "} lines
        </small>
        <h5 className="overflow-hidden mt-3">Preview</h5>
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

      <div className="container asmnt-container row my-2">
        <div className="col-md-6 col-sm-12">
          <Page text={text} handleOnChange={handleOnChange} textColor={textColor} textStyle={textStyle} textType={textType} textSize={textSize} wordSpace={wordSpace} lineSpace={lineSpace}></Page>
        </div>

        <div className="container justify-content-center page-options col-md-6 col-sm-12" style={props.ThemeStyle}>

        <div className="row my-2" style={props.ThemeStyle}>
          <div className="col-5" style={props.ThemeStyle}>
            <h6 className="overflow-hidden" >Text Style:</h6>
            <select className="form-select form-select-sm" multiple aria-label=".form-select-sm example" style={props.ThemeStyle}>
              <option value="akashHandWritten" onClick={(e)=>{setTextStyle(e.target.value);setTextSize("15px");setWordSpace("2px");setLineSpace("16px")}}> Hand-written 1</option>
              <option value="CedarvilleCursive-Regular" onClick={(e)=>{setTextStyle(e.target.value);setTextSize("16px");setWordSpace("2px");setLineSpace("15px")}}>Hand-written 2</option>
              <option value="Atmosphier-Notes" onClick={(e)=>{setTextStyle(e.target.value);setTextSize("15px");setWordSpace("2px");setLineSpace("12px")}}>Hand-written 3</option>
              <option value="Manly-signature" onClick={(e)=>{setTextStyle(e.target.value);setTextSize("14px");setWordSpace("-5px");setLineSpace("22px")}}>Hand-written 4</option>
              <option value="Sansburg-signature" onClick={(e)=>{setTextStyle(e.target.value);setWordSpace("1px");setLineSpace("33px")}}>Hand-written 5</option>
            </select>
          </div>

          <div className="col-5" style={props.ThemeStyle}>
            <h6 className="overflow-hidden" >Text Color:</h6>
            <select className="form-select form-select-sm" multiple aria-label=".form-select-sm example" style={props.ThemeStyle}>
              <option value="blue" onClick={(e)=>{setTextColor(e.target.value)}}>Blue</option>
              <option value="#212529" onClick={(e)=>{setTextColor(e.target.value)}}>Black</option>
              <option value="#dc3545" onClick={(e)=>{setTextColor(e.target.value)}}>Red</option>
              <option value="#08b10e" onClick={(e)=>{setTextColor(e.target.value)}}>Green</option>
            </select>
          </div>
        </div>


        <div className="row my-2" style={props.ThemeStyle}>
          <div className="col-5" style={props.ThemeStyle}>
            <h6 className="overflow-hidden" >Text Type:</h6>
            <select className="form-select form-select-sm" multiple aria-label=".form-select-sm example" style={props.ThemeStyle}>
              <option value="fw-normal" onClick={(e)=>{setTextType(e.target.value)}}>Normal</option>
              <option value="fw-bold" onClick={(e)=>{setTextType(e.target.value)}}>Bold</option>
              <option value="fs-5 fw-bold text-decoration-underline" onClick={(e)=>{setTextType(e.target.value)}}>Heading</option>
              <option value="text-decoration-underline" onClick={(e)=>{setTextType(e.target.value)}}>underline</option>
              <option value="text-decoration-line-through" onClick={(e)=>{setTextType(e.target.value)}}>cut</option>
            </select>
          </div>

          <div className="col-5" style={props.ThemeStyle}>
            <h6 className="overflow-hidden" >Text Size:</h6>
            <select className="form-select form-select-sm" multiple aria-label=".form-select-sm example" style={props.ThemeStyle}>
              <option value="16px" onClick={(e)=>{setTextSize(e.target.value)}}>Normal</option>
              <option value="2px" onClick={(e)=>{setTextSize(e.target.value)}}>2px</option>
              <option value="4px" onClick={(e)=>{setTextSize(e.target.value)}}>4px</option>
              <option value="6px" onClick={(e)=>{setTextSize(e.target.value)}}>6px</option>
              <option value="8px" onClick={(e)=>{setTextSize(e.target.value)}}>8px</option>
              <option value="10px" onClick={(e)=>{setTextSize(e.target.value)}}>10px</option>
              <option value="12px" onClick={(e)=>{setTextSize(e.target.value)}}>12px</option>
              <option value="14px" onClick={(e)=>{setTextSize(e.target.value)}}>14px</option>
              <option value="15px" onClick={(e)=>{setTextSize(e.target.value)}}>15px</option>
              <option value="20px" onClick={(e)=>{setTextSize(e.target.value)}}>20px</option>
              <option value="25px" onClick={(e)=>{setTextSize(e.target.value)}}>25px</option>
              <option value="30px" onClick={(e)=>{setTextSize(e.target.value)}}>30px</option>
              <option value="40px" onClick={(e)=>{setTextSize(e.target.value)}}>40px</option>
              <option value="50px" onClick={(e)=>{setTextSize(e.target.value)}}>50px</option>
            </select>
          </div>
        </div>

        <div className="row my-2" style={props.ThemeStyle}>
          <div className="col-5" style={props.ThemeStyle}>
          <h6 className="overflow-hidden" >Word Space:</h6>
            <select className="form-select form-select-sm" multiple aria-label=".form-select-sm example" style={props.ThemeStyle}>
              <option value="16px" onClick={(e)=>{setWordSpace(e.target.value)}}>Normal</option>
              <option value="2px"  onClick={(e)=>{setWordSpace(e.target.value)}}>2px</option>
              <option value="4px"  onClick={(e)=>{setWordSpace(e.target.value)}}>4px</option>
              <option value="6px"  onClick={(e)=>{setWordSpace(e.target.value)}}>6px</option>
              <option value="8px"  onClick={(e)=>{setWordSpace(e.target.value)}}>8px</option>
              <option value="10px" onClick={(e)=>{setWordSpace(e.target.value)}}>10px</option>
              <option value="12px" onClick={(e)=>{setWordSpace(e.target.value)}}>12px</option>
              <option value="14px" onClick={(e)=>{setWordSpace(e.target.value)}}>14px</option>
              <option value="15px" onClick={(e)=>{setWordSpace(e.target.value)}}>15px</option>
              <option value="20px" onClick={(e)=>{setWordSpace(e.target.value)}}>20px</option>
              <option value="25px" onClick={(e)=>{setWordSpace(e.target.value)}}>25px</option>
              <option value="30px" onClick={(e)=>{setWordSpace(e.target.value)}}>30px</option>
              <option value="40px" onClick={(e)=>{setWordSpace(e.target.value)}}>40px</option>
              <option value="50px" onClick={(e)=>{setWordSpace(e.target.value)}}>50px</option>
            </select>
          </div>

          <div className="col-5" style={props.ThemeStyle}>
            <h6 className="overflow-hidden" >Line Space:</h6>
            <select className="form-select form-select-sm" multiple aria-label=".form-select-sm example" style={props.ThemeStyle}>
              <option value="16px" onClick={(e)=>{setLineSpace(e.target.value)}}>Normal</option>
              <option value="2px"  onClick={(e)=>{setLineSpace(e.target.value)}}>2px</option>
              <option value="4px"  onClick={(e)=>{setLineSpace(e.target.value)}}>4px</option>
              <option value="6px"  onClick={(e)=>{setLineSpace(e.target.value)}}>6px</option>
              <option value="8px"  onClick={(e)=>{setLineSpace(e.target.value)}}>8px</option>
              <option value="10px" onClick={(e)=>{setLineSpace(e.target.value)}}>10px</option>
              <option value="12px" onClick={(e)=>{setLineSpace(e.target.value)}}>12px</option>
              <option value="14px" onClick={(e)=>{setLineSpace(e.target.value)}}>14px</option>
              <option value="15px" onClick={(e)=>{setLineSpace(e.target.value)}}>15px</option>
              <option value="20px" onClick={(e)=>{setLineSpace(e.target.value)}}>20px</option>
              <option value="25px" onClick={(e)=>{setLineSpace(e.target.value)}}>25px</option>
              <option value="30px" onClick={(e)=>{setLineSpace(e.target.value)}}>30px</option>
              <option value="40px" onClick={(e)=>{setLineSpace(e.target.value)}}>40px</option>
              <option value="50px" onClick={(e)=>{setLineSpace(e.target.value)}}>50px</option>
            </select>
          </div>
        </div>

        <div className="d-grid gap-2 col-10 mx-start">
          <button className="btn btn-disable btn-warning text-white" style={{fontFamily: textStyle, overflow: "hidden"}} disabled data-bs-toggle="button" id="btnSave" onClick={html2canvas}>Simply take a screenshot after writting...</button>
        </div>



        </div>
      </div>
    </div>
  );
};

export default TextForm;

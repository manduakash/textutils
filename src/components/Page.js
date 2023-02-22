import React from 'react';
import page1 from "../images/page1.jpg";

const Page = (props) => {
  return (
    <div className="container page-container">
      <img
        className="d-flext justify-content-center page"
        src={page1}
        alt="page1"
      />
      <textarea
        className={`d-flext justify-content-center textContent ${props.textType}`}
        id="textContent"
        value={
          props.text.length === 0
            ? "Enter something in the text-box to preview it here!"
            : props.text
        }
        onChange={props.handleOnChange}
        style={{ fontFamily: props.textStyle, color: props.textColor }}
      ></textarea>
    </div>
  );
}

export default Page;

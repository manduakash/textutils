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
        id="page"
        value={
          props.text.length === 0
            ? "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected , or words which don't look even slightly believable. If you are going to use a passage of lorem ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected , or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected , or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
            : props.text
        }
        onChange={props.handleOnChange}
        style={{ fontFamily: props.textStyle, color: props.textColor, fontSize: props.textSize, wordSpacing: props.wordSpace,lineHeight: props.lineSpace }}
      ></textarea>
    </div>
  );
}

export default Page;

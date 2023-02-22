import React from "react";

const Navbar = (props) => {

  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
              </ul>
              <div className="form-check form-switch d-flex justify-content-end text-white">
                <input className="form-check-input" type="checkbox" role="switch" id="mode" onClick={props.toggleMode}/>
                <label className="d-flex" htmlFor="mode">{props.mode==='light'?(<><i className="fa-solid fa-moon d-flex align-items-center mx-2 fs-5"></i><small className="d-flex align-items-center text-monospace"> Dark Mode</small></>):(<><i className="fa-solid fa-sun d-flex align-items-center mx-2 fs-5"></i><small className="d-flex align-items-center text-monospace"> Light Mode</small></>)}</label>
              </div>
            </div>
          </div>
        </nav>
      </>
  );
};

export default Navbar;

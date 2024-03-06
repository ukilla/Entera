import React, { useEffect, useState } from "react";
import mainLogo from "../entera-header-logo.png";

export const Navigation = (props) => {

  const [navBg, setNavBg] = useState(false);
 
 
   useEffect(() => {
     window.addEventListener('scroll',(event) => { window.scrollY >= 200 ? setNavBg(true) : setNavBg(false);
      console.log(window.scrollY)});
     
   }, [navBg])

  return (
    <nav
      id="menu"
      className={`navbar ${navBg ? "nav-bg-scrolled" : ""} navbar-default navbar-fixed-top`}
    >
      <div >
      <div className="container">
        <div className="navbar-header" >
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img className="" src={mainLogo} alt="Header lo" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Uvod
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Usluge
              </a>
            </li>
            {/*<li>
              <a href="#services" className="page-scroll">
                Prednosti
              </a>
              </li>*/}
            <li>
              <a href="#portfolio" className="page-scroll">
                Projekti
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Partneri
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Tim
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll pulse">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};

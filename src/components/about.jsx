import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="first-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Virtuelne ture</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Desktop vizualizacije</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
          <div className="other-section col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

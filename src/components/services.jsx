import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Prednosti</h2>
        </div>
        <div className="row justify-content-center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.name}</h3>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {props.data
                          ? d.Why.map((desc, i) => (
                              <li key={`${d}-${i}`}>{desc}</li>
                            ))
                          : "loading"}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {props.data
                          ? d.Why2.map((desc, i) => (
                              <li key={`${d}-${i}`}>{desc}</li>
                            ))
                          : "loading"}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

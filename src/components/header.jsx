import React, { useEffect, useState } from "react";

export const Header = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [otherLoaded,setOtherLoaded] = useState(false);

  useEffect(() => {
    // Triggering animation after a short delay to ensure the animation starts after the component is mounted
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 2500);
    const timeout2 = setTimeout(() => {
      setOtherLoaded(true);
    }, 4300);

    // Cleanup function to clear the timeout in case the component unmounts before the timeout completes
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header id="header">
      <div className="intro">
      <video autoPlay muted loop>
        <source src="../img/intro-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className={`${loaded ? 'pop-up' : 'not-shown'}`}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p className={`${otherLoaded ? 'pop-up' : 'not-shown'}`}>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className={`btn btn-custom btn-lg page-scroll ${otherLoaded ? 'pop-up' : 'not-shown'}`}
                >
                  Saznajte više
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

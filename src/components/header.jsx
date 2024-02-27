import React, { useEffect, useState } from "react";

export const Header = ({ data, onVideoLoad }) => {
  const [loaded, setLoaded] = useState(false);
  const [otherLoaded, setOtherLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Triggering animation after a short delay to ensure the animation starts after the component is mounted
    const timeout1 = setTimeout(() => {
      setLoaded(true);
    }, 2500);
    const timeout2 = setTimeout(() => {
      setOtherLoaded(true);
    }, 4300);

    // Cleanup function to clear the timeout in case the component unmounts before the timeout completes
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  // Call onVideoLoad function when the video is loaded
  const handleVideoLoad = () => {
    onVideoLoad();
    console.log("AA");
  };

  return (
    <header id="header">
      <div className="intro">
        <video
          autoPlay
          muted
          loop
          src="../img/intro-video.mp4"
          type="video/mp4"
          onLoadedData={handleVideoLoad}>
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div> {/* Added empty div for overlay */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h1 className={`${loaded ? "pop-up" : "not-shown"}`}>
                {data ? data.title : "Loading"}
                <span></span>
              </h1>
              <p className={`${otherLoaded ? "pop-up-smaller" : "not-shown"}`}>
                {data ? data.paragraph : "Loading"}
              </p>
              <a
                href="#features"
                className={`btn btn-custom btn-lg page-scroll ${
                  otherLoaded ? "pop-up" : "not-shown"
                }`}
              >
                Saznaj više
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

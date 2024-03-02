import { Image } from "./image";
import React from "react";
import NewGallery from "./newgallery";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Slike projekta</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <NewGallery/>
            {/*props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."*/}
          </div>
        </div>
      </div>
    </div>
  );
};

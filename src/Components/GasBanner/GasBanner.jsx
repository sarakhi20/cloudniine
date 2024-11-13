import React from "react";
import "./GasBanner.css";

const GasBanner = () => {
  return (
    <div>
      <div className="gasBanner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <p className="display-3 m-0 text-start fw-medium">
                Fast & Easy Learn
              </p>
              <p className="fs-4 m-0 text-start">
                Quick Learn and easy understand
              </p>
              <span style={{ color: "whitesmoke" }}>
                Online Booking&nbsp;&nbsp;/&nbsp;&nbsp; Timely
                Class&nbsp;&nbsp;/&nbsp;&nbsp; Secure Payment
              </span>
              <br />
              <a href="#products" className="btn btn-primary my-3">
                View Our Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasBanner;
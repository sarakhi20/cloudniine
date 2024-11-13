import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      
      <div className="container-fluid bg-primary">
        <div className="text-center text-lg-start text-white">
          <section className="pt-5">
            <div className="container pt-2 text-md-start">
              <div className="row align-items-center justify-content-start">
                <div className="col-lg-3 col-md-6 col-sm-12 mx-auto mb-2">
                  <Link to="/home" className="navbar-brand my-5">
                    CloudNiine
                  </Link>
                  <p>
                  Our mission? To bestow upon students the gift of wisdom, aiding them in their quest for undergraduate enlightenment. Prepare to witness the extraordinary!
                  </p>
                </div>

             

                <div className="col-lg-3 col-md-6 col-sm-12 mx-auto mb-2">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />

                  <Link
                    to="https://maps.app.goo.gl/3NnjqkYoGnE7B8ch8"
                    target="_new"
                    className="text-white text-decoration-none"
                  >
                    <p>
                      <i className="fas fa-home mr-3"></i>
                      <span className="px-2">
                        darmapuri, puducherry, puducherry
                      </span>
                    </p>
                  </Link>

                  <Link
                    to="mailto:ajithironmark42@gmail.com"
                    target="_new"
                    className="text-white text-decoration-none"
                  >
                    <p>
                      <i className="fas fa-envelope mr-3"></i>
                      <span className="px-2">sarakhiammu96@gmail.com</span>
                    </p>
                  </Link>

                  <Link
                    to="tel:+911234567890"
                    target="_new"
                    className="text-white text-decoration-none"
                  >
                    <p>
                      <i className="fas fa-phone mr-3"></i>
                      <span className="px-2">+91 12345 67890</span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <hr style={{ border: "2px solid" }} />
          <section className="d-flex justify-content-between px-4 pb-3">
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <Link
                to="https://www.facebook.com/"
                target="_new"
                className="text-white me-4"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to="https://x.com/?lang=en"
                target="_new"
                className="text-white me-4"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                to="https://www.google.co.in/"
                target="_new"
                className="text-white me-4"
              >
                <i className="fab fa-google"></i>
              </Link>
              <Link
                to="https://www.instagram.com"
                target="_new"
                className="text-white me-4"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="https://in.linkedin.com/"
                target="_new"
                className="text-white me-4"
              >
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link
                to="https://github.com/sarakhi20"
                target="_new"
                className="text-white me-4"
              >
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <div className="text-center bg-dark p-3 text-light">
        &copy; {new Date().getFullYear()}&nbsp;&nbsp;
        <Link to="/" className="text-primary text-decoration-none">
          CloudNiine
        </Link>&nbsp;
        All Rights Reserved. 
      </div>
    </div>
  );
};

export default Footer;
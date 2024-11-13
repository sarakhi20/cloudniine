import React from "react";
import aboutImg from "./about2.png";

const About = () => {
  return (
    <div>
      <section className="bg-dark">
        <div className="container">
          <div className="py-5">
            <div className="row align-items-center justify-content-evenly">
              <p className="text-white display-4 py-3 text-center">About Us</p>
              <div className="col-lg-6 text-center">
                <img
                  src={aboutImg}
                  alt="About CloudNiine"
                  className="about-img shadow-lg img-fluid rounded-3"
                />
              </div>
              <div className="col-lg-6">
                <div className="mx-1">
                  <p className="display-2 text-white font-curv text-start">
                    CloudNiine
                  </p>
                  <p className="text-white m-4">
                  Within these virtual walls, students will uncover a treasure trove of streams and branches, carefully curated to match their very souls, their passions, and their wildest career aspirations. No stone shall be left unturned, no path left unexplored! But wait, dear traveler, there's more! We bring forth the whispers of the present, the tales of those who have embarked on this hallowed journey before you. Hear the unfiltered truths, the real-life sagas, as they guide you towards the perfect college. For in the realm of education, one size does not fit all. Let your desires and preferences reign supreme!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
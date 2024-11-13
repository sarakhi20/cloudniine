import React from "react";

const IconCards = () => {
  const iconCards = [
    {
      icon: "fa-solid fa-briefcase text-primary px-2",
      title: "Job Placement",
      paragraph:"We connect you with top employers in your field, leveraging our extensive network of industry partners.",
        
    },
    {
      icon: "fa-regular fa-graduation-cap text-primary px-2",
      title: "Skill Development",
      paragraph:"Enhance your skills with our targeted training programs, designed to keep you competitive in today's job market",
    },
    {
      icon: "fa-solid fa-handshake text-primary px-2",
      title: "Career Counseling",
      paragraph:
        "Get personalized advice from experienced professionals to guide your career decisions and growth strategy.",
    },
    {
      icon: "fa-solid fa-file-alt text-primary px-2",
      title: "Resume Building",
      paragraph:
        "Craft a compelling resume that highlights your strengths and catches the eye of potential employers.",
    },
    {
      icon: "fa-solid  fa-comments text-primary px-2",
      title: "Interview Preparation",
      paragraph:
        "Boost your confidence with mock interviews and expert tips to ace your next job interview.",
    },
    {
      icon: "fa-solid fa-chart-line text-primary px-2",
      title: "Career Advancement",
      paragraph:
        "Develop strategies for climbing the corporate ladder and achieving your long-term career goals.",
    },
  ];

  return (
    <div className="container mt-5 pt-5 mb-5 pb-5" id="service">
      <div className="row align-items-center justify-content-center">
        <div className="pb-5">
          <p className="display-6 text-center p-1 fw-normal text-violet">
          Our Career Support Services
          </p>
          <p className="text-center fs-5 fw-medium text-violet">
          Empowering professionals to reach new heights
          </p>
        </div>
        {iconCards.map((element, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className="card shadow-lg h-100">
              <div className="card-body">
                <div className="card-title">
                  <p className="fs-3">
                    <i className={element.icon}></i> {element.title}
                  </p>
                </div>
                <hr />
                <p>{element.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconCards;
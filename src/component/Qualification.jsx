import React from "react";

const Qualification = () => {
  return (
    <>
      {/* <!-- Qualification Start --> */}
      <div className="container-fluid py-5" id="qualification">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ webkitTextStroke: "1px #dee2e6" }}
            >
              Quality
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Education & Expericence
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4">My Education</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: "2px", left: "-32px" }}
                  ></i>
                  <h5 className="font-weight-bold mb-1">Bsc In CSE</h5>
                  <p className="mb-2">
                    <strong>Fareast International University</strong> |{" "}
                    <small>2017 - Present</small>
                  </p>
                  <p>
                    Engaged in a rigorous academic program for one year,
                    pursuing a Bachelor of Science (BSc) in Computer Science and
                    Engineering (CSE) at Farest International University. Gained
                    foundational knowledge in key CSE principles and coursework,
                    setting the stage for a dynamic understanding of modern
                    technology and its applications. Dates of attendance: 2017-
                    2018
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">My Expericence</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: "2px", left: "-32px" }}
                  ></i>
                  <h5 className="font-weight-bold mb-1">
                    Mern Stack Developer
                  </h5>
                  <p className="mb-2">
                    <strong>Sorobindu(Learn with fun)</strong> |{" "}
                    <small>2021 - Present</small>
                  </p>
                  <p>
                    MERN Stack Developer in training at Sorobindu (Learn with
                    Fun) since 2021, actively progressing towards expertise.
                    Enthusiastically acquiring skills in MongoDB, Express.js,
                    React, and Node.js, while crafting dynamic and interactive
                    web applications. Embracing the art of learning through
                    practical experiences and collaborative projects.
                    Continuously exploring new horizons in modern web
                    development. Expected graduation 2023.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Qualification End --> */}
    </>
  );
};

export default Qualification;

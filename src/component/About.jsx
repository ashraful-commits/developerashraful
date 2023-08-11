import React from "react";

const About = () => {
  return (
    <>
      {/* <!-- About Start --> */}
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ webkitTextStroke: "1px #dee2e6" }}
            >
              About
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              About Me
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img
                className="img-fluid rounded w-100"
                src="img/about.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4">Mern Stack Developer</h3>
              <p>
                With two years of MERN Stack experience, I specialize in
                creating dynamic web apps. I &apos;m also skilled in Next.js for
                seamless rendering and Socket.io for real-time communication.
                WebRTC knowledge allows me to enable video/audio calls and data
                sharing. I&apos;m dedicated to crafting innovative and
                responsive solutions
              </p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2">
                  <h6>
                    Name:{" "}
                    <span className="text-secondary">Md. Ashraful Alam</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Birthday:{" "}
                    <span className="text-secondary">7 March 1990</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Degree:{" "}
                    <span className="text-secondary">
                      1 years of study towards a BSc in CSE
                    </span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Experience: <span className="text-secondary">2 Years</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Phone:{" "}
                    <span className="text-secondary">+880 1955 127330</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Email:
                    <span className="text-secondary">
                      ashrafulalam1000@gmail.com
                    </span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Address:{" "}
                    <span className="text-secondary">Azimpur,Dhaka</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Freelance: <span className="text-secondary">Available</span>
                  </h6>
                </div>
              </div>
              <a href="#contact" className="btn btn-outline-primary mr-4">
                Hire Me
              </a>
              <a href="" className="btn btn-outline-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
};

export default About;

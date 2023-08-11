import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      {/* <!-- Video Modal Start --> */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal End --> */}

      {/* <!-- Header Start --> */}
      <div
        className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
        id="home"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img
                className="profile-fluid w-100 w-min-100 rounded-circle shadow-md"
                src="img/profile.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7 text-center text-lg-left">
              <h3 className="text-white font-weight-normal mb-3">I&apos;m</h3>
              <h1
                className="display-3 text-uppercase text-primary mb-2"
                style={{ webkitTextStroke: "2px #ffffff" }}
              >
                Md. Ashraful Alam
              </h1>
              <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
              <div className="typed-text">
                {
                  <Typewriter
                    className="typed-text"
                    options={{
                      strings: [
                        "Web Designer",
                        "Web Developer",
                        "Front End Developer",
                        "Back End Developer",
                        "Mern Stack Developer",
                        "React js Developer",
                        "Next js Developer",
                        "Node js Developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                }
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a
                  target="blank"
                  href="https://drive.google.com/file/d/1QUTCVP0xGmUydP9k24ZsSOqncmAaHD_n/view?usp=sharing"
                  className="btn btn-outline-light mr-5"
                >
                  Download CV
                </a>
                <button
                  type="button"
                  className="btn-play"
                  data-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-target="#videoModal"
                >
                  <span></span>
                </button>
                <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">
                  Play Video
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
    </>
  );
};

export default Hero;

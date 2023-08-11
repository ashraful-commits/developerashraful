import ProgressBar from "@ramonak/react-progress-bar";
const Skill = () => {
  return (
    <>
      {" "}
      {/* <!-- Skill Start --> */}
      <div className="container-fluid py-5" id="skill">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ webkitTextStroke: "1px #dee2e6" }}
            >
              Skills
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              My Skills
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">HTML</h6>
                  <h6 className="font-weight-bold">95%</h6>
                </div>
                <ProgressBar
                  bgColor="#0bceaf"
                  completed={95}
                  maxCompleted={100}
                />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">CSS</h6>
                  <h6 className="font-weight-bold">85%</h6>
                </div>
                <ProgressBar
                  bgColor="#ffc107"
                  completed={95}
                  maxCompleted={100}
                />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Redux</h6>
                  <h6 className="font-weight-bold">95%</h6>
                </div>
                <ProgressBar bgColor="red" completed={95} maxCompleted={100} />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Bootstrap</h6>
                  <h6 className="font-weight-bold">93%</h6>
                </div>
                <ProgressBar bgColor="pink" completed={93} maxCompleted={100} />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Framer motion</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <ProgressBar bgColor="Gold" completed={90} maxCompleted={100} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Javascript</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <ProgressBar bgColor="red" completed={90} maxCompleted={100} />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">React JS</h6>
                  <h6 className="font-weight-bold">99%</h6>
                </div>
                <ProgressBar
                  bgColor=" skyblue "
                  completed={99}
                  maxCompleted={100}
                />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Next js</h6>
                  <h6 className="font-weight-bold">85%</h6>
                </div>
                <ProgressBar
                  bgColor="orange"
                  completed={99}
                  maxCompleted={100}
                />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Socket.io</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <ProgressBar
                  bgColor="purple"
                  completed={90}
                  maxCompleted={100}
                />
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">Tailwind css</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <ProgressBar
                  bgColor=" blue "
                  completed={90}
                  maxCompleted={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Skill End --> */}
    </>
  );
};

export default Skill;

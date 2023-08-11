import React from "react";
import { Carousel } from "react-responsive-carousel";
const Testimonial = () => {
  return (
    <>
      {" "}
      {/* <!-- Testimonial Start --> */}
      <div className="container-fluid py-5" id="testimonial">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ webkitTextStroke: "1px #dee2e6" }}
            >
              Review
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Clients Say
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 testimonal">
              <div className="owl-carousel testimonial-carousel">
                <Carousel
                  autoPlay={true}
                  centerMode={true}
                  centerSlidePercentage={100}
                >
                  <div className="text-center">
                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                    <h4 className="font-weight-light mb-4">
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                    </h4>
                    <img
                      className="img-fluid rounded-circle mx-auto mb-3"
                      src="img/testimonial-1.jpg"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <h5 className="font-weight-bold m-0">Client Name</h5>
                    <span>Profession</span>
                  </div>
                  <div className="text-center">
                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                    <h4 className="font-weight-light mb-4">
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                    </h4>
                    <img
                      className="img-fluid rounded-circle mx-auto mb-3"
                      src="img/testimonial-2.jpg"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <h5 className="font-weight-bold m-0">Client Name</h5>
                    <span>Profession</span>
                  </div>
                  <div className="text-center">
                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                    <h4 className="font-weight-light mb-4">
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                    </h4>
                    <img
                      className="img-fluid rounded-circle mx-auto mb-3"
                      src="img/testimonial-3.jpg"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <h5 className="font-weight-bold m-0">Client Name</h5>
                    <span>Profession</span>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
};

export default Testimonial;

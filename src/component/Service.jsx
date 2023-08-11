import React from "react";

const Service = () => {
  return (
    <>
      {/* <!-- Services Start --> */}
      <div className="container-fluid pt-5" id="service">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ webkitTextStroke: "1px #dee2e6" }}
            >
              Service
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              My Services
            </h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                <h4 className="font-weight-bold m-0">Web Design</h4>
              </div>
              <p>
                Crafting visually captivating and user-centric website designs
                that capture your brand&apos;s essence. Our designs seamlessly
                blend aesthetics with functionality to provide a captivating
                online presence for your business.
              </p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                <h4 className="font-weight-bold m-0">Web Development</h4>
              </div>
              <p>
                Building robust and dynamic websites that bring your ideas to
                life. Our development expertise ensures your website is not only
                visually appealing but also functional, user-friendly, and
                optimized for performance.
              </p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i className="fab fa-2x fa-android service-icon bg-primary text-white mr-3"></i>
                <h4 className="font-weight-bold m-0">Apps Design</h4>
              </div>
              <p>
                Designing intuitive and engaging user interfaces for mobile
                applications that enhance user experiences. Our app designs
                combine creativity and usability to create a seamless
                interaction between users and your app
              </p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i className="fab fa-2x fa-apple service-icon bg-primary text-white mr-3"></i>
                <h4 className="font-weight-bold m-0">Apps Development</h4>
              </div>
              <p>
                Developing high-quality mobile applications that cater to your
                specific business needs. Our app development services focus on
                delivering feature-rich, responsive, and scalable apps to meet
                the demands of today&apos;s mobile users.
              </p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i className="fa fa-2x fa-search service-icon bg-primary text-white mr-3"></i>
                <h4 className="font-weight-bold m-0">SEO</h4>
              </div>
              <p>
                Elevating your online visibility and driving organic traffic to
                your website. Our SEO strategies enhance your website&apos;s
                search engine ranking, ensuring potential customers can easily
                find your business on the web.
              </p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i className="fa fa-2x fa-edit service-icon bg-primary text-white mr-3"></i>
                <h4 className="font-weight-bold m-0">Content Creating</h4>
              </div>
              <p>
                Crafting compelling and relevant content that resonates with
                your target audience. Our content creation services help you
                convey your message effectively, whether it&apos;s through
                engaging blog posts, informative articles, or captivating
                multimedia content.
              </p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}
    </>
  );
};

export default Service;

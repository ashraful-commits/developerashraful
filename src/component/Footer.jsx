import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
  return (
    <>
      {" "}
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="container text-center py-5">
          <ScrollToTop smooth />
          <div className="d-flex justify-content-center mb-4">
            <a
              target="blank"
              className="btn btn-light btn-social mr-2"
              href="https://github.com/ashraful-commits/"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="blank"
              className="btn btn-light btn-social mr-2"
              href="https://www.facebook.com/beautyformind"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              target="blank"
              className="btn btn-light btn-social mr-2"
              href="https://www.linkedin.com/in/beautifulmind/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              target="blank"
              className="btn btn-light btn-social"
              href="https://www.instagram.com/ashrafulalam10000/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <a className="text-white" href="#">
              Privacy
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              Terms
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              FAQs
            </a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">
              Help
            </a>
          </div>
          <p className="m-0">
            &copy;{" "}
            <a
              target="blank"
              className="text-white font-weight-bold"
              href="https://developerashraful.netlify.app/"
            >
              developerashraful
            </a>
            . All Rights Reserved
          </p>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
};

export default Footer;

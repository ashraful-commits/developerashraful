import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../../component/Navbar";
import About from "../../component/About";
import Qualification from "../../component/Qualification";
import Skill from "../../component/Skill";
import Service from "../../component/Service";
import PortFolio from "../../component/PortFolio";
import Testimonial from "../../component/Testimonial";
import Contact from "../../component/Contact";
import Blog from "../../component/Blog";
import Footer from "../../component/Footer";
import Scroll from "../../component/Scroll";
import Hero from "../../component/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Qualification />

      <Skill />
      <Service />
      <PortFolio />
      <Testimonial />

      <Contact />
      <Blog />
      <Footer />
      <Scroll />
    </>
  );
};

export default Home;

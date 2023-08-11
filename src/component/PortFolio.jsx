import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PortFolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const items = [
    {
      id: 1,
      filter: "Movie",
      title: "Movix",
      live: "https://movixproject01.netlify.app/",
      tools: [
        "React js",
        "Redux Toolkit",
        "Toolkit query",
        "react-circular-progressbar",
        "react-icons",
        "react-infinite-scroll-component",
        "react-lazy-load-image-component",
        "react-player",
        "sass",
      ],
      img: "/img/Movix.png",
    },
    {
      id: 2,
      filter: "Porfolio",
      title: "My Portfolio",
      live: "https://programmerashraful.netlify.app/",
      tools: ["Next js", "Tailwind css"],
      img: "/img/Myportfolio.png",
    },
    {
      id: 2,
      filter: "Porfolio",
      title: "My Portfolio",
      live: "https://developerashraful.netlify.app/",
      tools: [
        "React js",
        "Custom css",
        "Email.js",
        "Bootstrap",
        "react-lazy-load-image-component",
      ],
      img: "/img/Myportfolio2.png",
    },
  ];
  const filterButton = [
    { label: "All", catagory: "All" },
    { label: "E-Commerce", catagory: "E-Commerce" },
    { label: "Porfolio", catagory: "Porfolio" },
    { label: "Social Media", catagory: "Social Media" },
    { label: "E-Learning", catagory: "E-Learning" },
    { label: "Blogging ", catagory: "Blogging " },
    { label: "Weather", catagory: "Weather" },
    { label: "Chat", catagory: "Chat" },
    { label: "Fitness", catagory: "Fitness" },
    { label: "Movie", catagory: "Movie" },
  ];
  const filteredItems =
    selectedFilter === "All"
      ? items
      : items.filter((item) => item.filter === selectedFilter);

  return (
    <>
      {" "}
      {/* <!-- Portfolio Start --> */}
      <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ webkitTextStroke: "1px #dee2e6" }}
            >
              Gallery
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              My Portfolio
            </h1>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                {filterButton.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="btn btn-sm btn-outline-primary m-1 active"
                      onClick={() => setSelectedFilter(item.catagory)}
                    >
                      {item.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    data-filter={item.filter}
                    className="col-lg-4 col-md-6 mb-4 portfolio-item first"
                  >
                    <div className="position-relative overflow-hidden mb-2">
                      <LazyLoadImage
                        className="img-fluid rounded w-100"
                        alt={item.title}
                        src={item.img} // use normal <img> attributes as props
                      />
                      <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center ">
                        <p className="title">{item.title}</p>
                        <a href={item.img} data-lightbox="portfolio">
                          <i
                            className="fa fa-plus text-white"
                            style={{ fontSize: "25px" }}
                          ></i>
                        </a>
                        <a target="blank" className="link" href={item.live}>
                          Live
                        </a>
                        <div className="tools">
                          <h5>Tools:</h5>
                          {item.tools.map((item, index) => {
                            return <span key={index}>{item}, </span>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <h4>No Items</h4>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <!-- Portfolio End --> */}
    </>
  );
};

export default PortFolio;

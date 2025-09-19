import React from "react";
import { Row, Col, } from "react-bootstrap";
import "./Services.css";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import web from "../../img/web-development.jpg";
import ai from "../../img/ai-develop.jpg";
import ui from "../../img/ui-ux-design.jpg";
import teamicon from "../../img/team.png"
import chaticon from "../../img/chat.png"
import timeicon from "../../img/time.png"
import transicon from "../../img/transparency.png"

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Building scalable and modern web applications.",
      src: web,
      hoverText: "We build fast, responsive websites tailored to your business needs.",
    },
    {
      title: "AI Integration",
      desc: "Empowering businesses with Artificial Intelligence.",
      src: ai,
      hoverText: "Integrate cutting-edge AI solutions to optimize your business processes.",
    },
    {
      title: "UI/UX Design",
      desc: "Crafting user-friendly and engaging designs.",
      src: ui,
      hoverText: "Designing intuitive interfaces to delight users at every interaction.",
    },
    {
      title: "Development",
      desc: "Custom high-performance mobile applications.",
      src: web,
      hoverText: "Custom apps tailored to your business goals.",
    },
    {
      title: "Cyber Security",
      desc: "Protecting your digital assets.",
      src: ai,
      hoverText: "Robust security solutions to safeguard your business.",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const points = [
    { title: "Expert Team of Developers & Designers", desc: "With lots of unique blocks, you can easily build a page without coding. ", icon: teamicon },
    { title: "Modern, Scalable Tech Stack", desc: "With lots of unique blocks, you can easily build a page without coding. ", icon: chaticon },
    { title: "Timely Delivery & Ongoing Support", desc: "With lots of unique blocks, you can easily build a page without coding. ", icon: timeicon },
    { title: "100% Project Transparency", desc: "With lots of unique blocks, you can easily build a page without coding. ", icon: transicon },
  ];

  return (
    <section
      id="services"
      className=""
    >
      <div className="container-fluid p-0" style={{ backgroundColor: "#395563", color: "#ffffff", height:"100vh" }}>

        <div className=" container " style={{paddingTop:"100px"}}>
          <h5 className="service-header"> Our Services </h5>
        </div>
        <div className=" container d-flex justify-content-between align-items-center pt-5 pb-5">
          <div className="custom-heading">
            We Offer a Wide <br /> Variety of IT Services
          </div>
          <div className="d-flex align-items-center">
            <p className="me-4 mb-0">
              Spangles Webx is a tech-driven company passionate <br />
              about delivering innovative digital products with a <br />
              focus on design, usability, and performance.
            </p>
            {/* <button className="custom-btn">
              All Services <FaArrowRight style={{ marginLeft: "8px" }} />
            </button> */}
          </div>
        </div>

        <Carousel
          className="container pb-5"
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          containerClass="carousel-container"
        >
          {services.map((service, idx) => (
            <div key={idx} className="px-2 mx-2">
              <div className="service-card">
                <img src={service.src} alt={service.title} className="service-img" />
                <div className="service-overlay-box">
                  <h5>{service.title}</h5>
                  <p>{service.desc}</p>
                </div>
              </div>
            </div>


          ))}
        </Carousel>
      </div>


      {/* <div className="container-fluid text-center pt-5">
        <h5 className="custom-why-choose-us mb-4"> WHY CHOOSE US </h5>
        <h5 className="custom-why-partner mb-4"> Why Partner With Spangles Webx? </h5>
        <Row className="justify-content-center pt-5">
          {points.map((point, idx) => (
            <Col md={6} className="mb-4 d-flex justify-content-center" key={idx}>
              <Card className="h-100 shadow-sm" style={{ maxWidth: "350px", width: "100%" }}>
                <Card.Body>
                  <Card.Title>{point.title}</Card.Title>
                  <Card.Text>{point.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div> */}

      <div className="container-fluid text-center pt-5">
        <h5 className="custom-why-choose-us mb-4"> WHY CHOOSE US </h5>
        <h5 className="custom-why-partner mb-4"> Why Partner With Spangles Webx? </h5>


        <div className="d-flex justify-content-center">
          <Row className="justify-content-center pt-5" style={{ maxWidth: "950px" }}>
            {points.map((point, idx) => (
              <Col md={6} className="mb-4 d-flex justify-content-center" key={idx}>
                <div
                  className="feature-box d-flex align-items-start p-3"
                  style={{ width: "450px", height: "100px" }}
                >
                  <div className="icon-box me-3">
                    <img
                      src={point.icon}
                      alt=""
                      className="img-fluid"
                      style={{ width: "66px", height: "66px" }}
                    />
                  </div>
                  <div className="text-start">
                    <h6 className="fw-bold">{point.title}</h6>
                    <p className="text-muted mb-0">{point.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row> 
        </div>

        <div className="container get-start-container">
          <div>
            <h4 className="get-start-header">
              Ready to launch your next project?
            </h4>
            <p className="get-start-para">
              With lots of unique blocks, you can easily build a page without coding. <br />Build
              your next landing page.
            </p>
          </div>
          {/* <div>
            <button className="get-start-button">Get Start <FaArrowRight style={{ marginLeft: "8px" }} /></button>
          </div>          uncomment this to make the button alignment correctly            */            } 
        </div>


      </div>



    </section>
  );
}

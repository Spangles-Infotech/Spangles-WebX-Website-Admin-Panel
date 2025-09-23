import React from "react";
import { Row, Col, } from "react-bootstrap";
import "./Services.css";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import web from "../../img/WebSite.jpg";
import webapp from "../../img/WebApp.jpg";
import mobapp from "../../img/Mobileapp.jpg";
import softtesting from "../../img/Testing.jpg";
import ui from "../../img/UIUX.jpg";
import teamicon from "../../img/team.png";
import chaticon from "../../img/chat.png";
import timeicon from "../../img/time.png";
import transicon from "../../img/transparency.png";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      desc: "We build powerful, pixel-perfect websites that don’t just look good—they grow your business.",
      src: web,
    },
    {
      title: "Web App Development",
      desc: "Transforming ideas into scalable, user-friendly web apps that work seamlessly across every device.",
      src: webapp,
    },
    {
      title: "Mobile App Development",
      desc: "Building intuitive mobile apps that connect brands with users anytime, anywhere.",
      src: mobapp,
    },
    {
      title: "Software Testing",
      desc: "Ensuring flawless performance with rigorous testing for reliable, high-quality software.",
      src: softtesting,
    },
    {
      title: "UI / UX Designing",
      desc: "Crafting intuitive and engaging designs that turn users into loyal customers.",
      src: ui,
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
    { title: "Expert Team of Developers & Designers", desc: "A powerhouse of creative designers and skilled developers turning ideas into impactful digital solutions.", icon: teamicon },
    { title: "Modern, Scalable Tech Stack", desc: "Empowering your business with a modern, scalable tech stack designed for growth and performance.", icon: chaticon },
    { title: "Timely Delivery & Ongoing Support", desc: "Ensuring timely delivery and reliable ongoing support to keep your projects running smoothly.", icon: timeicon },
    { title: "100% Project Transparency", desc: "Experience complete project transparency with clear updates and full visibility at every stage.", icon: transicon },
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
        {/* <div className=" container d-flex justify-content-between align-items-center pt-5 pb-5">
          <div className="custom-heading">
            We Offer a Wide <br /> Variety of IT Services
          </div>
          <div className="d-flex align-items-center">
            <p className="me-4 mb-0">
              At Spangles Webx Pvt.Ld, we offer a comprehensive range of IT services designed to empower businesses in the digital era. From web and mobile app development to software testing, and UI/UX design, our expert team delivers innovative, scalable, and reliable solutions tailored to your unique needs. We combine customer-focused approach to ensure every project is executed with precision, efficiency, and transparency, helping your business grow and stay ahead in a competitive market.
            </p>
            <button className="custom-btn">
              All Services <FaArrowRight style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </div> */}
        <div className="container pt-5 pb-5">
          <div className="row align-items-center">
            {/* Column 4 */}
            <div className="col-4">
              <div className="custom-heading">
                We Offer a Wide <br /> Variety of IT Services
              </div>
            </div>

            {/* Column 6 */}
            <div className="col-6 service-content-p">
              <p className="mb-0 service-para">
                At <strong>Spangles Webx Pvt. Ld,</strong>  we offer a comprehensive range of IT services designed to empower businesses in the digital era. 
                {/* From web and mobile app development to software testing, and UI/UX design, our expert team delivers innovative, scalable, and reliable solutions tailored to your unique needs.  */}
                We combine customer-focused approach to ensure every project is executed with precision, efficiency, and transparency, helping your business grow and stay ahead in a competitive market.
              </p>
            </div>

            {/* Column 2 */}
            <div className="col-2 d-flex justify-content-end">
              {/* <button className="custom-btn">
                All Services <FaArrowRight style={{ marginLeft: "8px" }} />
              </button> */}
            </div>
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

      {/* Default gradient with title */}
      <div className="service-gradient-title">
        <h5>{service.title}</h5>
      </div>

      {/* Hover white overlay */}
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
              Ready to launch your next project? We combine creativity, technology, and expertise to bring your vision to life. With a focus on quality and timely delivery, we ensure your project succeeds from start to finish.
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

import React, { useState } from "react";
import "./Testimonials.css";
import doctorImg from "../../img/doctor.png"
import BillImg from "../../img/billing.png"
import ClgImg from "../../img/students.png"
import church from "../../img/church.png"

const cardsData = [
  {
    id: 1,
    name: "Hospital Management System",
    role: "Medical Assistant",
    rating: 4,
    image: doctorImg,
    text: "Hospital Management System - is a comprehensive solution designed to streamline healthcare operations and enhance patient care. From appointment scheduling and patient records to billing and staff management, the system automates critical workflows, reduces administrative workload, and improves overall efficiency. Developed with a focus on scalability and user-friendliness, it empowers hospitals and clinics to deliver seamless, high-quality healthcare services.",
  },
  
  
  {
    id: 2,
    name: "Church Management System",
    role: "Marketing Lead",
    rating: 4,
    image: church,
    text: "Church Management System - is a comprehensive solution designed to simplify administrative tasks and foster community engagement. From managing memberships, events, and donations to tracking attendance and communication, the system streamlines church operations efficiently. Built with ease-of-use and scalability in mind, it empowers religious organizations to focus more on their mission while keeping all administrative processes organized and transparent.",
  },
  {
    id: 3,
    name: "College Management System",
    role: "Product Designer",
    rating: 5,
    image: ClgImg,
    text: "Our College Management System is a comprehensive solution designed to simplify and digitize the daily operations of educational institutions. It includes modules for admissions, student records, attendance, examinations, fee management, and staff administration — all integrated into a single platform. By automating routine tasks, the system enhances efficiency, ensures data accuracy, and fosters seamless communication between students, faculty, and administrators.",
  },
  {
    id: 4,
    name: "Billing Management System",
    role: "CEO, BlueWave",
    rating: 5,
    image: BillImg,
    text: "Billing Management System - designed to simplify and streamline billing processes for businesses of all sizes. With automated invoicing, real-time tracking, and detailed reporting, ensures accuracy, efficiency, and transparency in every transaction. Our team developed this system with scalability and user-friendliness in mind, empowering businesses to manage their finances seamlessly while reducing manual effort and errors.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  const next = () =>
    setActive((prev) => (prev + 1) % cardsData.length);

  return (
    <div className="overall-testimonials-container" >
      <div className="container">
        <div className="row testimonials-header">
          <p className="testimonials-subtitle">OUR RECENT PROJECTS</p>
          <p className="testimonials-title">Featured Work</p>
        </div>

        <div className="carousel-wrapper">
          <button className="nav-btn left" onClick={prev}>
            ❮
          </button>

          <div className="carousel-stage">
            {cardsData.map((card, i) => {
              let position = "next";
              if (i === active) position = "active";
              if (i === (active - 1 + cardsData.length) % cardsData.length)
                position = "prev";

              return (
                <div key={card.id} className={`card ${position}`}>
                  <div className="card-image-testi">
                    <img src={card.image} alt={card.name} />
                  </div>
                  <div className="card-content-testi">
                    {/* <div className="rating">
                      {"★".repeat(card.rating)}{"☆".repeat(5 - card.rating)}
                    </div> */}
                    <h3>{card.name}</h3>
                    <p style={{textAlign:"justify"}}>{card.text}</p>
                    {/* <span className="role">- {card.role}</span> */}
                  </div>
                </div>
              );
            })}
          </div>

          <button className="nav-btn right" onClick={next}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

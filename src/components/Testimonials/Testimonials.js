import React, { useState } from "react";
import "./Testimonials.css";

const cardsData = [
  {
    id: 1,
    name: "Daniel Craig",
    role: "CEO, BlueWave",
    rating: 5,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    text: "Outstanding service and thoughtfulness. The team anticipated needs and delivered a polished final product on time.",
  },
  {
    id: 2,
    name: "Becky Nelson",
    role: "Medical Assistant",
    rating: 4,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&w=800",
    text: "Ask her why preserved exquisite she. Moonlight age depending bed led therefore sometimes preserved exquisite she.",
  },
  {
    id: 3,
    name: "Sophie Turner",
    role: "Marketing Lead",
    rating: 4,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "Professional, punctual and creative. Communication was superb — the result exceeded expectations.",
  },
  {
    id: 4,
    name: "Alex Morgan",
    role: "Product Designer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    text: "They helped me ship our product faster with clear design thinking. Immediate improvements in usability and engagement.",
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
          <p className="testimonials-subtitle">TESTIMONIALS</p>
          <p className="testimonials-title">What Our Clients Say</p>
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
                    <div className="rating">
                      {"★".repeat(card.rating)}{"☆".repeat(5 - card.rating)}
                    </div>
                    <h3>{card.name}</h3>
                    <p>{card.text}</p>
                    <span className="role">- {card.role}</span>
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

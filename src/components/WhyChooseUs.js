// src/components/WhyChooseUs.js
import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function WhyChooseUs() {
  const points = [
    { title: "Experienced Team", desc: "Our experts bring years of proven success." },
    { title: "Client-Centric Approach", desc: "We prioritize your needs and goals." },
    { title: "Innovative Solutions", desc: "We use the latest technology to deliver results." },
  ];

  return (
    <section id="why-us" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <Row>
          {points.map((point, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{point.title}</Card.Title>
                  <Card.Text>{point.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

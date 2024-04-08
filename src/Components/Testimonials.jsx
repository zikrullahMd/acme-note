import React from "react";
import "../Styles.scss";
import { motion } from 'framer-motion';

import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    name: "John Doe",
    profession: "Teacher",
    workplace: "Central High School",
    testimonial:
      "This website greatly aids in lesson planning and material organization, making teaching easier with its intuitive and user-friendly interface.",
    rating: 4.8,
    gender: 'male',
  },
  {
    name: "Alice Smith",
    profession: "Chef",
    workplace: "Taj Krishna",
    testimonial:
      "This website helps me plan menus, create shopping lists, and stay on top of inventory. It's a game-changer for restaurant management.",
    rating: 4.5,
    gender: 'female',
  },
  {
    name: "Isabella Chen",
    profession: "Journalist",
    workplace: "News Network ABC",
    testimonial:
      "For journalists, this site is invaluable, housing interview notes, research, and article drafts seamlessly.",
    rating: 4.8,
    gender: 'female',
  },
];

function Testimonials() {
  return (
    <div className="testimonial-container">
    <h1>What Our Students Have to Say</h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <section className="home-testimonial">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center testimonial-pos">
              <div className="col-md-12 pt-4 d-flex justify-content-center">
                <h3>Testimonials</h3>
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <h2>Explore the Students' Experience</h2>
              </div>
            </div>
          </div>
          <section className="home-testimonial-bottom">
            <div className="container testimonial-inner">
              <div className="row d-flex justify-content-center">
                {testimonialsData.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </section>
        </section>
      </motion.div>
    </div>
  );
}

export default Testimonials;

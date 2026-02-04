import React from "react";
import './Testimonials.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

function Testimonials () {
    const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Parent, Grade 10 Student",
      text: "My son was struggling with Calculus, but after just 3 months with Ikhlas Academy, he scored an A! The teachers are incredibly patient.",
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Student, Class 12 CBSE",
      text: "The 1-on-1 attention helped me crack my entrance exams. The mock tests were exactly like the real thing.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Parent, Grade 5",
      text: "I love the dashboard feature. I can check my daughter's attendance and test scores anytime. Highly recommended!",
      rating: 4
    }
  ];

    return (
        <section className="testimonials-section">
      <h2>What Parents Say</h2>
      
      <div className="testimonials-grid">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            
            <div className="stars">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="review-text">"{review.text}"</p>
            
            <div className="client-info">
              <h4>{review.name}</h4>
              <span>{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
}

export default Testimonials
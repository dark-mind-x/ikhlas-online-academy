import React from "react";
import './Features.css'

function Features () {
    return(
        <section className="features-container">

      <div className="feature-card">
        <span className="icon">👩‍🏫</span>
        <h3>1-on-1 Attention</h3>
        <p>Personalized learning plans tailored to your child's specific needs and pace.</p>
      </div>

      <div className="feature-card">
        <span className="icon">🌍</span>
        <h3>Global Curriculum</h3>
        <p>Expert tutors for CBSE, ICSE, and State boards </p>
      </div>

      <div className="feature-card">
        <span className="icon">💰</span>
        <h3>Affordable Fees</h3>
        <p>World-class education shouldn't break the bank. Flexible payment options available.</p>
      </div>

    </section>
    );
}

export default Features
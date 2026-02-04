import React from "react";
import './Hero.css';

function Hero () {
    return(
        <section className="hero-container">
            <div className="hero-content">
                <h1>World-Class Tutoring, Right at Your Desk</h1>
                <p>
                    Expert tutors for CBSE, ICSE and State boards.
                    Get 1-on-1 attention and boost your grades today. 
                </p>
                <button className="cta-btn">Book a free demo</button>
            </div>
            <div className="hero-image">
                <img src="./src/assets/Hero_1.avif" alt="Student studying online" />
            </div>
        </section>
    );
}

export default Hero
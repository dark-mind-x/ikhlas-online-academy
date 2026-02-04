import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

function LandingPage () {
    return(
        <div>
            <Hero />
            <Features />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default LandingPage
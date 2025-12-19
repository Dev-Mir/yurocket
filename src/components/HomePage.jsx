import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Results from "../components/Results";
import Package from "../components/Package";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    // small delay so DOM is ready
    setTimeout(() => {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }, 50);

    // clear state so it doesn't re-scroll on refresh
    navigate("/", { replace: true, state: {} });
  }, [location, navigate]);

  return (
    <div className="App">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="results">
        <Results />
      </section>

      <section id="package">
        <Package />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

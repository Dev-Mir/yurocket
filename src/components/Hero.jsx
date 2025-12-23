import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaClipboardCheck,
  FaChartLine,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";
import "../styles/Hero.css";
import hk from "./Clients/HK.png";
import holistic from "./Clients/Holistic.png";
import stinger from "./Clients/Stringer.png";
import groveTech from "./Clients/GroveTech.png";
import toucon from "./Clients/toucon.png";

// import wishpond from "./Clients/wishpond.png";
import PBN from "./Clients/PBN.png";
import WGL from "./Clients/WGL.png";


const trustedLogos = [
  { src: hk, alt: "HK" },
  { src: holistic, alt: "Holistic" },
  { src: stinger, alt: "Stinger" },
  { src: groveTech, alt: "GroveTech" },
  { src: toucon, alt: "Toucon" },
  
  // { src: wishpond, alt: "wishpond" },
  { src: PBN, alt: "PBN" },
  { src: WGL, alt: "WGL" },
  
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        {/* Top badge */}
        <div className="hero__badge">Lead Gen &amp; Email Outreach, Done Right</div>

        <h1 className="hero__title">
          <span className="hero__title-part hero__title-part--1">Done-For-You</span>
          <br />
          <span className="hero__title-part hero__title-part--2">
            <span>B2B Outbound</span> Lead Generation
          </span>
        </h1>

        <p className="hero__description">
          We build and run outbound systems that generate pipeline for B2B teams.
          Clean data, on-brand copy, multi-channel, and inboxes that stay healthy.
        </p>

        <div className="hero__cta">
          {/* Go to CTA block in Results */}
          <ScrollLink
            to="growth-cta"
            smooth
            duration={500}
            offset={-80}
            className="hero__button hero__button--primary"
          >
            Get your growth plan
          </ScrollLink>

          {/* Go to top of the Results grid */}
          <ScrollLink
            to="results"
            smooth
            duration={500}
            offset={-80}
            className="hero__button hero__button--secondary"
          >
            See Results
          </ScrollLink>
        </div>

        {/* Feature pills under buttons */}
        <div className="hero__chips">
          <div className="hero__chip">
            <span className="hero__chip-icon" />
            <span>Human-written Copy</span>
          </div>
          <div className="hero__chip">
            <span className="hero__chip-icon" />
            <span>List Building</span>
          </div>
          <div className="hero__chip">
            <span className="hero__chip-icon" />
            <span>Domain & Inbox Health</span>
          </div>
        </div>
      </div>

      {/* ---------- Trusted by + stats section ---------- */}
      <div className="hero__trusted">
        <p className="hero__trusted-title">Trusted by teams at</p>

        <div className="hero__trusted-box">
          {/* Marquee wrapper */}
          <div className="hero__logosMarquee" role="region" aria-label="Trusted by teams at">
            <div className="hero__logosTrack">
              {[...trustedLogos, ...trustedLogos].map((logo, idx) => (
                <div className="hero__logo-card" key={`${logo.alt}-${idx}`}>
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="hero__trusted-sub">
          A selection of companies our team members have supported.
        </p>

        <div className="hero__metrics">
          <div className="hero__metric-card">
            <div className="hero__metric-topline" />
            <FaClipboardCheck className="hero__metric-icon hero__metric-icon--clip" />
            <p className="hero__metric-number">200+</p>
            <p className="hero__metric-label">Projects delivered</p>
            <p className="hero__metric-sub">Across B2B SaaS, services &amp; e-com</p>
          </div>

          <div className="hero__metric-card">
            <div className="hero__metric-topline" />
            <FaChartLine className="hero__metric-icon hero__metric-icon--chart" />
            <p className="hero__metric-number">&gt;55%</p>
            <p className="hero__metric-label">Avg. open-rate uplift</p>
            <p className="hero__metric-sub">after warm-up &amp; testing</p>
          </div>

          <div className="hero__metric-card">
            <div className="hero__metric-topline" />
            <FaCalendarAlt className="hero__metric-icon hero__metric-icon--calendar" />
            <p className="hero__metric-number">10 - 30</p>
            <p className="hero__metric-label">Qualified meetings / month</p>
            <p className="hero__metric-sub">typical after ramp</p>
          </div>

          <div className="hero__metric-card">
            <div className="hero__metric-topline" />
            <FaShieldAlt className="hero__metric-icon hero__metric-icon--shield" />
            <p className="hero__metric-number">0</p>
            <p className="hero__metric-label">Domains burned this year</p>
            <p className="hero__metric-sub">deliverability-first ops</p>
          </div>
        </div>
      </div>
      {/* ---------- END NEW SECTION ---------- */}
    </section>
  );
};

export default Hero;
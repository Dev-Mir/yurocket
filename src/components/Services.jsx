import React from "react";
import {
  FaPaperPlane,
  FaLinkedinIn,
  FaDatabase,
  FaBullhorn,
  FaCogs,
  FaPenNib,
} from "react-icons/fa";
import "../styles/Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <h2 className="services__title">What we do</h2>
        <p className="services__subtitle">
          Full-stack outbound. Strategy to booked calls.
        </p>

        <div className="services__grid">
          {/* 1 - Email Outreach */}
          <article className="service-card">
            <div className="service-card__icon-wrap">
              <FaPaperPlane className="service-card__icon" />
            </div>
            <div className="service-card__content">
              <h3 className="service-card__title">Email Outreach</h3>
              <p className="service-card__text">
                Personalized, deliverability-safe campaigns that drive qualified
                replies at scale.
              </p>
            </div>
          </article>

          {/* 2 - LinkedIn Outreach */}
          <article className="service-card">
            <div className="service-card__icon-wrap">
              <FaLinkedinIn className="service-card__icon" />
            </div>
            <div className="service-card__content">
              <h3 className="service-card__title">LinkedIn Outreach</h3>
              <p className="service-card__text">
                Targeted connection flows and messaging that start real
                conversations and book calls.
              </p>
            </div>
          </article>

          {/* 3 - Lead Sourcing & Enrichment */}
          <article className="service-card">
            <div className="service-card__icon-wrap">
              <FaDatabase className="service-card__icon" />
            </div>
            <div className="service-card__content">
              <h3 className="service-card__title">
                Lead Sourcing &amp; Enrichment
              </h3>
              <p className="service-card__text">
                Hand-verified lists, intent signals, and firmographic enrichment
                to reach the right buyers.
              </p>
            </div>
          </article>

          {/* 4 - GTM Strategy */}
          <article className="service-card">
            <div className="service-card__icon-wrap">
              <FaBullhorn className="service-card__icon" />
            </div>
            <div className="service-card__content">
              <h3 className="service-card__title">GTM Strategy</h3>
              <p className="service-card__text">
                Clear ICP, offers, and channel mix. We map your motion to the
                buyers most likely to convert.
              </p>
            </div>
          </article>

          {/* 5 - Systems & Automations */}
          <article className="service-card">
            <div className="service-card__icon-wrap">
              <FaCogs className="service-card__icon" />
            </div>
            <div className="service-card__content">
              <h3 className="service-card__title">Systems &amp; Automations</h3>
              <p className="service-card__text">
                n8n / Make / Zapier + CRM. Reliable ops with clean routing and
                transparent reporting.
              </p>
            </div>
          </article>

          {/* 6 - Copy & Creativity */}
          <article className="service-card">
            <div className="service-card__icon-wrap">
              <FaPenNib className="service-card__icon" />
            </div>
            <div className="service-card__content">
              <h3 className="service-card__title">Copy &amp; Creativity</h3>
              <p className="service-card__text">
                Human, on-brand messaging with multivariate testing across
                segments and personas.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;

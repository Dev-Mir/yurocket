import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/Results.css";

const Results = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Lock scroll when modal open + ESC closes modal
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <section id="results" className="results">
        <div className="results__inner">
          <h2 className="results__title">Selected results</h2>

          <div id="results-cards" className="results__grid">
            {/* Card 1 */}
            <article className="result-card">
              <div className="result-card__tag">SaaS</div>
              <h3 className="result-card__title">
                Healthcare IT vendor breaks into 50–500 seat centers
              </h3>
              <ul className="result-card__list">
                <li>4.3% reply rate</li>
                <li>28 SQLs in 6 weeks</li>
                <li>99.2% Email Deliverability</li>
              </ul>
            </article>

            {/* Card 2 */}
            <article className="result-card">
              <div className="result-card__tag">Manufacturing</div>
              <h3 className="result-card__title">
                Surveying &amp; engineering firm fills calendar in Georgia
              </h3>
              <ul className="result-card__list">
                <li>38 meetings / 90 days</li>
                <li>New channel payback &lt; 30 days</li>
                <li>Warm referrals unlocked</li>
              </ul>
            </article>

            {/* Card 3 */}
            <article className="result-card">
              <div className="result-card__tag">E-commerce</div>
              <h3 className="result-card__title">
                DTC Sportswear and equipment brand via Email Outreach
              </h3>
              <ul className="result-card__list">
                <li>42 Conversions in 2.5 Months</li>
                <li>Average PO $11.7K</li>
                <li>CAC-neutral in month 1</li>
              </ul>
            </article>
          </div>

          {/* Growth CTA */}
          <div id="growth-cta" className="results__cta">
            <h3 className="results__cta-title">
              Ready to <span className="results__cta-highlight">skyrocket</span>{" "}
              your growth?
            </h3>
            <p className="results__cta-sub">
              Partner with us to unlock new levels of performance and scale.
            </p>

            <ul className="results__cta-list">
              <li>
                <FaCheckCircle className="results__cta-icon" />
                Proven track record with global brands
              </li>
              <li>
                <FaCheckCircle className="results__cta-icon" />
                End-to-end marketing strategies
              </li>
              <li>
                <FaCheckCircle className="results__cta-icon" />
                Performance-driven execution
              </li>
            </ul>

            {/* ✅ Button opens modal */}
            <button
              type="button"
              className="results__cta-button"
              onClick={() =>
                window.open(
                  "https://calendly.com/arslanjavedchang/30min",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span className="results__cta-button-icon">📅</span>
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* ✅ SAME MODAL FORM (reuse your modal CSS) */}
      {isModalOpen && (
        <div
          className="modalOverlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <button
              className="modalClose"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            <h2 className="modalTitle">Let us know more about your company</h2>
            <p className="modalSubtitle">
              To see how YuRocket can boost your B2B sales
            </p>

            <form className="modalForm">
              <div className="formGrid">
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="First name"
                  />
                </div>

                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Last name"
                  />
                </div>

                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Job title"
                  />
                </div>

                <div className="field">
                  <input
                    className="input"
                    type="email"
                    placeholder="Business email"
                  />
                </div>

                <div className="field">
                  <div className="phoneWrap">
                    <select className="select countrySelect" defaultValue="+92">
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                      <option value="+92">+92</option>
                      <option value="+971">+971</option>
                    </select>
                    <input
                      className="input"
                      type="tel"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Company name"
                  />
                </div>

                <div className="field">
                  <select className="select" defaultValue="">
                    <option value="" disabled>
                      Company size
                    </option>
                    <option>1–10</option>
                    <option>11–50</option>
                    <option>51–200</option>
                    <option>201–500</option>
                    <option>501–1000</option>
                    <option>1000+</option>
                  </select>
                </div>

                <div className="field">
                  <select className="select" defaultValue="">
                    <option value="" disabled>
                      Available monthly budget
                    </option>
                    <option>$500–$1,500</option>
                    <option>$1,500–$3,000</option>
                    <option>$3,000–$5,000</option>
                    <option>$5,000–$10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>

                <div className="field">
                  <select className="select" defaultValue="Pakistan">
                    <option>Pakistan</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>UAE</option>
                    <option>Canada</option>
                    <option>Germany</option>
                  </select>
                </div>

                <div className="field">
                  <select className="select" defaultValue="">
                    <option value="" disabled>
                      Industry
                    </option>
                    <option>Manufacturing</option>
                    <option>Wholesale / Distribution</option>
                    <option>Software / SaaS</option>
                    <option>Ecommerce</option>
                    <option>Agency</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="formBottom">
                <button type="button" className="continueBtn">
                  Continue
                </button>

                <p className="consentText">
                  By providing a telephone number and submitting this form you
                  consent to be contacted by SMS text message. Message &amp;
                  data rates may apply. Reply STOP to opt-out.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Results;

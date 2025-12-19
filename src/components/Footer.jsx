import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id, offset = -80) => {
    // If not on homepage, go to "/" first, then HomePage will scroll
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    // Already on homepage → scroll now
    scroller.scrollTo(id, {
      smooth: true,
      duration: 500,
      offset,
    });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Top section */}
        <div className="footer__top">
          {/* Brand + tagline */}
          <div className="footer__brand">
            <button
              type="button"
              className="footer__logoBtn"
              onClick={() => goToSection("home", -80)}
              aria-label="Go to home"
            >
              <div className="footer__logo">
                <span className="logo">yu</span>
                <span className="logoRocket">rocket.</span>
              </div>
            </button>

            <p className="footer__tagline">
              Outbound that respects your brand and your domain.
              <br />
              Serving B2B teams worldwide.
            </p>

            <div className="footer__social">
              <a href="mailto:contact@yurocket.com" className="footer__social-link">
                <FaEnvelope />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="footer__sections">
            <div className="footer__section">
              <h4>Company</h4>
              <ul>
                <li>
                  <button
                    type="button"
                    className="footer__link footer__linkBtn"
                    onClick={() => goToSection("services")}
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer__link footer__linkBtn"
                    onClick={() => goToSection("process")}
                  >
                    Process
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer__link footer__linkBtn"
                    onClick={() => goToSection("results")}
                  >
                    Results
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:contact@yurocket.com" className="footer__link">
                    contact@yurocket.com
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer__link footer__linkBtn"
                    onClick={() => goToSection("growth-cta", -80)}
                  >
                    Book a call
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <button
                    type="button"
                    className="footer__link footer__linkBtn"
                    onClick={() => goToSection("faq")}
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer__bottom">
          <p>© 2025 YuRocket. All rights reserved.</p>

          <button
            type="button"
            className="back-to-top"
            onClick={() => {
              if (location.pathname !== "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
              }
              goToSection("home", -80);
            }}
          >
            ↑ Back to top
          </button>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
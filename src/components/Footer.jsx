import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import "../styles/Footer.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const SECTION_TO_PATH = {
  home: "/",
  services: "/services",
  process: "/process",
  results: "/results",
  package: "/offer", // homepage section id="package" -> URL /offer
  faq: "/faq",
  "growth-cta": "/results", // CTA is inside Results section
};

const HOME_SECTION_ROUTES = new Set(Object.values(SECTION_TO_PATH));

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomeSectionRoute = HOME_SECTION_ROUTES.has(location.pathname);

  const goToSection = (id, offset = -80) => {
    const path = SECTION_TO_PATH[id] || "/";

    // If we're already on HomePage (any of its section routes), just scroll.
    // URL will update via your HomePage scroll-spy.
    if (isHomeSectionRoute) {
      scroller.scrollTo(id, { smooth: true, duration: 500, offset });
      return;
    }

    // From other pages (/terms, /privacy, /package page, etc.) navigate first,
    // then HomePage will scroll using location.state.scrollTo
    navigate(path, { state: { scrollTo: id } });
  };

  // ✅ Compact footer spacing ONLY on these pages
  const isLegalPage =
    location.pathname === "/terms" ||
    location.pathname === "/privacy" ||
    location.pathname === "/terms-and-conditions" ||
    location.pathname === "/privacy-policy" ||
    location.pathname.includes("terms") ||
    location.pathname.includes("privacy");

  return (
    <footer className={`footer ${isLegalPage ? "footer--compact" : ""}`}>
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <button
              className="footer__logoBtn"
              onClick={() => goToSection("home", -80)}
              aria-label="Go to top"
              type="button"
            >
              <div className="footer__logo">
                <span className="logo">Yu</span>
                <span className="logoRocket">Rocket</span>
              </div>
            </button>

            <p className="footer__tagline">
              Helping brands grow with strategy, design, and performance
              marketing.
            </p>

            <div className="footer__social">
              <a
                className="footer__social-link"
                href="mailto:contact@yurocket.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

              <a
                className="footer__social-link"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer__sections">
            <div className="footer__section">
              <h4>Company</h4>
              <ul>
                <li>
                  <button
                    className="footer__linkBtn footer__link"
                    onClick={() => goToSection("services")}
                    type="button"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    className="footer__linkBtn footer__link"
                    onClick={() => goToSection("process")}
                    type="button"
                  >
                    Process
                  </button>
                </li>
                <li>
                  <button
                    className="footer__linkBtn footer__link"
                    onClick={() => goToSection("results")}
                    type="button"
                  >
                    Results
                  </button>
                </li>
                <li>
                  <button
                    className="footer__linkBtn footer__link"
                    onClick={() => goToSection("package")}
                    type="button"
                  >
                    Package
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a
                    className="footer__link"
                    href="mailto:contact@yurocket.com"
                  >
                    contact@yurocket.com
                  </a>
                </li>
                <li>
                  <a
                    className="footer__link footer__linkBtn"
                    href="https://calendly.com/arslanjavedchang/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a call
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <button
                    className="footer__linkBtn footer__link"
                    onClick={() => goToSection("faq")}
                    type="button"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legalRow">
            <span>© 2025 YuRocket. All rights reserved.</span>

            <span className="footer__legalLinks">
              <span className="footer__legalSep">•</span>

              <button
                className="footer__linkBtn footer__link footer__legalLink"
                onClick={() => navigate("/terms")}
                type="button"
              >
                <b>Terms and Conditions</b>
              </button>

              <span className="footer__legalSep">•</span>

              <button
                className="footer__linkBtn footer__link footer__legalLink"
                onClick={() => navigate("/privacy")}
                type="button"
              >
                <b>Privacy Policy</b>
              </button>
            </span>
          </div>

          <button
            className="back-to-top"
            onClick={() => {
              // On HomePage (any of its section routes): scroll to home section.
              // On other pages: just scroll to top of that page.
              if (isHomeSectionRoute) {
                scroller.scrollTo("home", {
                  smooth: true,
                  duration: 500,
                  offset: -80,
                });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            type="button"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

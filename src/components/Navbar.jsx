import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const SECTION_TO_PATH = {
  home: "/",
  services: "/services",
  process: "/process",
  results: "/results",
  package: "/offer", // homepage section id="package"
  faq: "/faq",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  const openModal = () => {
    closeMenu();
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const navItems = [
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "results", label: "Results" },
    { id: "package", label: "Package" },
    { id: "faq", label: "FAQs" },
  ];

  const goToSection = (id) => {
    closeMenu();
    const path = SECTION_TO_PATH[id] || "/";

    // Already on that route -> just scroll
    if (location.pathname === path) {
      scroller.scrollTo(id, { smooth: true, duration: 500, offset: -80 });
      return;
    }

    // Different route -> navigate and HomePage will scroll
    navigate(path, { state: { scrollTo: id } });
  };

  const goHome = () => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "home" } });
      return;
    }
    scroller.scrollTo("home", { smooth: true, duration: 500, offset: -80 });
  };

  // Lock scroll when modal open + ESC closes modal
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          <button type="button" className="navbar__logo" onClick={goHome}>
            <span className="logo__yu">yu</span>
            <span className="logo__rocket">rocket</span>
            <span className="logo__dot">.</span>
          </button>

          <div className="navbar__right">
            <ul className="navbar__links navbar__links--desktop">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="navbar__link navbar__linkBtn"
                    onClick={() => goToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="navbar__cta navbar__cta--desktop"
              onClick={() =>
                window.open(
                  "https://calendly.com/arslanjavedchang/30min",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Book your call
            </button>
          </div>

          <button
            className={`navbar__hamburger ${
              isOpen ? "navbar__hamburger--open" : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={`navbar__mobile ${isOpen ? "navbar__mobile--open" : ""}`}
        >
          <ul className="navbar__links navbar__links--mobile">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="navbar__link navbar__link--mobile navbar__linkBtn"
                  onClick={() => goToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="navbar__cta navbar__cta--mobile"
            onClick={() =>
              window.open(
                "https://calendly.com/arslanjavedchang/30min",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Book your call
          </button>
        </div>
      </nav>

      {/* keep your modal JSX exactly as you already have it */}
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

export default Navbar;

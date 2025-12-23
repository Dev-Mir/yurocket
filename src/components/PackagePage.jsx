import React, { useMemo, useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaHandshake,
  FaBullseye,
  FaSearch,
  FaPaperPlane,
  FaShieldAlt,
  FaClock,
  FaChevronDown,
  FaClipboardList,
  FaTimes,
} from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/PackagePage.css";

const PackagePage = () => {
  const [openIdx, setOpenIdx] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  // Map URL -> section id (works even if your site is under /yurocket because of endsWith)
  const getTargetSectionFromPath = (pathname) => {
    if (pathname.endsWith("/package/who_for")) return "who_for";
    if (pathname.endsWith("/package/how")) return "how";
    if (pathname.endsWith("/package/pilot")) return "pilot";
    return null; // plain /package
  };

  // On route change: scroll to target section (or top for /package)
  useEffect(() => {
    const target = getTargetSectionFromPath(location.pathname);

    if (!target) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // small delay so DOM is ready
    setTimeout(() => {
      scroller.scrollTo(target, { smooth: true, duration: 500, offset: -80 });
    }, 50);
  }, [location.pathname]);

  const goToPackageSection = (segment, targetId) => {
    const nextPath = `/package/${segment}`;

    // If already on that route, just scroll again
    if (location.pathname.endsWith(nextPath)) {
      scroller.scrollTo(targetId, { smooth: true, duration: 500, offset: -80 });
      return;
    }

    // Navigate to the route; useEffect will scroll
    navigate(nextPath);
  };

  const whoFor = useMemo(
    () => ({
      manufacturers: [
        "Wholesalers",
        "Distributors",
        "Large retail / franchise partners around the globe",
      ],
      wholesalers: ["Big retailers", "Franchise chains", "Large e-commerce resellers"],
    }),
    []
  );

  const steps = useMemo(
    () => [
      {
        icon: <FaBullseye />,
        title: "Define your ideal bulk buyer",
        desc: "We lock the ICP + Filters so you only target real bulk buyers.",
        bullets: [
          "For manufacturers: target wholesalers, distributors, and large franchises.",
          "For wholesalers: target retail chains, franchise groups, and big online retailers.",
        ],
      },
      {
        icon: <FaSearch />,
        title: "Build & verify decision-maker lists",
        desc: "We find the right people and verify emails so campaigns land in inbox (not spam).",
        bullets: [
          "Find buyers, category managers, procurement heads, founders, etc.",
          "Verify emails so campaigns land in inbox, not spam.",
        ],
      },
      {
        icon: <FaPaperPlane />,
        title: "Write and launch outreach (LinkedIn + Email)",
        desc: "Messaging focused on lead pain points, personalization, a clear value proposition, and a CTA that converts.",
        bullets: [
          "Messaging focused on your leads’ pain points, built with deep personalization, a clear value proposition, and a CTA that converts.",
          "Multi-step email + LinkedIn sequences.",
          "Strong, conversion-focused CTAs plus reply tagging/qualification so you only spend time on real buying interest.",
        ],
      },
      {
        icon: <FaHandshake />,
        title: "Deliver qualified opportunities",
        desc: "We only count it as a qualified opportunity if there’s real buying intent.",
        checks: true,
        bullets: [
          "Confirm interest in buying in bulk or becoming a reseller/distributor, and",
          "Agree to book a call or move the conversation forward.",
        ],
      },
      {
        icon: <FaShieldAlt />,
        title: "Guarantee (so it feels safe)",
        desc: "We agree on a target together and de-risk the engagement.",
        bullets: [
          "We agree on a target together (for example: 15+ qualified bulk buyers in 60 days).",
          "If we don’t hit it: we work for free until we do, or we refund part of our fee — your choice.",
        ],
      },
      {
        icon: <FaClock />,
        title: "Timeline (fast, low friction)",
        desc: "Clear steps so you know exactly what happens next.",
        bullets: [
          "Days 1 – Onboarding, ICP, copy, and setup",
          "Days 2–14 – List building, copy, domain and email setup, warmup",
          "Week 3–4 – Launch campaign, analyse results (we make changes based on analysis)",
          "Week 4 onward – Start getting interested leads",
          "By Day 30 – A consistent pipeline of new wholesale / distributor / retail chain opportunities",
        ],
      },
    ],
    []
  );

  const yourSide = useMemo(
    () => ({
      do: [
        "Spend 60–90 minutes on one onboarding call (products, pricing, ideal partner).",
        "Approve targeting & messaging once.",
        "Show up to calls and close deals.",
      ],
      noNeed: [
        "Learn tools, hire SDRs, buy data platforms, or manage outreach.",
        "Commit to a long contract — we start with a simple 30-day pilot.",
      ],
    }),
    []
  );

  const toggleAccordion = (idx) => setOpenIdx((prev) => (prev === idx ? -1 : idx));

  return (
    <div className="packagePage">
      <Navbar />

      <main className="packagePage__shell">
        {/* HERO */}
        <section className="packageHero">
          <div className="packageHero__inner">
            <div className="packageHero__left">
              <div className="packageHero__kicker">
                <span className="pill pill--solid">
                  <FaIndustry />
                  Bulk Seller Growth Engine
                </span>
                <span className="pill pill--soft">
                  <FaCheckCircle /> Done-for-you
                </span>
                <span className="pill pill--soft">
                  <FaHandshake /> Qualified opportunities only
                </span>
              </div>

              <h1 className="packageHero__title">
                We help manufacturers and wholesalers get{" "}
                <span>10 – 30 qualified bulk buyers</span> into their pipeline every month.
              </h1>
              <br />

              <div className="packageHero__actions">
                <a
                  className="btnPrimary"
                  href="https://calendly.com/arslanjavedchang/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book your call
                </a>

                <button
                  type="button"
                  className="btnGhost"
                  onClick={() => goToPackageSection("who_for", "who_for")}
                >
                  See who it’s for
                </button>
              </div>

              <br />

              <div className="miniProof">
                <div className="miniProof__item">
                  <span className="miniDot" />
                  Clean targeting + verified inbox delivery
                </div>
                <div className="miniProof__item">
                  <span className="miniDot" />
                  Focused on bulk buyers (not random leads)
                </div>
                <div className="miniProof__item">
                  <span className="miniDot" />
                  You only talk to qualified opportunities
                </div>
              </div>
            </div>

            {/* STICKY CARD */}
            <aside className="packageHero__right">
              <div className="stickyCard">
                <div className="stickyCard__top">
                  <div className="stickyCard__title">What you get</div>
                  <div className="stickyCard__meta">30-day pilot</div>
                </div>

                <ul className="stickyCard__list">
                  <li>
                    <span className="dot" /> Decision-maker lists + Verification
                  </li>
                  <li>
                    <span className="dot" /> LinkedIn + Email sequences
                  </li>
                  <li>
                    <span className="dot" /> 100% Deliverability
                  </li>
                  <li>
                    <span className="dot" /> Reply qualification + Handoff
                  </li>
                  <li>
                    <span className="dot" /> Weekly Optimization & Reports
                  </li>
                  <li>
                    <span className="dot" /> Guaranteed Results
                  </li>
                </ul>

                <div className="stickyCard__cta">
                  <button
                    type="button"
                    className="btnPrimary btnPrimary--full"
                    onClick={() => goToPackageSection("pilot", "pilot")}
                  >
                    Start a 30-day pilot
                  </button>
                  <br />
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <p id="who_for"></p>
        <br />
        <br />
        <br />

        <section id="who" className="packageSection">
          <div className="sectionHead">
            <div className="centerHead">
              <h2 className="centerHead__title">Who this is for</h2>
              <span className="centerHead__underline" />
            </div>

            <p>
              Built specifically for bulk sellers who want predictable wholesale / retail conversations.
            </p>
          </div>

          <div className="twoCol">
            <div className="infoCard">
              <div className="infoCard__head">
                <div className="infoCard__icon">
                  <FaClipboardList />
                </div>
                <div>
                  <h3>Manufacturers who want:</h3>
                  <p>Partners that buy and move volume.</p>
                </div>
              </div>

              <ul className="cleanList">
                {whoFor.manufacturers.map((x) => (
                  <li key={x}>
                    <span className="dot" /> {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="infoCard">
              <div className="infoCard__head">
                <div className="infoCard__icon">
                  <FaClipboardList />
                </div>
                <div>
                  <h3>Wholesalers / distributors who want:</h3>
                  <p>Consistent buyers and repeat orders.</p>
                </div>
              </div>

              <ul className="cleanList">
                {whoFor.wholesalers.map((x) => (
                  <li key={x}>
                    <span className="dot" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="how" className="packageSection">
          <div className="sectionHead">
            <div className="centerHead">
              <h2 className="centerHead__title">What we do (Done-for-you)</h2>
              <span className="centerHead__underline" />
            </div>

            <p>
              Click each step to expand. Simple, structured, and designed for bulk buyers.
            </p>
          </div>

          <div className="accordion">
            {steps.map((s, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div className={`accItem ${isOpen ? "accItem--open" : ""}`} key={s.title}>
                  <button className="accBtn" type="button" onClick={() => toggleAccordion(idx)}>
                    <span className="accIcon">{s.icon}</span>

                    <span className="accText">
                      <span className="accTitle">{s.title}</span>
                      <span className="accDesc">{s.desc}</span>
                    </span>

                    <span className={`accChevron ${isOpen ? "accChevron--up" : ""}`}>
                      <FaChevronDown />
                    </span>
                  </button>

                  <div className="accPanel">
                    <ul className={`accList ${s.checks ? "accList--checks" : ""}`}>
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHAT YOU HAVE TO DO */}
        <section className="packageSection">
          <div className="sectionHead">
            <div className="centerHead">
              <h2 className="centerHead__title">What you have to do</h2>
              <span className="centerHead__underline" />
            </div>

            <p>From your side, it’s simple. We run the system — you close.</p>
          </div>

          <div className="twoCol">
            <div className="infoCard infoCard--soft">
              <div className="infoCard__head">
                <div className="infoCard__icon">
                  <FaCheckCircle />
                </div>
                <div>
                  <h3>From your side, you only:</h3>
                  <p>Minimal time. High leverage.</p>
                </div>
              </div>

              <ul className="cleanList">
                {yourSide.do.map((x) => (
                  <li key={x}>
                    <FaCheckCircle /> {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="infoCard infoCard--soft infoCard--danger">
              <div className="infoCard__head">
                <div className="infoCard__icon infoCard__icon--muted">
                  <FaTimes />
                </div>
                <div>
                  <h3>No need to:</h3>
                  <p>No heavy lift. No long contracts.</p>
                </div>
              </div>

              <ul className="cleanList cleanList--muted">
                {yourSide.noNeed.map((x) => (
                  <li key={x}>
                    <FaTimes /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <p id="pilot"></p>
        <br />
        <br />
        <br />

        <section id="cta" className="packageSection">
          <div className="ctaCard">
            <div className="ctaCard__left">
              <h2>Let’s run a 30-day pilot.</h2>
              <p>
                If you’re a manufacturer or wholesaler and want more bulk buyers (retail chains,
                distributors, or franchises), let’s run a 30-day pilot. If we don’t build you a clear
                pipeline of qualified opportunities, you simply don’t continue.
              </p>

              <div className="ctaCard__actions">
                <a
                  className="btnPrimary"
                  href="https://calendly.com/arslanjavedchang/30min?month=2025-08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book your call
                </a>

                <button
                  type="button"
                  className="btnGhost"
                  onClick={() => goToPackageSection("how", "how")}
                >
                  Review what we do
                </button>
              </div>
            </div>

            <div className="ctaCard__right">
              <div className="ctaMini">
                <div className="ctaMini__item">
                  <span className="ctaMini__icon">
                    <FaShieldAlt />
                  </span>
                  <div>
                    <div className="ctaMini__title">De-risked guarantee</div>
                    <div className="ctaMini__text">
                      Work free or refund part of the fee if target isn’t hit.
                    </div>
                  </div>
                </div>

                <div className="ctaMini__item">
                  <span className="ctaMini__icon">
                    <FaClock />
                  </span>
                  <div>
                    <div className="ctaMini__title">Fast timeline</div>
                    <div className="ctaMini__text">
                      Setup → launch → optimize → consistent pipeline by Day 30.
                    </div>
                  </div>
                </div>

                <div className="ctaMini__item">
                  <span className="ctaMini__icon">
                    <FaHandshake />
                  </span>
                  <div>
                    <div className="ctaMini__title">Qualified opportunities only</div>
                    <div className="ctaMini__text">
                      We count it only when there’s clear buying intent.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />
      </main>

      <Footer />
    </div>
  );
};

export default PackagePage;

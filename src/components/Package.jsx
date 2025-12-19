import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShieldAlt,
  FaBullseye,
  FaLayerGroup,
  FaHandsHelping,
  FaHeadset,
  FaSyncAlt,
} from "react-icons/fa";
import "../styles/Package.css";

const Package = () => {
  const navigate = useNavigate();

  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  // ✅ NEW: benefits/cards reveal
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const benefitsRef = useRef(null);

  // Scroll reveal for heading
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ✅ Reveal benefits section
  useEffect(() => {
    const el = benefitsRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBenefitsVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

       const benefits = [
  {
    icon: <FaShieldAlt />,
    title: "Money-Back Guarantee",
    desc: "If we don’t meet our lead target, you get a refund or we work for free until it's delivered. For example, if we promise 5 leads and fail, we’ll continue working for free until the target is met."
  },
  {
    icon: <FaBullseye />,
    title: "Personalized Outreach",
    desc: "We understand your ICP and business model, then select the best channels (Email, LinkedIn, Meta) to deliver targeted, effective outreach."
  },
  {
    icon: <FaLayerGroup />,
    title: "Diversified Sales Experience",
    desc: "Our team leverages Meta Ads, LinkedIn, Email, Google Ads, and AI marketing for a comprehensive outreach strategy tailored to your business."
  },
  {
    icon: <FaHandsHelping />,
    title: "Done-for-You Service",
    desc: "No need for additional tool subscriptions. We handle everything from setup to execution at a fraction of the cost."
  },
  {
    icon: <FaHeadset />,
    title: "Quick Customer Support Team",
    desc: "Our support team is available 24/7 to provide fast responses and ensure your campaigns stay on track."
  },
  {
    icon: <FaSyncAlt />,
    title: "Continuous Updates",
    desc: "We provide daily and weekly updates, offering full transparency into campaign progress, results, and next steps."
  },
];

  return (
    <section id="package" className="packages">
      <div className="packages__inner">
        {/* ✅ NEW: BENEFITS / CARDS SECTION (replaces circles/arrows workflow) */}
        <div
          ref={benefitsRef}
          className={`packagesBenefitsY ${benefitsVisible ? "packagesBenefitsY--in" : ""}`}
        >
          <div className="packagesBenefitsY__pill">Why this offer works</div>

          <h2 className="packagesBenefitsY__title">
            Built to be <span className="packagesBenefitsY__accent">safe</span>, clear, and results-driven.
          </h2>

          <p className="packagesBenefitsY__subtitle">
            You get a full team, the right channel strategy, and guaranteed accountability — without tool costs or
            complexity.
          </p>

          <div className="packagesBenefitsY__grid">
            {benefits.map((b, i) => (
              <article
                key={b.title}
                className="packagesBenefitCardY"
                style={{ ["--d"]: `${i * 90}ms` }}
              >
                <div className="packagesBenefitCardY__icon">{b.icon}</div>
                <h3 className="packagesBenefitCardY__title">{b.title}</h3>
                <p className="packagesBenefitCardY__desc">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* EXISTING SECTION (keep as-is) */}
        <div className="packages__enterpriseCard">
          {/* LEFT */}
          <div className="packages__left">
            <h2
              ref={titleRef}
              className={`packages__heading ${titleVisible ? "packages__heading--in" : ""}`}
            >
              Bulk Seller <span className="packages__accent">Growth</span> Engine
            </h2>

            <p className="packages__desc">
              We help manufacturers and wholesalers get{" "}
              <strong>10–30 qualified bulk buyers</strong> (retail chains, distributors,
              or franchises) into their pipeline every month using done-for-you LinkedIn
              and email outreach.
            </p>

            <button
              className="packages__ctaBtn"
              type="button"
              onClick={() => {
                navigate("/package");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Explore package
            </button>
          </div>

          {/* RIGHT */}
          <div className="packages__right">
            <div className="packages__rightGrid">
              <div className="packages__colHeader">
                <span className="packages__colHeaderTitle">Manufacturers who want:</span>
              </div>
              <div className="packages__colHeader">
                <span className="packages__colHeaderTitle">
                  Wholesalers / distributors who want:
                </span>
              </div>

              <div className="packages__point">
                <span className="packages__bullet" />
                Wholesalers
              </div>
              <div className="packages__point">
                <span className="packages__bullet" />
                Big retailers
              </div>

              <div className="packages__point">
                <span className="packages__bullet" />
                Distributors
              </div>
              <div className="packages__point">
                <span className="packages__bullet" />
                Franchise chains
              </div>

              <div className="packages__point">
                <span className="packages__bullet" />
                Large retail / franchise partners around the globe
              </div>
              <div className="packages__point">
                <span className="packages__bullet" />
                Large e-commerce resellers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;

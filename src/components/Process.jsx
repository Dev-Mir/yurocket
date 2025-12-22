import React from "react";
import { FaPhoneAlt, FaCogs, FaPaperPlane, FaChartLine } from "react-icons/fa";
import "../styles/Process.css";

const steps = [
  {
    id: "01",
    icon: <FaPhoneAlt />,
    title: "Call → Proposal → Deal?",
    text: "Quick intro call to align on goals. If we’re a fit, we send a proposal and lock scope with a simple MSA.",
  },
  {
    id: "02",
    icon: <FaCogs />,
    title: "Kickoff & Setup",
    text: "Deep-dive strategy + 30-day build: domains, auth (SPF/DKIM/DMARC), lists, copy, warm-up, seeds, and systems.",
  },
  {
    id: "03",
    icon: <FaPaperPlane />,
    title: "Campaign Launch",
    text: "Go live. We run controlled volumes with multivariate tests, watch placement, and start booking conversations.",
  },
  {
    id: "04",
    icon: <FaChartLine />,
    title: "Optimize → Scale",
    text: "Weekly iteration on ICP, messaging, and cadences to lift reply rate—then scale what works safely.",
  },
];

const Process = () => {
  return (
    <section id="process" className="process">
      <div className="process__inner">
        <h2 className="process__title">How YuRocket works</h2>
        <p className="process__subtitle">
          A simple, proven sequence—from strategy to scale.
        </p>

        <div className="process__grid">
          {steps.map((step, idx) => (
            <article key={step.id} className="process-card">
              {/* step badge */}
              <div className="process-card__badge">
                <span>{step.id}</span>
              </div>

              {/* icon block */}
              <div className="process-card__icon-wrap">
                <div className="process-card__icon">{step.icon}</div>
              </div>

              {/* title + text */}
              <h3 className="process-card__title">{step.title}</h3>
              <div className="process-card__underline" />
              <p className="process-card__text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

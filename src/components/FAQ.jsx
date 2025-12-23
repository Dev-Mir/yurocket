import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/FAQ.css";

const faqItems = [
  {
    id: 1,
    question: "What makes YuRocket different from other lead gen agencies?",
    answer:
      "We’re deliverability-first and full-stack. Clean ICP + lists, human-written copy, multi-variant testing, and day-to-day inbox health (SPF/DKIM/DMARC, warm-up, seeds, blacklist monitoring). You get strategy, execution, and reporting in one team without spammy tactics.",
  },
  {
    id: 2,
    question: "How many B2B leads will I get?",
    answer:
      "Volume depends on ICP size, offer strength, and sending limits. We typically book 10-30 qualified meetings per month once the program is ramped and stable. We prioritize quality over raw volume, and we share weekly reporting so you see exactly what’s happening.",
  },
  {
    id: 3,
    question: "Will my emails land in spam?",
    answer:
      "Our entire workflow is built to keep you out of spam: proper authentication (SPF/DKIM/DMARC), domain strategy, warm-up, seed tests, throttling, and ongoing placement monitoring. No one can guarantee zero spam, but we detect drift early and correct fast.",
  },
  {
    id: 4,
    question: "Who handles copy and targeting?",
    answer:
      "Senior strategists handle ICP refinement, list building (Apollo/LinkedIn/custom scrapes), and all messaging. Everything is written by humans, reviewed by experts, and aligned to your brand. You’ll approve before launch.",
  },
  {
    id: 5,
    question: "What happens if I want to pause or cancel?",
    answer:
      "We keep terms simple. You can pause or cancel with written notice before the next billing cycle. If you need a short pause (e.g., seasonality, capacity), we’ll protect reputation and resume smoothly.",
  },
  {
    id: 6,
    question: "How long before I see results?",
    answer:
      "We launch quickly-technical setup and messaging in Week 1-2, live sending shortly after. You’ll typically see replies in the first 1-2 weeks post-launch and first meetings in 2-4 weeks, then scale from there.",
  },
  {
    id: 7,
    question: "Why wouldn't I just hire a full-time SDR?",
    answer:
      "Cost, time, and specialization. A full-time SDR needs recruiting, training, tooling, management, and usually still won’t handle deliverability, data engineering, testing, and automation. With YuRocket you get a complete outbound engine on day one.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(); // first one open by default

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq__header">
        <p className="faq__eyebrow">Still curious?</p>
        <h2>FAQs</h2>
        <p className="faq__intro">
          Short answers to the questions teams ask most before working with us.
        </p>
      </div>

      <div className="faq__accordion">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.id}
              className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
            >
              <button
                type="button"
                className="faq__question"
                onClick={() => toggleAnswer(index)}
              >
                <div className="faq__q-left">
                  <span className="faq__badge">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.question}</h3>
                </div>
                <span
                  className={`faq__icon ${isOpen ? "faq__icon--open" : ""}`}
                >
                  <FaChevronDown />
                </span>
              </button>

              <div
                className={`faq__answer ${isOpen ? "faq__answer--open" : ""}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;

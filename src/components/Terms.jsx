import React, { useEffect } from "react";
import Navbar from "../components/Navbar"; // adjust path if different
import Footer from "../components/Footer"; // adjust path if different
import "../styles/LegalPage.css"; // create this file below

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = "Terms & Conditions | YuRocket";
  }, []);

  return (
    <>
      <Navbar />

      <main className="legalPage">
        <div className="legalPage__inner">
          <header className="legalPage__header">
            <h1 className="legalPage__title">Terms &amp; Conditions</h1>
            <p className="legalPage__updated">Last updated: 19th Dec, 2025</p>
            <p className="legalPage__intro">
              Welcome to YuRocket (“we,” “our,” or “us”). These Terms &amp;
              Conditions govern your access to and use of our website and
              services. By accessing our website or engaging our services, you
              agree to be bound by these Terms.
            </p>
            <p className="legalPage__intro">
              If you do not agree with any part of these Terms, please do not
              use our website or services.
            </p>
          </header>

          <section className="legalPage__section">
            <h2>1. Services</h2>
            <p>
              YuRocket provides B2B marketing and lead generation services,
              including but not limited to:
            </p>
            <ul>
              <li>Email outreach</li>
              <li>LinkedIn outreach</li>
              <li>Meta (Facebook/Instagram) advertising</li>
              <li>Lead generation and sales pipeline support</li>
            </ul>
            <p>All services are provided for business purposes only.</p>
          </section>

          <section className="legalPage__section">
            <h2>2. No Guarantee of Results</h2>
            <p>
              While we apply proven strategies and best practices, results may
              vary depending on factors outside our control, including:
            </p>
            <ul>
              <li>Market conditions</li>
              <li>Offer quality</li>
              <li>Target audience</li>
              <li>Client responsiveness</li>
              <li>Ad platform or email platform policies</li>
            </ul>
            <p>
              We do not guarantee specific revenue, number of leads, or sales
              outcomes, unless explicitly stated in a written agreement.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>3. Client Responsibilities</h2>
            <p>Clients agree to:</p>
            <ul>
              <li>
                Provide accurate and complete information required to deliver
                services
              </li>
              <li>Review and approve campaign materials when requested</li>
              <li>
                Use leads and data provided in compliance with applicable laws
                and regulations
              </li>
              <li>
                Not use our services for unlawful, misleading, or unethical
                purposes
              </li>
            </ul>
            <p>
              YuRocket is not responsible for performance issues caused by
              inaccurate information or delays in client approvals.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>4. Outreach &amp; Compliance</h2>
            <p>
              Our outreach services are designed for B2B communication only.
            </p>
            <p>Clients acknowledge that:</p>
            <ul>
              <li>
                Outreach campaigns may involve third-party platforms and tools
              </li>
              <li>
                Compliance with laws such as CAN-SPAM, GDPR (where applicable),
                and platform policies is required
              </li>
              <li>
                YuRocket cannot be held liable for account restrictions or
                suspensions imposed by third-party platforms beyond our control
              </li>
            </ul>
          </section>

          <section className="legalPage__section">
            <h2>5. Payments &amp; Fees</h2>
            <ul>
              <li>
                Fees, billing terms, and payment schedules are defined in
                individual service agreements or proposals
              </li>
              <li>
                All payments are due as stated and are non-refundable, unless
                otherwise agreed in writing
              </li>
              <li>
                Late payments may result in service suspension or termination
              </li>
            </ul>
          </section>

          <section className="legalPage__section">
            <h2>6. Intellectual Property</h2>
            <p>
              All materials, strategies, frameworks, and content created by
              YuRocket remain our intellectual property unless otherwise stated
              in writing.
            </p>
            <p>
              Clients may use delivered assets solely for their internal
              business purposes and may not resell, redistribute, or reuse them
              for third-party services.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>7. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any non-public business
              information shared during the course of engagement, unless
              disclosure is required by law.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>
                YuRocket shall not be liable for indirect, incidental, or
                consequential damages
              </li>
              <li>
                Our total liability shall not exceed the amount paid by the
                client for the services in question
              </li>
            </ul>
          </section>

          <section className="legalPage__section">
            <h2>9. Termination</h2>
            <p>We reserve the right to suspend or terminate services if:</p>
            <ul>
              <li>These Terms are violated</li>
              <li>Payments are not made on time</li>
              <li>
                Services are used in a way that violates applicable laws or
                platform rules
              </li>
            </ul>
            <p>
              Clients may terminate services according to the terms outlined in
              their service agreement.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>10. Third-Party Tools &amp; Platforms</h2>
            <p>
              YuRocket uses third-party tools and platforms (email providers, ad
              platforms, CRMs, analytics tools).
            </p>
            <p>We are not responsible for:</p>
            <ul>
              <li>Downtime or outages</li>
              <li>Policy changes</li>
              <li>Account limitations or bans imposed by these platforms</li>
            </ul>
          </section>

          <section className="legalPage__section">
            <h2>11. Website Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Copy, scrape, or misuse website content</li>
              <li>Use the website for unlawful or harmful activities</li>
            </ul>
          </section>

          <section className="legalPage__section">
            <h2>12. Changes to Terms</h2>
            <p>
              We may update these Terms &amp; Conditions from time to time.
              Updates will be posted on this page with an updated “Last updated”
              date. Continued use of the website constitutes acceptance of the
              revised Terms.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and interpreted in accordance
              with the laws of Pakistan, without regard to conflict of law
              principles.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>14. Contact Information</h2>
            <p>
              For any questions regarding these Terms &amp; Conditions, please
              contact:
            </p>
            <div className="legalPage__contact">
              <p>
                <strong>YuRocket</strong>
              </p>
              <p>
                📧 Email:{" "}
                <a
                  className="legalPage__link"
                  href="mailto:contact@yurocket.com"
                >
                  contact@yurocket.com
                </a>
              </p>
              <p>
                🌐 Website:{" "}
                <a
                  className="legalPage__link"
                  href="https://www.yurocket.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.yurocket.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Terms;

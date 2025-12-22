import React, { useEffect } from "react";
import Navbar from "../components/Navbar"; // adjust path if different
import Footer from "../components/Footer"; // adjust path if different
import "../styles/LegalPage.css";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = "Privacy Policy | YuRocket";
  }, []);

  return (
    <>
      <Navbar />

      <main className="legalPage">
        <div className="legalPage__inner">
          <header className="legalPage__header">
            <h1 className="legalPage__title">Privacy Policy</h1>
            <p className="legalPage__updated">Last updated: 19th Dec, 2025</p>

            <p className="legalPage__intro">
              YuRocket (“we,” “our,” or “us”) respects your privacy and is
              committed to protecting any personal information you share with
              us. This Privacy Policy explains how we collect, use, store, and
              protect your information when you visit our website or engage with
              our services.
            </p>
            <p className="legalPage__intro">
              By using our website or services, you agree to the practices
              described in this policy.
            </p>
          </header>

          <section className="legalPage__section">
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>

            <p>
              <strong>a) Information You Provide Voluntarily</strong>
            </p>
            <ul>
              <li>Name</li>
              <li>Business email address</li>
              <li>Company name</li>
              <li>Phone number</li>
              <li>Job title</li>
              <li>
                Any information you submit through contact forms, booking forms,
                or emails
              </li>
            </ul>

            <p>
              <strong>b) Automatically Collected Information</strong>
            </p>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited and time spent on the site</li>
              <li>Referral sources</li>
            </ul>

            <p>
              This data helps us understand how visitors use our website and
              improve performance.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to inquiries and contact requests</li>
              <li>
                Provide and improve our B2B marketing and lead generation
                services
              </li>
              <li>
                Run outreach campaigns on behalf of our clients (email,
                LinkedIn, ads)
              </li>
              <li>Analyze website traffic and performance</li>
              <li>Maintain internal records and reporting</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
            <p>We do not sell personal data to third parties.</p>
          </section>

          <section className="legalPage__section">
            <h2>3. B2B Outreach &amp; Lead Generation</h2>
            <p>
              YuRocket operates primarily in B2B marketing and lead generation.
            </p>
            <p>When conducting outreach campaigns for our clients:</p>
            <ul>
              <li>
                Data is sourced from publicly available or licensed B2B data
                providers
              </li>
              <li>Outreach is business-focused, not personal</li>
              <li>
                Campaigns are designed to comply with applicable laws such as
                CAN-SPAM, GDPR (where applicable), and platform policies
              </li>
              <li>Opt-out and unsubscribe mechanisms are respected</li>
            </ul>
            <p>
              If you receive outreach from us and wish to opt out, you can do so
              at any time.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>4. Cookies &amp; Tracking Technologies</h2>
            <p>We may use cookies or similar technologies to:</p>
            <ul>
              <li>Improve website functionality</li>
              <li>Analyze traffic and user behavior</li>
              <li>Optimize marketing performance</li>
            </ul>
            <p>
              You can control or disable cookies through your browser settings.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>5. Sharing of Information</h2>
            <p>We may share information only with:</p>
            <ul>
              <li>
                Trusted service providers (e.g., CRM tools, analytics platforms,
                email systems)
              </li>
              <li>Advertising platforms (for campaign execution)</li>
              <li>Legal or regulatory authorities if required by law</li>
            </ul>
            <p>
              All partners are required to handle data securely and only for
              authorized purposes.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>6. Data Security</h2>
            <p>
              We take reasonable technical and organizational measures to
              protect your data against:
            </p>
            <ul>
              <li>Unauthorized access</li>
              <li>Loss, misuse, or alteration</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100%
              secure.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>7. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to:</p>
            <ul>
              <li>Fulfill the purposes outlined in this policy</li>
              <li>Meet legal, accounting, or contractual obligations</li>
            </ul>
          </section>

          <section className="legalPage__section">
            <h2>8. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Request access to your data</li>
              <li>Request correction or deletion</li>
              <li>Object to processing</li>
              <li>Withdraw consent (where applicable)</li>
            </ul>
            <p>To exercise your rights, contact us at the email below.</p>
          </section>

          <section className="legalPage__section">
            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those
              websites.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated “Last updated” date.
            </p>
          </section>

          <section className="legalPage__section">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we
              handle data, you can contact us at:
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
              <p>📍 Location: Pakistan</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;

import React from "react";
import { FaDiscord, FaXTwitter, FaCircle, FaReddit } from "react-icons/fa6";
import logoDark from "../../../assets/images/logo_agu.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-6">
            <div className="d-flex align-items-center mb-3">
              <div className="logo">
                <Link to="/">
                  <img
                    src={logoDark}
                    alt="logo-dark"
                    style={{ width: `180px` }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-9">
              <p style={{ fontSize: `12px`, color: `#aaa` }}>
                Welcome to our trading site! We offer the best, most affordable
                products and services around. Shop now and start finding great
                deals!
              </p>
            </div>
            <div className="d-flex mt-3">
              <a
                href="https://discord.com"
                className="text-white"
                style={{ marginRight: `0.75rem` }}
              >
                <FaDiscord size={18} />
              </a>
              <a
                href="https://twitter.com"
                className="text-white mr-3"
                style={{ marginRight: `0.75rem` }}
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://example.com"
                className="text-white mr-3"
                style={{ marginRight: `0.75rem` }}
              >
                <FaCircle size={18} />
              </a>
              <a
                href="https://reddit.com"
                className="text-white"
                style={{ marginRight: `0.75rem` }}
              >
                <FaReddit size={18} />
              </a>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <b>Quick links</b>
            <ul
              className="list-unstyled mt-3"
              style={{ fontSize: `14px`, color: `#aaa` }}
            >
              <li className="mb-2">
                <a href="/about-us" className="text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/teams" className="text-white">
                  Teams
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-white">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/features" className="text-white">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-2">
            <b>Support</b>
            <ul
              className="list-unstyled mt-3"
              style={{ fontSize: `14px`, color: `#aaa` }}
            >
              <li className="mb-2">
                <a href="/terms" className="text-white">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="/faqs" className="text-white">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="/support" className="text-white">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-2">
            <b>Company</b>
            <ul
              className="list-unstyled mt-3"
              style={{ fontSize: `14px`, color: `#aaa` }}
            >
              <li className="mb-2">
                <a href="/careers" className="text-white">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="/updates" className="text-white">
                  Updates
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">
            © {currentYear} Spectre Finance. Pioneering Tomorrow's Crypto Prop
            Trading.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

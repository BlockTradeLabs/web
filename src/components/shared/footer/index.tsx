import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div style={{ margin: `100px 0px 40px` }}>
          <div>
            <p>
              Your trust is our commitment. While Spectre offers unparalleled
              opportunities, remember that all trading involves inherent risks.
              Make decisions wisely.
              <a href="#">
                <h6>Read More</h6>
              </a>
            </p>
          </div>
          <div>
            <p>
              © {currentYear} Spectre Finance. Pioneering Tomorrow's Crypto Prop
              Trading.
              <a href="#">
                <b>Privacy Policy | Terms of Use</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

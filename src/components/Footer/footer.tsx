import React, { useContext } from "react";
import { CountryContext } from "../../CountryContext"; 
import "./Footer.css";

const Footer: React.FC = () => {
  const { country } = useContext(CountryContext); // ✅ correct key
  const isCanada = country === "CAN";

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section socials">
          <h3>SOCIALS</h3>
          <ul>
            <li>› <a href="https://www.instagram.com/subprimeplatforms" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li>› <a href="https://x.com/Subprimefintech" target="_blank" rel="noopener noreferrer">X</a></li>
            <li>› <a href="https://www.linkedin.com/company/subprime-financial-tehnology-ltd/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>CONTACT</h3>
          <ul>
            {isCanada ? (
              <>
                <li>› support@subprimeplatforms.com</li>
                <li>› 1-(866)-297-4364</li>
                <li>› 131 Byron Street North, Whitby</li>
              </>
            ) : (
              <>
                <li>› support@subprimeplatforms.com</li>
                <li>› 1-(866)-297-4364</li>
                <li>› 131 Byron Street North, Whitby</li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        {isCanada ? (
          <>
            © 2025 Subprime Financial Technology Ltd, All Right Reserved.<br></br>
            Subprime Financial Technology Ltd, DeepIDV, 2You, LawCraft, Lendy, Blitz and Lendwire P2P <br></br>
            are registered trademarks of Subprime Platforms Inc. Terms and conditions, features, support,<br></br>
            pricing, and service options subject to change without notice.
          </>
        ) : (
          <>
            © 2025 Subprime Platforms, Inc. All Rights Reserved.<br />
            Subprime Financial Technology Ltd, DeepIDV, 2You and LawCraft are registered trademarks of Subprime Platforms Inc. <br />
            Terms and conditions, features, support, pricing, and service options subject to change without notice.
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;

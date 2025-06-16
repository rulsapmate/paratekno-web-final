import React from "react";
import logoParatekno from "../../assets/img/logo_paratekno.png";

const FooterLogo = () => {
  return (
    <div className="footer-col">
      <div className="footer-logo">
        <a href="#" className="footer-logo-link">
          <img src={logoParatekno} alt="logo_paratekno" />
          <p>
            Para<span>Tekno.</span>
          </p>
        </a>
      </div>
      <p className="footer-logo-desc">
        Paratekno (PT. Paramitha Adikarya Teknologi) is a company engaged in
        Information Technology in West Jakarta
      </p>
      <h3>Follow Us</h3>
      <ul className="footer-socials">
        <li>
          <a href="#">
            <i className="ri-facebook-fill"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="ri-twitter-x-line"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="ri-youtube-fill"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLogo;

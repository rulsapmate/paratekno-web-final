import React, { useState, useEffect } from "react";
import logoParatekno from "../../assets/img/logo_paratekno.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    company: false,
    subitem: false,
  });

  // Detect scroll to add nav-scroll-active
  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <header
      className={`header animate__animated animate__fadeIn ${
        scrollActive ? "nav-scroll-active" : ""
      }`}
    >
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <img src={logoParatekno} alt="logo_paratekno" />
            <p>
              Para<span>Tekno.</span>
            </p>
          </a>

          <div
            className={`nav__toggle ${menuOpen ? "show-icon" : ""}`}
            id="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="ri-menu-line nav__burger"></i>
            <i className="ri-close-line nav__close"></i>
          </div>
        </div>

        <div
          className={`nav__menu ${menuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <Link to="/">
                <a href="#" className="nav__link">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <a href="#" className="nav__link">
                About
              </a>
            </li>

            {/* Services */}
            <li className="dropdown__item">
              <div
                className="nav__link"
                onClick={() => toggleDropdown("services")}
              >
                Services{" "}
                <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <ul
                className={`dropdown__menu ${
                  dropdownOpen.services ? "show-dropdown" : ""
                }`}
              >
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-cloud-line"></i> Huawei Cloud
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-palette-line"></i> Web Design & Development
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-apps-line"></i> Application Development
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-star-smile-line"></i> 2D Animation & E-Card
                    Greetings
                  </a>
                </li>

                {/* Sub Dropdown */}
                <li className="dropdown__subitem">
                  <div
                    className="dropdown__link"
                    onClick={() => toggleDropdown("subitem")}
                  >
                    <i className="ri-customer-service-line"></i> Managed
                    Services{" "}
                    <i className="ri-arrow-down-s-line dropdown__add"></i>
                  </div>
                  <ul
                    className={`dropdown__submenu ${
                      dropdownOpen.subitem ? "show-dropdown" : ""
                    }`}
                  >
                    <li>
                      <a href="#" className="dropdown__sublink">
                        <i className="ri-lock-line"></i> Cyber Security
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown__sublink">
                        <i className="ri-tv-2-line"></i> O&M Service
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Company */}
            <li className="dropdown__item">
              <div
                className="nav__link"
                onClick={() => toggleDropdown("company")}
              >
                Company <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
              <ul
                className={`dropdown__menu ${
                  dropdownOpen.company ? "show-dropdown" : ""
                }`}
              >
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-community-line"></i> About Paratekno
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-focus-3-line"></i> Vision & Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-clipboard-line"></i> Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <i className="ri-shield-user-line"></i> Privacy & Policy
                  </a>
                </li>
                <li>
                  <Link to="/news">
                    <a className="dropdown__link">
                      <i className="ri-article-line"></i> News
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="nav-extras">
          <div className="nav-extra-left">
            <button className="btn contact">Contact Us</button>
            <button className="btn trial">Free Trial</button>
          </div>
          <span>|</span>
          <div className="nav-extra-right">
            <div className="lang">
              <i className="bx bx-globe"></i>
              EN
            </div>
            <div className="search-container">
              <form
                action=""
                className={`search ${searchOpen ? "show-search" : ""}`}
                id="search-bar"
              >
                <input
                  type="search"
                  placeholder="Type something..."
                  className="search-input"
                />
                <div
                  className="search-btn"
                  id="search-btn"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <i className="ri-search-2-line search_icon"></i>
                  <i className="ri-close-line search_close"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

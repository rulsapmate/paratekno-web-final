import { useState, useEffect } from "react";
import hcloudImg from "../../assets/img/huaweicloud.jpg";
import webdesignImg from "../../assets/img/webdesign.png";
import appdevImg from "../../assets/img/appdev.jpg";
import animationImg from "../../assets/img/animationCard.jpg";
import mserviceImg from "../../assets/img/mservice.jpg";

const tabContents = {
  hcloud: {
    title: "Huawei Cloud",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates rem deleniti soluta molestiae!",
    img: hcloudImg,
  },
  webdesign: {
    title: "Web Design",
    desc: "Web design service description goes here.",
    img: webdesignImg,
  },
  appdev: {
    title: "App Development",
    desc: "App development service description goes here.",
    img: appdevImg,
  },
  animationcard: {
    title: "2D Animation",
    desc: "Animation description goes here.",
    img: animationImg,
  },
  mservice: {
    title: "Managed Service",
    desc: "Managed service description goes here.",
    img: mserviceImg,
  },
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("hcloud");
  const [bgImage, setBgImage] = useState(tabContents["hcloud"].img);
  const [bgOpacity, setBgOpacity] = useState(1);

  // Transisi background ketika tab berubah
  useEffect(() => {
    setBgOpacity(0);
    const timer = setTimeout(() => {
      setBgImage(tabContents[activeTab].img);
      setBgOpacity(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Introducing Our Services</h1>
        <h3>The most powerful tools that organize everything you need</h3>
      </div>

      <div className="services-navbar">
        <ul className="service-nav-list">
          {Object.keys(tabContents).map((tabKey) => (
            <li key={tabKey}>
              <a
                href="#"
                className={`service-nav-link ${
                  activeTab === tabKey ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tabKey);
                }}
              >
                {tabContents[tabKey].title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="service-content-container">
        <div className="border-black-container">
          <div
            className="bg-image"
            style={{
              backgroundImage: `url(${bgImage})`,
              opacity: bgOpacity,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></div>

          <div className="bottom-gradient-overlay"></div>

          <div className="tab-content active">
            <div className="tab-desc-content">
              <h1 className="text-4xl font-bold mb-3">
                {tabContents[activeTab].title}
              </h1>
              <p>{tabContents[activeTab].desc}</p>
            </div>
            <div className="tab-button-wrapper">
              <button type="button" className="content-action">
                Read more <i className="ri-arrow-right-double-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

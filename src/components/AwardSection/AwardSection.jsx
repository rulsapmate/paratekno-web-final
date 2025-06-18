import React from "react";
import huawei from "../../assets/img/huawei.png";

const AwardSection = () => {
  return (
    <div className="award-container">
      <div className="award-content-header">
        <div className="award-header-logo">
          Powered by
          <div className="logo-huawei">
            <img src={huawei} alt="Huawei Logo" />
            HUAWEI CLOUD
          </div>
        </div>
      </div>

      <div className="award-title">
        <h1>Best Partner Award</h1>
      </div>

      <div className="award-content-main-1">
        <span className="trophy">🏆</span>
        <h3>Huawei Cloud Asia Pacific - Indonesia Region 2021</h3>
        <p>
          In the midst of rapid digital transformation, Paratekno stands as a
          trusted strategic partner. This award is more than recognition—it's a
          testament to our close collaboration, service consistency, and
          unwavering dedication in delivering impactful Huawei Cloud-based
          solutions across industries in Indonesia.
        </p>
      </div>

      <div className="award-content-main-2">
        <span className="trophy">🏆</span>
        <h3>Huawei Cloud Indonesia - 2022</h3>
        <p>
          In 2022, Paratekno continued its legacy of excellence by being awarded
          for our outstanding contribution in expanding cloud technology
          adoption across key industries in Indonesia. Our role as a cloud
          solution enabler went beyond consultation—we empowered businesses to
          evolve with future-ready infrastructure, responsive assistance, and
          industry-aligned strategies.
        </p>
      </div>
    </div>
  );
};

export default AwardSection;

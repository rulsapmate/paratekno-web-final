import AwardSection from "../AwardSection/AwardSection";
import ServicesSection from "../ServiceSection/ServicesSection";
import BallEffects from "./BallEffects";
import MeteorEffects from "./MeteorEffects";

const MainSection1 = () => {
  return (
    <div className="main-section-1">
      <BallEffects />
      <MeteorEffects />
      <div className="smoke-top"></div>
      <div className="container">
        <AwardSection />
        <ServicesSection />
      </div>
    </div>
  );
};

export default MainSection1;

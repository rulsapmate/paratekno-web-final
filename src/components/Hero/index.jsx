import AboutSection from "./About";
import Swiper from "./Swiper";
const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay"></div>

      <div className="hero-box">
        <div className="title animate__animated animate__bounceInUp animate__delay-1s">
          <div className="text-start">
            Innovative With <span className="para">Para</span>
            <span className="tekno">tekno</span>
          </div>

          <h1>
            Transforming <span className="sp-1">Ideas</span> <br />
            into <span className="sp-2">Digital Realities</span>
          </h1>

          <p>
            Bring your visions to life with our innovative cloud solutions and{" "}
            <br />
            turning concepts into impactful digital experiences.
          </p>

          <div className="title-action">
            <button className="btn-about-us">About Us</button>
            <button className="btn-explore">Explore</button>
          </div>
        </div>
        <Swiper />
        <AboutSection />
      </div>
      <div className="smoke-bottom"></div>
    </div>
  );
};

export default Hero;

import React, { useEffect, useRef } from "react";

const QuoteSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="main-section-2-quote" ref={sectionRef}>
      <div className="ball-sec ball-14">
        <div className="blur-layer"></div>
        <div className="color-layer"></div>
      </div>
      <div className="ball-sec ball-15">
        <div className="blur-layer"></div>
        <div className="color-layer"></div>
      </div>
      <div className="ball-sec ball-16">
        <div className="blur-layer"></div>
        <div className="color-layer"></div>
      </div>
      <div className="ball-sec ball-17">
        <div className="blur-layer"></div>
        <div className="color-layer"></div>
      </div>
      <div className="ball-sec ball-18">
        <div className="blur-layer"></div>
        <div className="color-layer"></div>
      </div>

      <h1>
        <span className="para">Para</span>
        <span className="tekno">tekno</span>
        <span>
          is
          <br />
          not just a tool,
          <br />
          it's your technology
          <br />
          partner
        </span>
      </h1>
    </div>
  );
};

export default QuoteSection;

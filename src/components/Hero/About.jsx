const InfoBox = ({ title, count }) => (
  <div className="box">
    <h3>{title}</h3>
    <h1>{count}</h1>
    <button>Details</button>
  </div>
);

const AboutSection = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>Semua Tentang Kami</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem eaque
          tenetur id provident odit nesciunt aut quidem. Quos vero, odit
          suscipit aut, animi sequi possimus accusamus autem ipsa voluptas
          perspiciatis!
        </p>

        <div className="info">
          <InfoBox title="Website Projects" count="+200" />
          <InfoBox title="Mobile Projects" count="+120" />
          <InfoBox title="IOT Projects" count="+40" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

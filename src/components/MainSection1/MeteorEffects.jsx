const MeteorEffects = () => {
  return (
    <>
      {[...Array(16)].map((_, i) => (
        <div key={i} className={`meteor meteor-${i + 1}`}></div>
      ))}
    </>
  );
};

export default MeteorEffects;

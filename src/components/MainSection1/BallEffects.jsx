const BallEffects = () => {
  return (
    <>
      {[...Array(13)].map((_, i) => (
        <div key={i} className={`ball ball-${i + 1}`}></div>
      ))}
    </>
  );
};

export default BallEffects;

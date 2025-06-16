const SubscribeForm = () => {
  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <h2>
          Subscribe to Paratekno
          <br />
          News and Updates.
        </h2>
        <form action="/">
          <input type="text" placeholder="Enter your email..." />
          <button className="btn" type="submit">
            Subscribe
            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;

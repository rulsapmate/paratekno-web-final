const NewsCard = ({ title, description, imgSrc, date, comments }) => {
  return (
    <li>
      <div className="blog-card">
        <figure className="banner">
          <a href="#">
            <img
              src={imgSrc}
              width="750"
              height="350"
              loading="lazy"
              alt={title}
              className="img-cover"
            />
          </a>
        </figure>

        <div className="content">
          <div className="head-content-blog">
            <h3 className="h3 title">
              <a href="#">{title}</a>
            </h3>
            <p className="text">{description}</p>
          </div>
          <div className="meta">
            <div className="publish-date">
              <ion-icon name="time-outline"></ion-icon>
              <time dateTime={date}>{date}</time>
            </div>
            <button className="comment" aria-label="Comment">
              <ion-icon name="chatbubble-outline"></ion-icon>
              <data value={comments}>{comments}</data>
            </button>
            <button className="share" aria-label="Share">
              <ion-icon name="share-social-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NewsCard;

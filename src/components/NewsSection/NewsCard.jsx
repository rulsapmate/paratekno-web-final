const NewsCard = ({ article }) => {
  if (!article) {
    return null;
  }

  const formatPublishedDate = (dateString) => {
    if (!dateString) return "";
    try {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("id-ID", options);
    } catch (e) {
      console.error("Failed to parse date:", dateString, e);
      return dateString;
    }
  };

  return (
    <li>
      <div className="blog-card">
        <figure className="banner">
          <a href={`/news/${article.id}`}>
            <img
              src={
                article.imageUrl ||
                "https://via.placeholder.com/750x350?text=No+Image"
              }
              width="750"
              height="350"
              loading="lazy"
              alt={article.title}
              className="img-cover"
            />
          </a>
        </figure>

        <div className="content">
          <div className="head-content-blog">
            <h3 className="h3 title">
              <a href={`/news/${article.id}`}>{article.title}</a>{" "}
            </h3>
            <p className="text">{article.excerpt}</p>{" "}
          </div>
          <div className="meta">
            <div className="publish-date">
              <ion-icon name="time-outline"></ion-icon>
              <time dateTime={article.published_at}>
                {formatPublishedDate(article.published_at)}
              </time>{" "}
            </div>

            <div className="author-category">
              {" "}
              <span>Oleh: {article.author}</span>
              <span className="mx-1">•</span>
              <span>Kategori: {article.category}</span>
            </div>
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

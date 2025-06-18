import { Link } from "react-router-dom";

const NewsTop = () => {
  return (
    <div className="news-top">
      <h6>
        <span className="line"></span>News & Article
      </h6>

      <button className="btn">
        <Link to="/news">View more</Link>
      </button>
    </div>
  );
};

export default NewsTop;

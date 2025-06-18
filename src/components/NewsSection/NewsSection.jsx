import NewsTop from "./NewsTop";
import NewsHeader from "./NewsHeader";
import NewsList from "./NewsList";

const NewsSection = () => {
  return (
    <div className="news-section">
      <NewsTop />
      <NewsHeader />
      <NewsList />
    </div>
  );
};

export default NewsSection;

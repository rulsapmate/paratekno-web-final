import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/news");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNews(data);
      } catch (e) {
        console.error("Failed to fetch news:", e);
        setError("Gagal memuat berita. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className="text-center py-8">Memuat berita...</p>;
  }

  if (error) {
    return <p className="text-center py-8 text-red-500">{error}</p>;
  }

  if (news.length === 0) {
    return (
      <p className="text-center py-8 text-gray-600">
        Belum ada berita yang tersedia.
      </p>
    );
  }

  return (
    <div className="news-container-main">
      <ul className="blog-list">
        {news.map((articleItem) => (
          <NewsCard key={articleItem.id} article={articleItem} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;

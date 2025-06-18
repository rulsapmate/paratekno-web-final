// src/hooks/useNews.js
import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [featuredNews, setFeaturedNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/news`);
        const allNews = response.data;

        setNews(allNews);

        const foundFeatured = allNews.find((article) => article.featured);
        setFeaturedNews(foundFeatured);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Gagal memuat berita. Silakan coba lagi nanti.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, featuredNews, loading, error };
};

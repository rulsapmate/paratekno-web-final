// src/pages/NewsPage.jsx
import Navbar from "../components/Header";
import { useNews } from "../hooks/useNews";

export default function NewsPage() {
  const { news, featuredNews, loading, error } = useNews();

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans text-gray-800">
        <p className="text-xl">Memuat berita...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 font-sans text-red-800">
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  const noNewsAvailable = news.length === 0 && !featuredNews;

  return (
    <div className="main-section-2-news-edition min-h-screen bg-gray-50 font-sans text-gray-800">
      <Navbar />
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-5xl md:text-6xl font-extrabold mt-8 mb-4 animate-fadeInUp">
            Berita & Artikel Terbaru Paratekno
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 animate-fadeInUp delay-200">
            Tetap terinformasi dengan inovasi, panduan, dan berita terkini dari
            dunia teknologi.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate__animated animate__fadeIn animate__delay-1s">
        {noNewsAvailable ? (
          <p className="text-5xl text-gray-600 text-center">
            Belum ada berita ☹
          </p>
        ) : (
          <>
            {/* Featured Article Section */}
            {featuredNews && (
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-2">
                  Berita Utama
                </h2>
                <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.01]">
                  <div className="md:w-1/2">
                    <img
                      src={
                        featuredNews.imageUrl ||
                        "https://via.placeholder.com/750x350?text=No+Image"
                      }
                      alt={featuredNews.title}
                      className="w-full h-72 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <span className="text-sm text-blue-600 font-semibold mb-2 uppercase">
                      {featuredNews.category}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredNews.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-6 line-clamp-4">
                      {featuredNews.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>
                        {formatPublishedDate(featuredNews.published_at)}
                      </span>
                      <span className="mx-2">•</span>
                      <span>Oleh: {featuredNews.author}</span>
                    </div>
                    {featuredNews.id && (
                      <a
                        href={`/news/${featuredNews.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-200"
                      >
                        Baca Selengkapnya
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          ></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Other Articles Section */}
            <section className="animate__animated animate__fadeIn animate__delay-1s">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-2">
                Artikel Lainnya
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((article) =>
                  article && article.id ? (
                    <div
                      key={article.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col
                             transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
                    >
                      <img
                        className="w-full h-56 object-cover"
                        src={
                          article.imageUrl ||
                          "https://via.placeholder.com/600x350?text=No+Image"
                        }
                        alt={article.title}
                      />
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="text-xs text-blue-500 font-semibold mb-2 uppercase">
                          {article.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-base mb-4 line-clamp-3 flex-grow">
                          {article.excerpt}
                        </p>
                        <div className="flex justify-between items-center text-gray-500 text-sm mt-auto">
                          <span>
                            {formatPublishedDate(article.published_at)}
                          </span>
                          <span>Oleh: {article.author}</span>
                        </div>
                        <a
                          href={`/news/${article.id}`}
                          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Baca Selengkapnya
                          <svg
                            className="ml-1 w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </section>

            {news.length > 0 && (
              <div className="text-center mt-16">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg">
                  Muat Lebih Banyak Berita
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

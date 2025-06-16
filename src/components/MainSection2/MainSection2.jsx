import BannerFooter from "../Footer/BannerFooter";
import NewsSection from "../NewsSection/NewsSection";
import QuoteSection from "../QuoteSection/QuoteSection";

const MainSection2 = () => {
  return (
    <div className="main-section-2 blog" id="blog">
      <div className="container">
        <NewsSection />
        <QuoteSection />
        <BannerFooter />
      </div>
    </div>
  );
};

export default MainSection2;

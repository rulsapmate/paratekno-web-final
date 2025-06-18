import Hero from "./components/Hero/index";
import "./index.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer/Footer";
import MainSection1 from "./components/MainSection1/MainSection1";
import MainSection2 from "./components/MainSection2/MainSection2";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MainSection1 />
      <MainSection2 />
      <Footer />
    </>
  );
}

export default App;

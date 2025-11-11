import AboutPage from "./components/About";
import ExperiencePage from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesPage from "./components/Services";

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutPage/>
    <ExperiencePage/>
    <ServicesPage/>
    <Footer/>
    </>
  );
}

export default App;

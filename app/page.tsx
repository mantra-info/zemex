import Footer from "../components/Footer";
import AboutSection from "./components/LandingPage/AboutSection";
import BrandsSection from "./components/LandingPage/BrandSection";
import Hero from "./components/LandingPage/Hero";
import NewsEventsSection from "./components/LandingPage/NewsEventSection";
import SelfCareCTA from "./components/LandingPage/SelfShare";

export default function Home() {
  return (
   <>
   <Hero/>
   <AboutSection/>
   <BrandsSection/>
   <NewsEventsSection/>
   <SelfCareCTA/>
   <Footer/>
   </>
  );
}

import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import Timeline from "../components/Timeline";
import PuppyGallery from "../components/PuppyGallery";
import AboutUs from "../components/AboutUs";
import BreedsCarousel from "../components/BreedsCarousel";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <ServicesSection />
      <AboutUs />
      <Timeline />
      <PuppyGallery />
      <BreedsCarousel />
    </div>
  );
};

export default Home;

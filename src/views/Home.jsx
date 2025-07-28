import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="relative">
      {/* El Navbar ya viene desde Layout */}
      <Hero />
      <ServicesSection />
      <Timeline />
      <Gallery />
    </div>
  );
};

export default Home;

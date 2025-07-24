// src/views/Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <ServicesSection />
    </div>
  );
};

export default Home;
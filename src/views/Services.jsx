// src/views/Services.jsx
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";

const Services = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-28">
        <ServicesSection />
      </div>
    </div>
  );
};

export default Services;

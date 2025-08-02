import { FaTiktok, FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png"; // ajusta el path según tu proyecto

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={logo}
            alt="King Dog Logo"
            className="h-20 w-auto object-contain"
            draggable="false"
          />
        </div>

        {/* Contacto */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 mb-2">
            <FaPhoneAlt /> 3146582927
          </p>
          <p className="flex items-center justify-center gap-2 mb-2">
            <FaEnvelope /> Cachorrosbestdog.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt /> Oriente Medellín
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1CSyFCzPvG/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#66B4FF] p-3 rounded-full hover:bg-[#4da6ff] transition"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://www.instagram.com/cachorrosbestdog/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#66B4FF] p-3 rounded-full hover:bg-[#4da6ff] transition"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

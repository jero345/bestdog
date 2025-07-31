import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/Loguini.png"; // tu logo

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Hogar", path: "/" },
    { label: "Servicios", path: "/services" },
    { label: "Preguntas frecuentes", path: "/frequentlyaskedquestions" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || location.pathname !== "/"
          ? "bg-[#66B4FF] shadow-md"
          : "bg-[#66B4FF]"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="BestDogs Logo"
            className="max-h-14 w-auto object-contain drop-shadow-xl scale-125"
            draggable="false"
          />
        </div>

        {/* Links */}
        <ul className="flex gap-10 text-white font-bold text-lg mx-auto">
          {links.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`transition-colors ${
                  location.pathname === item.path
                    ? "text-[#363636]"
                    : "hover:text-[#363636]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Iconos redes sociales */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/people/Best-Dog/100063841380143/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaFacebookF className="text-[#66B4FF] text-lg" />
          </a>
          <a
            href="https://www.instagram.com/cachorrosbestdog/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaInstagram className="text-[#66B4FF] text-lg" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

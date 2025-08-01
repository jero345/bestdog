import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/brr.png"; // tu logo

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload(); // recarga si ya estás en Hogar
    } else {
      navigate("/"); // lleva al inicio si estás en otra ruta
    }
  };

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
        
        {/* Logo con acción personalizada */}
        <button
          onClick={handleLogoClick}
          className="flex items-center bg-transparent border-none cursor-pointer"
        >
          <img
            src={logo}
            alt="BestDogs Logo"
            className="max-h-14 w-auto object-contain drop-shadow-xl scale-125 cursor-pointer"
            draggable="false"
          />
        </button>

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
      </div>
    </nav>
  );
};

export default Navbar;

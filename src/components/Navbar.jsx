import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logonegroni.png"; // Asegúrate de tener tu logo en la carpeta assets

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
    { label: "Contacto", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || location.pathname !== "/"
          ? "bg-[#66B4FF] shadow-md"
          : "bg-[#66B4FF] "
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="BestDogs Logo"
            className="h-12 w-auto object-contain"
            draggable="false"
          />
        </div>

        {/* Links centrados */}
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

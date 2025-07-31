// src/components/MenuHamburguer.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/Loguini.png"; // tu logo

const MenuHamburguer = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Hogar", path: "/" },
    { label: "Servicios", path: "/services" },
    { label: "Preguntas frecuentes", path: "/frequentlyaskedquestions" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#66B4FF] shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="BestDogs Logo"
            className="h-12 w-auto object-contain drop-shadow-md"
            draggable="false"
          />
        </div>

        {/* Botón hamburguesa solo en móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-3xl focus:outline-none"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menú normal (pantallas grandes) */}
        <ul className="hidden md:flex gap-8 text-white font-bold text-lg">
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

        {/* Iconos redes sociales (pantallas grandes) */}
        <div className="hidden md:flex gap-4">
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"
            className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
            <FaTiktok className="text-[#66B4FF] text-lg" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
            className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
            <FaFacebookF className="text-[#66B4FF] text-lg" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
            className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
            <FaInstagram className="text-[#66B4FF] text-lg" />
          </a>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {open && (
        <div className="md:hidden bg-[#66B4FF] text-white px-6 py-6 space-y-6 shadow-lg">
          <ul className="flex flex-col gap-4 text-lg font-bold">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block transition-colors ${
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
          <div className="flex gap-4 mt-6">
           
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
              className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
              <FaFacebookF className="text-[#66B4FF] text-lg" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
              className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
              <FaInstagram className="text-[#66B4FF] text-lg" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MenuHamburguer;

import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Asegúrate de que este nombre y ruta sean correctos

const Navbar = () => {
  const location = useLocation();

  const links = [
    { label: "Home", path: "/" },
    { label: "Pages", path: "/pages" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "News", path: "/news" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-6 bg-white shadow z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="BestDog Logo" className="h-10 w-auto object-contain" />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-10 text-black font-extrabold text-lg">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className={`transition-colors ${
                location.pathname === item.path
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Search Icon */}
      <div className="w-10 h-10 ml-6 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition">
        <span className="text-white text-xl">🔍</span>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#5787b2] shadow-md">
      <div className="container mx-auto px-6 md:px-10 flex items-center justify-between py-4">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="BestDogs Logo"
            className="h-12 w-auto object-contain"
            draggable="false"
          />
          <span className="text-white text-2xl font-extrabold tracking-wide">
            BestDogs
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-10 text-white font-bold text-lg">
          {links.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`transition-colors ${
                  location.pathname === item.path
                    ? "text-[#fab037]"
                    : "hover:text-[#fab037]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Icon */}
        <div className="hidden md:flex w-10 h-10 rounded-full bg-[#fab037] items-center justify-center cursor-pointer hover:bg-[#e89e1e] transition">
          <span className="text-white text-xl">🔍</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

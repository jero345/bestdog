import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar visible en todas las páginas */}
      <Navbar />

      {/* Contenido principal (con espacio para el navbar fijo) */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer en todas las páginas */}
      <Footer />
    </div>
  );
};

export default Layout;

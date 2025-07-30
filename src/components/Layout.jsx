import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar fijo */}
      <Navbar />

      {/* Banner debajo del Navbar */}
      <Banner />

      {/* Contenido principal */}
      <main className="flex-grow pt-15"> 
        {/* Cambié de pt-20 a pt-10 */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

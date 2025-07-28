import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const services = [
  {
    title: "Aseo",
    desc: "Había frotamiento de piernas en todo, por lo tanto, la actitud era tomar una siesta todo el día para obtener el mejor servicio.",
    img: "https://i.ibb.co/JpN78m6/grooming.jpg",
  },
  {
    title: "Formación",
    desc: "Había frotamiento de piernas en todo, por lo tanto, la actitud era tomar una siesta todo el día para obtener el mejor servicio.",
    img: "https://i.ibb.co/Zh0vPvD/training.jpg",
  },
  {
    title: "Limpieza",
    desc: "Había frotamiento de piernas en todo, por lo tanto, la actitud era tomar una siesta todo el día para obtener el mejor servicio.",
    img: "https://i.ibb.co/N6WLx3n/cleaning.jpg",
  },
  {
    title: "Cría",
    desc: "Había frotamiento de piernas en todo, por lo tanto, la actitud era tomar una siesta todo el día para obtener el mejor servicio.",
    img: "https://i.ibb.co/dKq6p9T/breeding.jpg",
  },
];

const Services = () => {
  const location = useLocation();

  return (
    <div className="bg-[#5787b2] min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-10 py-6 bg-[#5787b2] flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="BestDog Logo"
            className="h-10 w-auto object-contain"
            draggable="false"
          />
        </div>

        <ul className="flex gap-10 text-white font-bold text-lg">
          {[
            { label: "Hogar", path: "/" },
            { label: "Servicios", path: "/services" },
            { label: "Contacto", path: "/contact" },
          ].map((item) => (
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

        <div className="w-10 h-10 rounded-full bg-[#fab037] flex items-center justify-center cursor-pointer hover:bg-[#e89e1e] transition">
          <span className="text-white text-xl">🔍</span>
        </div>
      </nav>

      {/* CONTENIDO */}
      <section className="pt-[96px] pb-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Lo que hacemos<span className="text-[#fab037]">.</span>
        </h2>
        <p className="text-white text-lg max-w-3xl mx-auto mt-4">
          Ayudamos a salvar vidas de sus queridas mascotas. Nuestros entrenadores de mascotas expertos siempre están aquí para ayudar a su mascota necesitada.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="text-center p-6 border rounded-xl shadow-md transition hover:shadow-xl hover:border-[#fab037] hover:-translate-y-1 duration-300 bg-white"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 group">
                <img
                  src={s.img}
                  alt={s.title}
                  className="object-cover w-full h-full rounded-full group-hover:opacity-60"
                />
                <div className="absolute inset-0 rounded-full bg-[#fab037] opacity-0 group-hover:opacity-70 flex items-center justify-center text-white text-4xl font-bold transition duration-300">
                  +
                </div>
              </div>
              <h3 className="text-2xl font-extrabold mb-2 text-[#363636]">
                {s.title}
              </h3>
              <p className="text-[#9A9A9A] text-sm mb-2">{s.desc}</p>
              <span className="text-[#fab037] font-semibold text-sm">leer más</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

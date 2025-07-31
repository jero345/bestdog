import { FaWhatsapp } from "react-icons/fa";
import "../index.css"; // 👈 Asegúrate de importar los estilos globales si defines la animación ahí

const FloatingButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=573146582927&text=¡Hola!%20Estoy%20interesado%20en%20un%20cachorro%20🐶"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp flex items-center justify-center"
    >
      <FaWhatsapp className="text-white text-4xl relative z-10" />
    </a>
  );
};

export default FloatingButton;

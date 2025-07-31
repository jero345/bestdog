import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=573146582927&text=¡Hola!%20Estoy%20interesado%20en%20un%20cachorro%20🐶"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-400/80 p-6 rounded-full shadow-lg z-50 
                 flex items-center justify-center animate-pulse hover:scale-110 transition-transform"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
  );
};

export default FloatingButton;

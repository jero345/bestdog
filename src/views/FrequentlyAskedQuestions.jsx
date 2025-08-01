import { useState } from "react";

const faqs = [
  
  {
    question: "¿Qué razas de cachorros están disponibles en BestDog?",
    answer:
      "En BestDog, contamos con una amplia selección de razas, desde pequeñas como Pomerania, Yorkshire Terrier y Shih Tzu, hasta medianas y grandes como Golden Retriever, Bulldog Francés, Labrador y Husky Siberiano.",
  },
  {
    question: "¿Los cachorros tienen certificado de pureza de raza?",
    answer:
      "Sí, todos los cachorros que ofrecemos cuentan con una garantía de pureza de raza de por vida, respaldada por nuestro criadero. Esto asegura que provienen de linajes auténticos, posicionándonos como líderes en la venta de perros en Colombia.",
  },
  {
    question: "¿Qué pasa si mi cachorro se enferma después de la compra?",
    answer:
      "Ofrecemos una garantía de salud inicial que cubre cualquier enfermedad preexistente al momento de la entrega.",
  },
  {
    question: "¿Qué incluye el certificado de salud?",
    answer:
      "Incluye un historial de vacunación y desparasitación, confirmando que el cachorro está en perfectas condiciones al momento de la entrega.",
  },
  {
    question: "¿Hacen envíos a otras ciudades?",
    answer:
      "¡Claro que sí! Realizamos envíos seguros a todas las principales ciudades de Colombia, incluyendo: Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, Cartagena, Pereira, Manizales, Ibagué y Cúcuta. Garantizamos que el cachorro llegará en óptimas condiciones a su nuevo hogar.",
  },
   {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos transferencias bancarias, pagos en efectivo y pagos contra entrega. Contáctanos para coordinar el método más cómodo para ti.",
  },
     {
    question: "¿Cuánto tiempo tarda la entrega del cachorro?",
    answer:
      "La entrega toma entre 1 y 2 días hábiles, dependiendo de la ciudad de destino.",
  },
];

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-[#66B4FF] mb-10">
        Preguntas Frecuentes
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#66B4FF] rounded-lg overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-white bg-[#66B4FF] hover:bg-[#66B4FF] transition"
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
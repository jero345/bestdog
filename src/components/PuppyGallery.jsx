// src/components/PuppyGallery.jsx
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

// 🐶 Importar imágenes de portada
import pomerania from "../assets/Galeria/pomerania.png";
import bernes from "../assets/Galeria/bernes.png";
import bulldogIngles from "../assets/Galeria/bulldog-ingles.png";
import teckel from "../assets/Galeria/teckel.png";
import jackRussel from "../assets/Galeria/jack-rusel.png";
import bulldogFrances from "../assets/Galeria/bulldog-frances.png";
import pinscher from "../assets/Galeria/pinscher.png";
import yorkshire from "../assets/Galeria/yorkshire.png";
import cocker from "../assets/Galeria/cocker.jpg";
import pastorGanadero from "../assets/Galeria/ganadero-australiano.png";
import borderCollie from "../assets/Galeria/border-collie.png";
import beagle from "../assets/Galeria/beagle.png";
import dalmata from "../assets/Galeria/dalmata.png";
import husky from "../assets/Galeria/husky.png";
import doberman from "../assets/Galeria/doberman.png";
import golden from "../assets/Galeria/golden.png";
import pastorBelga from "../assets/Galeria/pastor-belga.png";
import sanBernardo from "../assets/Galeria/san-bernardo.png";

// 🐾 Importar imágenes de fichas técnicas
import fichaPomerania from "../assets/fichas/Pomerania.png";
import fichaBernes from "../assets/fichas/Bernes de la Montaña.png";
import fichaBulldogIngles from "../assets/fichas/Bulldog Inglés.png";
import fichaTeckel from "../assets/fichas/Salchicha (Teckel ).png";
import fichaJackRussel from "../assets/fichas/Jack Russell.png";
import fichaBulldogFrances from "../assets/fichas/Bulldog Francés.png";
import fichaPinscher from "../assets/fichas/Pinscher.png";
import fichaYorkshire from "../assets/fichas/Yorkshire.png";
import fichaCocker from "../assets/fichas/Cocker Spaniel.png";
import fichaPastorGanadero from "../assets/fichas/Ganadero Australiano.png";
import fichaBorderCollie from "../assets/fichas/Border Collie.png";
import fichaBeagle from "../assets/fichas/Beagle.png";
import fichaDalmata from "../assets/fichas/Dálmata.png";
import fichaHusky from "../assets/fichas/Husky Siberiano.png";
import fichaDoberman from "../assets/fichas/Doberman.png";
import fichaGolden from "../assets/fichas/Golden Retriever.png";
import fichaPastorBelga from "../assets/fichas/Pastor Belga.png";
import fichaSanBernardo from "../assets/fichas/San Bernardo.png";

const categories = ["Raza Pequeña", "Raza Mediana", "Raza Grande"];

const puppies = [
  { id: 1, title: "Pomerania", category: "Raza Pequeña", image: pomerania, detailImage: fichaPomerania },
  { id: 2, title: "Bernés de la montaña", category: "Raza Grande", image: bernes, detailImage: fichaBernes },
  { id: 3, title: "Bulldog inglés", category: "Raza Mediana", image: bulldogIngles, detailImage: fichaBulldogIngles },
  { id: 4, title: "Teckel", category: "Raza Pequeña", image: teckel, detailImage: fichaTeckel },
  { id: 5, title: "Jack Russel", category: "Raza Pequeña", image: jackRussel, detailImage: fichaJackRussel },
  { id: 6, title: "Bulldog francés", category: "Raza Pequeña", image: bulldogFrances, detailImage: fichaBulldogFrances },
  { id: 7, title: "Pinscher", category: "Raza Pequeña", image: pinscher, detailImage: fichaPinscher },
  { id: 8, title: "Yorkshire", category: "Raza Pequeña", image: yorkshire, detailImage: fichaYorkshire },
  { id: 9, title: "Cocker Spaniel", category: "Raza Mediana", image: cocker, detailImage: fichaCocker },
  { id: 10, title: "Pastor Ganadero Australiano", category: "Raza Mediana", image: pastorGanadero, detailImage: fichaPastorGanadero },
  { id: 11, title: "Border Collie", category: "Raza Mediana", image: borderCollie, detailImage: fichaBorderCollie },
  { id: 12, title: "Beagle", category: "Raza Mediana", image: beagle, detailImage: fichaBeagle },
  { id: 13, title: "Dálmata", category: "Raza Mediana", image: dalmata, detailImage: fichaDalmata },
  { id: 14, title: "Husky Siberiano", category: "Raza Grande", image: husky, detailImage: fichaHusky },
  { id: 15, title: "Doberman", category: "Raza Grande", image: doberman, detailImage: fichaDoberman },
  { id: 16, title: "Golden Retriever", category: "Raza Grande", image: golden, detailImage: fichaGolden },
  { id: 17, title: "Pastor Belga Malinois", category: "Raza Grande", image: pastorBelga, detailImage: fichaPastorBelga },
  { id: 18, title: "San Bernardo", category: "Raza Grande", image: sanBernardo, detailImage: fichaSanBernardo },
];

const PuppyGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPuppy, setSelectedPuppy] = useState(null);

  const filteredPuppies =
    activeCategory === "All"
      ? puppies
      : puppies.filter((puppy) => puppy.category === activeCategory);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 font-semibold rounded-full transition ${
              activeCategory === cat
                ? "bg-[#363636] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-[#363636] hover:text-white"
            }`}
          >
            {cat === "All" ? "Todas" : cat}
          </button>
        ))}
      </div>

      {/* Galería */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPuppies.map((puppy) => (
          <div
            key={puppy.id}
            className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]"
          >
            <div
              className="w-full aspect-[3/4] cursor-pointer"
              onClick={() => setSelectedPuppy(puppy)} // Abrir modal desde la imagen
            >
              <img
                src={puppy.image}
                alt={puppy.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <div className="p-5 bg-white text-center">
              <h3 className="text-xl font-bold">{puppy.title}</h3>
              <p className="text-sm text-gray-500">{puppy.category}</p>
              <button
                onClick={() => setSelectedPuppy(puppy)} // Abrir modal desde el botón
                className="mt-3 px-4 py-2 bg-[#66B4FF] text-white rounded-full font-semibold hover:bg-[#363636] transition"
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPuppy && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedPuppy(null)} // cerrar si clic en overlay
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] p-6 overflow-hidden flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // evitar cerrar al hacer clic dentro del modal
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedPuppy(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold z-10"
            >
              ✖
            </button>

            {/* Imagen ficha técnica */}
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={selectedPuppy.detailImage}
                alt={`Ficha técnica de ${selectedPuppy.title}`}
                className="max-w-full max-h-[55vh] object-contain"
              />
            </div>

            {/* Info */}
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold text-[#363636]">{selectedPuppy.title}</h2>
              <span className="px-3 py-1 mt-2 inline-block bg-[#363636] text-white rounded-full text-sm">
                {selectedPuppy.category}
              </span>
            </div>

            {/* Volver */}
            <div className="mt-6">
              <button
                onClick={() => setSelectedPuppy(null)}
                className="flex items-center gap-2 text-[#363636] font-semibold hover:text-[#66B4FF] transition"
              >
                <FaArrowLeft /> Volver a la galería
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PuppyGallery;

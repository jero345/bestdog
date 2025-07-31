// src/components/PuppyGallery.jsx
import React, { useState } from "react";
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

const categories = ["Raza Pequeña", "Raza Mediana", "Raza Grande"];

const puppies = [
  { id: 1, title: "Pomerania", category: "Raza Pequeña", image: pomerania },
  { id: 2, title: "Bernés de la montaña", category: "Raza Grande", image: bernes },
  { id: 3, title: "Bulldog inglés", category: "Raza Mediana", image: bulldogIngles },
  { id: 4, title: "Teckel", category: "Raza Pequeña", image: teckel },
  { id: 5, title: "Jack Russel", category: "Raza Pequeña", image: jackRussel },
  { id: 6, title: "Bulldog francés", category: "Raza Pequeña", image: bulldogFrances },
  { id: 7, title: "Pinscher", category: "Raza Pequeña", image: pinscher },
  { id: 8, title: "Yorkshire", category: "Raza Pequeña", image: yorkshire },
  { id: 9, title: "Cocker Spaniel", category: "Raza Mediana", image: cocker },
  { id: 10, title: "Pastor Ganadero Australiano", category: "Raza Mediana", image: pastorGanadero },
  { id: 11, title: "Border Collie", category: "Raza Mediana", image: borderCollie },
  { id: 12, title: "Beagle", category: "Raza Mediana", image: beagle },
  { id: 13, title: "Dálmata", category: "Raza Mediana", image: dalmata },
  { id: 14, title: "Husky Siberiano", category: "Raza Grande", image: husky },
  { id: 15, title: "Doberman", category: "Raza Grande", image: doberman },
  { id: 16, title: "Golden Retriever", category: "Raza Grande", image: golden },
  { id: 17, title: "Pastor Belga Malinois", category: "Raza Grande", image: pastorBelga },
  { id: 18, title: "San Bernardo", category: "Raza Grande", image: sanBernardo },
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
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredPuppies.map((puppy) => (
          <div
            key={puppy.id}
            onClick={() => setSelectedPuppy(puppy)}
            className="cursor-pointer group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]"
          >
            <div className="w-full h-[500px]">
              <img
                src={puppy.image}
                alt={puppy.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <div className="p-5 bg-white">
              <h3 className="text-xl font-bold">{puppy.title}</h3>
              <p className="text-sm text-gray-500">{puppy.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPuppy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative">
            <button
              onClick={() => setSelectedPuppy(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <img
              src={selectedPuppy.image}
              alt={selectedPuppy.title}
              className="w-full h-[600px] object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedPuppy.title}</h2>
            <p className="text-gray-600 mb-4">{selectedPuppy.description}</p>
            <span className="px-3 py-1 bg-[#363636] text-white rounded-full">
              {selectedPuppy.category}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default PuppyGallery;

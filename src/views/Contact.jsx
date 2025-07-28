import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="relative">
      {/* Navbar siempre arriba */}
      <Navbar />

      {/* Hero Header con padding ajustado */}
      <section className="h-[300px] bg-[#fff8ec] flex items-center justify-center text-center mt-20">
        <div>
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-[#9a9a9a]">
            <span className="text-[#bcbcbc]">Home</span> &nbsp;&gt;&nbsp;
            <span className="text-[#fab037] font-semibold">Contact Us</span>
          </p>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="bg-gray-50 py-20 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-4">
            Get in touch<span className="text-[#fab037]">.</span>
          </h2>
          <div className="w-24 h-1 bg-[#fab037] mx-auto mb-6 rounded-full" />
          <p className="text-[#9a9a9a] max-w-2xl mx-auto mb-10">
            We help save lives of your beloved pets. Our expert pet trainers are always here to help your pet in need.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <input
              type="text"
              placeholder="Name"
              className="rounded-full border border-gray-300 px-6 py-3 w-full"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-full border border-gray-300 px-6 py-3 w-full"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="rounded-full border border-gray-300 px-6 py-3 w-full"
            />
            <textarea
              placeholder="Your message"
              rows="6"
              className="md:col-span-3 rounded-3xl border border-gray-300 px-6 py-4 w-full"
            ></textarea>
          </form>

          <button className="bg-[#363636] text-white px-8 py-4 rounded-full font-bold hover:bg-[#222] transition">
            Send Enquiry
          </button>
        </div>
      </section>

      {/* Datos de contacto */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-20 h-20 bg-[#fab037] rounded-full mx-auto flex items-center justify-center text-white text-3xl mb-4">
                📍
              </div>
              <h4 className="text-xl font-bold mb-2">Address</h4>
              <p>
                13 Ocean Street, Sydney,<br />
                NSW 4563, Australia
              </p>
            </div>
            <div>
              <div className="w-20 h-20 bg-[#fab037] rounded-full mx-auto flex items-center justify-center text-white text-3xl mb-4">
                ✉️
              </div>
              <h4 className="text-xl font-bold mb-2">Email</h4>
              <p>
                needhelp@dogz.com<br />
                info@dogz.com
              </p>
            </div>
            <div>
              <div className="w-20 h-20 bg-[#fab037] rounded-full mx-auto flex items-center justify-center text-white text-3xl mb-4">
                📞
              </div>
              <h4 className="text-xl font-bold mb-2">Phone</h4>
              <p>
                F: +61 (07) 5339 2690<br />
                M: +61 (03) 5349 0361
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
// Si quieres usar el logo "X" moderno:
// import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* About */}
        <div>
          <h4 className="text-2xl font-extrabold mb-4">About</h4>
          <p className="text-gray-400 max-w-sm mb-6">
            At Pawfy we help save lives of your beloved pets, we have a team of
            expert pet trainers and doctors who are here to help your pet in need.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#fab037] transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#fab037] transition">
              <FaTwitter /> 
              {/* O usa <FaXTwitter /> si importas de fa6 */}
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#fab037] transition">
              <FaPinterestP />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#fab037] transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12">© GFXPARTNER</div>
    </footer>
  );
};

export default Footer;

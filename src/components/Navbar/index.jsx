import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, User, Code2, FolderKanban, Award, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 flex items-center justify-center
    ${scrolled ? "bg-black/80 border-b border-white/20 backdrop-blur-md" : "bg-transparent"}
  `}
    >
      <nav className=" flex w-full lg:container justify-between items-center px-4 py-3 ">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo/z6994431946635_dc851f1abc3a7e11d02fe92134b6cb01.jpg"
            alt="avatar"
            className="rounded-full w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]
          border-4 border-white/30 shadow-[0_8px_20px_rgba(244,114,182,0.6)]"
          />
          <p className="font-bold">Bảo Duyên</p>
        </Link>

        <span className="hidden lg:flex gap-7 items-center">
          <Link to="/kha-thi-bao-duyen" className="flex items-center gap-2 font-bold text-gray-400 hover:text-white transition">
            <Home size={18} /> Trang chủ
          </Link>
          <Link to="/ve-toi" className="flex items-center gap-2 font-bold text-gray-400 hover:text-white transition">
            <User size={18} /> Về tôi
          </Link>
          <Link to="/ky-nang" className="flex items-center gap-2 font-bold text-gray-400 hover:text-white transition">
            <Code2 size={18} /> Kỹ năng
          </Link>
          <Link to="/du-an" className="flex items-center gap-2 font-bold text-gray-400 hover:text-white transition">
            <FolderKanban size={18} /> Dự án
          </Link>
          <Link to="/chung-chi" className="flex items-center gap-2 font-bold text-gray-400 hover:text-white transition">
            <Award size={18} /> Chứng chỉ
          </Link>
        </span>

        <Link
          to="/lien-he"
          className="text-black py-3 px-8 bg-white rounded-3xl lg:block hidden font-bold"
        >
          Liên hệ
        </Link>

        <button
          className="lg:hidden bg-white text-slate-900 p-1 rounded hover:shadow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`absolute top-full right-2 mt-1 w-[95%] rounded-xl overflow-hidden 
  transform transition-all duration-300 ease-in-out
  ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}
  ${scrolled ? "bg-black/80 border border-white/20 backdrop-blur-md" : "bg-black/60 border border-white/10"}
  `}
        >

          <div className="lg:flex lg:flex-col grid grid-cols-2 p-4 gap-4">
            <Link to="/kha-thi-bao-duyen" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
              <Home size={18} /> Trang chủ
            </Link>
            <Link to="/ve-toi" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
              <User size={18} /> Về tôi
            </Link>
            <Link to="/ky-nang" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
              <Code2 size={18} /> Kỹ năng
            </Link>
            <Link to="/du-an" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
              <FolderKanban size={18} /> Dự án
            </Link>
            <Link to="/chung-chi" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
              <Award size={18} /> Chứng chỉ
            </Link>
            <Link to="/lien-he" className="flex items-center gap-2   text-gray-300 hover:text-white transition">
              <Phone size={18} /> Liên hệ
            </Link>
          </div>
        </div>

      </nav>
    </div>
  );
}

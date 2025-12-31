import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-full h-20 flex flex-col justify-between items-center border-t border-gray-200/30 mt-20 py-6">
       <div className="flex gap-4">
        <Link
          to="https://github.com/KhaBaoDuyen"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-white rounded-full text-white transition hover:bg-white hover:text-black hover:border-transparent"
        >
          <FaGithub className="h-5 w-5" />
        </Link>
        <Link
          to="www.linkedin.com/in/bao-duyen-kha-thi-41622736a"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-white rounded-full text-white transition hover:bg-white hover:text-black hover:border-transparent"
        >
          <FaLinkedin className="h-5 w-5" />
        </Link>
        <Link
          to="duyenktb1410@gmail.com"
          className="p-2 border border-white rounded-full text-white transition hover:bg-white hover:text-black hover:border-transparent"
        >
          <FaEnvelope className="h-5 w-5" />
        </Link>
        <Link
          to="https://zalo.me/0337019197"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-white rounded-full text-white transition hover:bg-white hover:text-black hover:border-transparent"
        >
          <FaPhoneAlt className="h-5 w-5" />
        </Link>
      </div>

       <p className="text-gray-600 text-center text-sm mt-4 md:mt-0">
        © 2025 bởi Kha Thi Bao Duyen. Website được tạo từ ReactJS.
      </p>
    </footer>
  );
}

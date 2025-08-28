import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-900 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

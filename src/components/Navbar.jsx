import React, { useState } from "react";
import { Code2, Home, User, FileText, Mail, Package, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800 top-0 ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-purple-500">
          <Code2 className="inline-block mr-2" />
          Frontend Developer
        </div>

        {/* Hamburger Button (Mobile) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { icon: Home, label: "Home" },
            { icon: User, label: "About" },
            { icon: FileText, label: "Resume" },
            { icon: Package, label: "Projects" }, // Changed "Project" -> "Projects"
            { icon: Mail, label: "Contact" },
          ].map(({ icon: Icon, label }) => (
            <Link
              key={label}
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              className="flex items-center space-x-1 hover:text-purple-500 transition-colors"
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 p-4 space-y-4">
          {[
            { icon: Home, label: "Home" },
            { icon: User, label: "About" },
            { icon: FileText, label: "Resume" },
            { icon: Package, label: "Projects" },
            { icon: Mail, label: "Contact" },
          ].map(({ icon: Icon, label }) => (
            <Link
              key={label}
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="flex items-center space-x-2 py-2 px-4 bg-gray-800 rounded-lg hover:bg-purple-600 transition"
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;


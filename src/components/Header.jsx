import React from "react";
import logo from "../assets/house.png"; // Adjust the path as necessary
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Real Estate Logo" className="w-16 h-16" />
        <h2 className="text-4xl font-semibold text-gray-800">Global Matics</h2>
      </div>
    </header>
  );
};

export default Header;

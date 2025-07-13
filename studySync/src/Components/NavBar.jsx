import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { Turn as Hamburger } from 'hamburger-react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between p-5 pl-6">
        {/* Logo */}
        <div>
          <h1 className="text-3xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-gray-100 via-gray-300 to-indigo-400">
            StudySync
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-between gap-4">
          <h4 className="2xl cursor-pointer" onClick={() => navigate("/")}>Home</h4>
          <h4 className="2xl">Features</h4>
          <h4 className="2xl cursor-pointer" onClick={() => navigate("/notes")}>Notes</h4>
          <h4 className="2xl">Doubts</h4>
          <div className="flex gap-2">
            <button
              onClick={() => navigate('/auth?mode=login')}
              className="bg-indigo-600 px-4 py-1 rounded-md hover:bg-indigo-700 transition"
            >
              Log In
            </button>
            <button
              onClick={() => navigate('/auth?mode=signup')}
              className="bg-purple-600 px-4 py-1 rounded-md hover:bg-purple-700 transition"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={28} color="#fff" />

          {menuOpen && (
            <div className="absolute top-16 right-4 w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-lg p-6 shadow-xl flex flex-col gap-4 z-50">
              <h4
                className="text-white text-center hover:text-indigo-400 transition cursor-pointer"
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
              >
                Home
              </h4>
              <h4 className="text-white text-center hover:text-indigo-400 transition cursor-pointer">Features</h4>
              <h4
                className="text-white text-center hover:text-indigo-400 transition cursor-pointer"
                onClick={() => {
                  navigate("/notes");
                  setMenuOpen(false);
                }}
              >
                Notes
              </h4>
              <h4 className="text-white text-center hover:text-indigo-400 transition cursor-pointer">Study Room</h4>
              <h4 className="text-white text-center hover:text-indigo-400 transition cursor-pointer">Doubts</h4>

              <div className="flex gap-2 flex-col mt-4">
                <button
                  onClick={() => {
                    navigate('/auth?mode=login');
                    setMenuOpen(false);
                  }}
                  className="bg-indigo-600 text-white rounded-lg py-2 hover:scale-105 transition"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    navigate('/auth?mode=signup');
                    setMenuOpen(false);
                  }}
                  className="bg-purple-600 text-white rounded-lg py-2 hover:scale-105 transition"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;

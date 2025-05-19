import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { Turn as Hamburger } from 'hamburger-react'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
     <>
        <div className="flex items-center justify-between p-5 pl-6">
            <div>
                <h1 className="text-2xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-gray-100 via-gray-300 to-indigo-400">
                    StudySync
                </h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center justify-between gap-4">
                <h4>Home</h4>
                <h4>Features</h4>
                <h4>Notes</h4>
                <h4>Study Room</h4>
                <h4>Doubts</h4>
                <h4>Login / Sign Up</h4>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                 <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={28} color="#fff" />

                {menuOpen && (
                    <div className="absolute top-16 right-4 w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-lg p-6 shadow-xl flex flex-col gap-4 z-50">
                            <h4 className="text-white text-center hover:text-indigo-400 transition cursor-pointer">Home</h4>
                            <h4 className="text-white text-center hover:text-indigo-400 transition cursor-pointer">Features</h4>
                            <h4 className="text-white text-center hover:text-indigo-400 transition cursor-pointer">Notes</h4>
                            <h4 className="text-white text-center hover:text-indigo-400 transition cursor-pointer">Study Room</h4>
                            <h4 className="text-white text-center hover:text-indigo-400 transition cursor-pointer">Doubts</h4>
                            <button className="bg-gradient-to-r text-center from-purple-600 to-indigo-600 text-white rounded-lg py-2 mt-4 hover:scale-105 transition cursor-pointer">Login / Sign Up</button> 
                    </div>
                )}
            </div>

        </div>
    </>
    );
};

export default NavBar;
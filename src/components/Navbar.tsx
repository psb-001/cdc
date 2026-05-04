import { motion } from "motion/react";
import logo from "../assets/logo.png";

export const Navbar = () => (
  <nav className="absolute top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-start">
    <motion.a 
      href="#" 
      className="inline-block"
      whileHover={{ scale: 1.05, rotate: -2 }}
    >
      <img 
        alt="MES Logo" 
        className="w-24 md:w-32" 
        src={logo} 
      />
    </motion.a>
    <div className="hidden md:flex space-x-6 text-white font-bold bg-black/20 px-6 py-3 rounded-full backdrop-blur-md">
      <a className="hover:text-brand transition-colors" href="#">Clubs</a>
      <a className="hover:text-brand transition-colors" href="#">Hackathons</a>
      <a className="hover:text-brand transition-colors" href="#">Projects</a>
      <a className="hover:text-brand transition-colors" href="#">Bank</a>
      <a className="hover:text-brand transition-colors" href="#">Donate</a>
    </div>
  </nav>
);

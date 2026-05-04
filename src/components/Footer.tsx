import { motion } from "motion/react";

export const Footer = () => (
  <footer className="bg-dark text-white py-20 px-4 border-t border-gray-800">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
      <div>
        <h4 className="font-black text-gray-500 uppercase tracking-widest mb-6 text-sm">CDC</h4>
        <ul className="space-y-3 font-medium">
          {["Philosophy", "Our Team & Board", "Jobs", "Brand Guide", "Donate"].map((link) => (
            <li key={link}><a className="hover:text-brand transition-colors" href="#">{link}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-black text-gray-500 uppercase tracking-widest mb-6 text-sm">Resources</h4>
        <ul className="space-y-3 font-medium">
          {["Community Events", "Jams", "Toolbox", "Clubs Map", "Privacy & Terms"].map((link) => (
            <li key={link}><a className="hover:text-brand transition-colors" href="#">{link}</a></li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 flex flex-col items-start md:items-end">
        <motion.img 
          whileHover={{ scale: 1.1, rotate: 5 }}
          alt="MES Logo" 
          className="w-16 h-16 mb-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
          src="https://mespune.in/wp-content/uploads/2018/10/mes-logo.png" 
        />
        <p className="text-gray-400 font-medium mb-4 text-left md:text-right leading-relaxed">
          Career Development Club<br />MES Mukunddas Lohia College of Engineering
        </p>
        <p className="text-gray-500 text-sm font-bold">© 2026 Career Development Club</p>
      </div>
    </div>
  </footer>
);

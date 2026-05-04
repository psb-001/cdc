import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Programs = () => (
  <section className="py-24 bg-[#f3f4f6] relative">
    <div className="max-w-4xl mx-auto px-4 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black mb-4">
        Connect with <span className="bg-brand text-white px-3 py-1 rounded inline-block -rotate-2 transform">builders</span> from around the world
      </h2>
      <p className="text-xl text-gray-600 font-medium">We gather both online and in-person to share our love of code and make things together!</p>
    </div>
    <div className="max-w-6xl mx-auto px-4 space-y-12">
      {/* Flavortown */}
      <motion.div 
        whileHover={{ scale: 1.02, rotate: 0.5 }}
        className="bg-[#d94a55] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xl"
      >
        <div className="md:w-1/2 relative z-10">
          <h3 className="text-5xl font-black mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Georgia, serif' }}>Flavortown</h3>
          <p className="text-lg mb-8 font-medium leading-relaxed">
            Make a website, game, hardware project, or anything your heart desires, share your project for others to experience and to get cookies - our virtual currency, and exchange your cookies for iPads, MacBooks, Raspberry Pis and so many more things - all for free!
          </p>
          <button className="bg-white text-[#d94a55] font-black py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2 group">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Start Cooking
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end relative z-10">
          <img 
            alt="Cooking Dinosaurs" 
            className="w-72 md:w-96 drop-shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCF-MJ4PQfppkdv4sxNtDNzkCISn9JVVx6g82869uWjd50ftsIKzJQ-Yv1zvJRp-Ozdi2sGWAo1HgqWgeZloZNsbEek4mULjg2M_bMatuIsqqVVEObBapO6eqcAbnZoSgNZmPVCKodKlm09CjbwalWNrUpNTpy9ssCG7qwwtOWX7QWP1-icoKEnp5PmcWKS1Vvqzxz2oYX0kb1SYuOiM-U7xZ6qht5p3LQMQGLWAd-JnhzgfUQJj0Fjg93gaajW-YRagcGLVLaiAc" 
          />
        </div>
      </motion.div>

      {/* Fallout */}
      <motion.div 
        whileHover={{ scale: 1.02, rotate: -0.5 }}
        className="bg-[#4fbbf1] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xl"
      >
        <div className="md:w-1/2 relative z-10">
          <h3 className="text-5xl font-black mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] uppercase">FALLOUT</h3>
          <p className="text-lg mb-8 font-medium leading-relaxed">
            Build hardware projects, track your hours, then attend a hardware hackathon in Shenzhen!
          </p>
          <button className="bg-white text-[#4fbbf1] font-black py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2 group">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Start Building
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 absolute inset-y-0 right-0 w-2/3 z-0 opacity-80 pointer-events-none">
          <img 
            alt="Clouds" 
            className="object-cover h-full w-full object-right" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv1hFXHbPRaQTiJmXQ5xLQ5TUfeBmSWAIfGR44yGjC4IQYLTz8WVKAtPSHpClxmxxnlEy0t2_h0zSIL_ja4sSZ8XXFNC-HmVqD8o--agCk5dYPPAJrIp5RfUX1YkuSaujyg_8G0MePTDOxZss3tm9r1YrFVT3VcGhQWUp3Z4S5iLU2Kurwo4YINLlOsWRsS2-TnuUl3I58RlZlg67L4eI3_e1j9cYr8Hk45N-TQimCiJgkyKTEtCUyMFmYf75jPiKj4Z7mkepeD-Y" 
          />
        </div>
      </motion.div>

      {/* Stasis */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-[#e2e1d7] border-4 border-[#b53a25] rounded-xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl"
      >
        <h3 className="text-5xl md:text-8xl font-black text-[#b53a25] tracking-widest uppercase mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>STASIS</h3>
        <p className="text-xl font-bold text-gray-800 mb-4 tracking-widest uppercase italic">MAY 15-18, 2026 // PUNE</p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 font-medium">
          We're bringing 100+ members from all over the world to Pune for a 4-day hardware hackathon, and we're funding your next biggest hardware projects.
        </p>
        <button className="bg-[#b53a25] text-white font-black py-4 px-12 text-2xl border-4 border-[#8a2919] hover:bg-[#a0301d] transition-all shadow-[6px_6px_0_0_rgba(138,41,25,1)] active:translate-x-1 active:translate-y-1 active:shadow-none uppercase">
          RSVP
        </button>
      </motion.div>
    </div>
  </section>
);

import { motion } from "motion/react";

export const Hero = () => (
  <header className="hero-bg relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-32 text-white overflow-hidden">
    <div className="absolute inset-0 bg-black/40 z-0"></div>
    <motion.div 
      className="relative z-10 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-2 text-brand bg-white inline-block px-4 py-1 rounded-sm">
        WELCOME TO THE CAREER DEVELOPMENT CLUB. EMPOWERING MLCOE.
      </p>
      <h2 className="text-lg md:text-xl font-bold text-white mb-6 uppercase tracking-wider">
        Official Tech & Career Hub of MES Mukunddas Lohia College of Engineering.
      </h2>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight drop-shadow-lg">
        We are <span className="bg-brand text-white px-4 py-2 rounded-lg rotate-2 inline-block shadow-xl transform hover:scale-105 transition-transform duration-200">the driven engineers</span> of MLCOE building our futures together.
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <motion.a 
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand hover:bg-red-600 text-white font-bold text-xl px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(236,55,80,0.39)] hover:shadow-[0_6px_20px_rgba(236,55,80,0.23)] transition-all" 
          href="#"
        >
          Join CDC
        </motion.a>
        <a className="text-white hover:text-brand font-bold text-lg underline decoration-2 underline-offset-4 transition-colors" href="#">
          Or, check out our programs →
        </a>
      </div>
      <div className="mt-8 text-white bg-red-600/80 inline-block px-6 py-3 rounded-xl shadow-lg border border-red-500 font-bold backdrop-blur-sm animate-pulse">
        NEW! Join us for the official CDC Inauguration on May 8th, 2026!
      </div>
    </motion.div>

    <div className="relative z-10 mt-16 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      {[
        { title: "Peer-to-Peer Learning", desc: "Master new tech stacks and learn how to win hackathons with direct guidance from experienced peers and guest mentors from institutes like VIT Pune.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZc2Oox4WDgL_79vIgYe4tQwxIWP5HaQRYHV619gV_rtVOvDBSB399bel875HzEVah9Wx8rEUm9g3O_10dQiFGDtTMr5AwAPizRK3hajLzVA9CMZNe7tiAkPIc39gRturAVbEXwp4WaIKzRkQxlc20frfiQmvhVsieT0Tv4G_RJ3PZGXiGr2nsP4_zGVlknv5lGZrFSmW2x0CDdY24JfUpcAsCb0WNOdBs0yWEn2663OWGIdfPP6Jf-tKL--q3xYr5b2_3DrrvzkM" },
        { title: "Technical Workshops", desc: "Move beyond theory. Get hands-on with AI/ML integrations, IoT hardware like ESP32s, and practical engineering projects.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-UQkISJ9ceI6yxmyh-Epu_LpSbQzMAUcjnqYIqOVE95GoqgL38icKRhkShVqu4wX3q2vD1P02Ygo1jLWNqX-IO5K6c6Hx2rzubPwC_QaEULXjvJ9NE1bftzOt2HD9HLmiDGbZSn14WyM4hQ3DJidvsFgFcJxztlmoH4QWdnHyvGvOpssQXZ881YWPn0lYZ53vK5v8esHlV0_lfQNkM6tfpC6egk4gtTfcZscZJpSTjI9h3rSdCdbH7JWIW5ORUGkc1Zwzlh_GFSc" },
        { title: "Career Guidance", desc: "Backed by our dedicated faculty coordinators, we help you build standout portfolios, optimize your LinkedIn presence, and prepare for the industry.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB062dNGTC0kRyD2FoKApc-NGBYQyORD72xbeW0sqaBik-0qYHgEsh4EwdXIWs_542CmBehm7W85zMk5_ObU3GQ-nF0KhtON498rS1FHblgQN1n58lfWISG7PT6OiG83wEkn5GREFkHf5U8y5UKJDV31XZ3kP6y-dF3350XKK5eVmQvjQFN8nIka2xOu_IxfNU5XGNcgP44WAmXGVEnoYPlBxaHm6Cna6eJmR55B--Osd8OmHAsXxyO9xxeHvEajn-S-h7TxeseQiE" }
      ].map((card, i) => (
        <motion.a 
          key={i}
          href="#"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className="group relative bg-cover bg-center h-48 rounded-2xl overflow-hidden shadow-xl"
          style={{ backgroundImage: `url(${card.img})` }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
          <div className="relative z-10 p-6 h-full flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{card.title}</h3>
            <p className="text-white/90 text-sm font-medium drop-shadow-md">{card.desc}</p>
          </div>
        </motion.a>
      ))}
    </div>
  </header>
);

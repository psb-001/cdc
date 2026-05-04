import { motion } from "motion/react";
import { MessageSquare, Cloud, Users } from "lucide-react";

export const Recap = () => (
  <section className="py-32 bg-white text-center relative overflow-hidden">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-5 pointer-events-none z-0">
      <div className="w-[800px] h-[800px] bg-brand rotate-45 transform origin-center mx-auto"></div>
    </div>
    <div className="max-w-4xl mx-auto px-4 relative z-10">
      <p className="text-brand font-black tracking-widest uppercase mb-4 text-sm">
        We've got a lot going on - let's recap
      </p>
      <h2 className="text-4xl md:text-6xl font-black mb-16">
        Find your second home at <span className="text-brand">CDC</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { color: "bg-[#4fbbf1]", title: "Join Our Slack", icon: <MessageSquare className="w-8 h-8"/>, desc: "Connect with other technical teenagers on Slack and hack on things together." },
          { color: "bg-[#8b5cf6]", title: "Open Source Tools", icon: <Cloud className="w-8 h-8"/>, desc: "We're currently building a game engine, daily streak system, graphing game, and more!" },
          { color: "bg-brand", title: "Start A Club", icon: <Users className="w-8 h-8"/>, desc: "Build an in-person community of high school hackers, and we're here to help." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
            className={`${item.color} text-white p-10 rounded-3xl text-left shadow-2xl cursor-pointer flex flex-col items-start gap-4`}
          >
            {item.icon}
            <h3 className="text-2xl font-black leading-tight">{item.title}</h3>
            <p className="text-white/90 font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

import { motion } from "motion/react";

export const Discover = () => (
  <section className="py-24 px-4 bg-white relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
            Discover the <span className="text-brand">joy of code</span>, together.
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Every day, thousands of members gather online and in-person to make things with code. Whether you're a beginner programmer or have years of experience, there's a place for you at Career Development Club. Read about our <a className="text-brand hover:underline font-bold" href="#">hacker ethic</a>.
          </p>
          <ul className="space-y-6">
            {[
              { num: 1, color: "bg-brand", title: "Connect with other teenage coders", desc: "Have a coding question? Looking for project feedback? You'll find hundreds of fabulous people to talk to in our global Slack (like Discord), active at all hours." },
              { num: 2, color: "bg-blue-500", title: "Build open source learning tools", desc: "We build large open-source projects together (like 70s in space, like this website, a game engine, daily streak system, and more!)" },
              { num: 3, color: "bg-yellow-500", title: "Gather IRL with other makers", desc: "Meet other members in your community to build together at one of our chapters and regular hackathons." }
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-lg mr-4 mt-1`}>
                  {item.num}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-brand/10 rounded-[3rem] transform rotate-3 scale-105 z-0"></div>
          <img 
            alt="Map of Hack Clubs around the world" 
            className="relative z-10 rounded-[2rem] shadow-2xl border-4 border-white transform hover:rotate-0 transition-transform duration-300"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoLLhIWs4KZ9jkpiVEqOzf6CMCqTKRx5kDTmWPWv8DSm589OaukaS6j-OvmlNvaV-LNBioZF0jNzBbLXH8m2_50wXzFEhEpnLGXh4HCoYtvdwxnrCMlLXhNk9_ppuUOTxpgNO9umIUM6kZ6m_kba3a9FpWMLF9f725KNH2d7cW_QqcRsQPcdqKvfwVgBqGu2zeGICTnPxDoIXXFGAn5VfP7rWLQaiBMSttIKNDBjXPpMv7UcPnm8zvLrrIqtoZBY6U9mltyXfV2wM" 
          />
        </motion.div>
      </div>
    </div>
  </section>
);

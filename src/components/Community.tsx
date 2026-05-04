import { motion } from "motion/react";
import { Slack } from "lucide-react";

export const Community = () => (
  <section className="py-24 bg-dark text-white relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#2c2c2c] rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
        <div className="p-10 md:p-16">
          <h2 className="text-4xl font-black mb-6 flex items-center gap-3">
            Our Online Community
          </h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Coding doesn't have to be a solitary activity. At CDC, we make remarkable things together, and in our Slack you'll find awesome people to hang out with too. Come together, find your programming community, dream up something wild, or just #lounge.
          </p>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">
            Occasionally we invite someone we really want to speak to (like Sal Khan, George Hotz, and Lady Ada) and host an AMA with them.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-colors flex items-center gap-3"
          >
            <Slack className="w-6 h-6" />
            Join our Slack
          </motion.button>
        </div>
        <div className="relative bg-black hidden lg:block">
          <img 
            alt="Community" 
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABG275N-WqfoUR8FTf0UlxeYf6S0piRbCkaUk3Rbk8eZCmoxVK4t6dPScUIx3CcI8YkQSMpc6yPb5_xwq57SyshhirKPhdAdCKy0CrHAPCRe0wEK82Uqu2TyUojleUl2RqLdaXrHg7zLa8ZDSy-f6mUM20pf83JjmoHCjH3UjDGUoZ6bGGvATXtHzG2V4DeWblpuzyzTgz1qS_wMDRnS9CcvyuuxVswx2oAncmiG44nielsMABdx5509soI2uVz43AnL3pFASMt-k" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c2c2c] to-transparent w-1/4"></div>
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-right space-y-10 bg-black/40 p-8 rounded-3xl backdrop-blur-md border border-white/10">
            {[
              { label: "Total Channels", value: "2,160" },
              { label: "Weekly Active", value: "28,920" },
              { label: "Total Members", value: "112,518" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-black text-white">{stat.value}</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

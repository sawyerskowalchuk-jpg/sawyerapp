import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Briefcase, User, Code, Camera, Coffee, Dog, ChevronLeft, Menu, Gamepad2, ChevronDown, ChevronUp, Clock } from 'lucide-react';

function LiveViewCount() {
  const [views, setViews] = useState(1245);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        setViews(v => v + Math.floor(Math.random() * 3) + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <button 
      onClick={() => setViews(v => v + 1)}
      className="flex items-center gap-2 text-red-500 font-mono mt-2 hover:bg-red-50 px-2 py-1 -ml-2 rounded-lg transition-all active:scale-95 cursor-pointer"
    >
      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
      <span>{views.toLocaleString()} Views</span>
    </button>
  );
}

function GameCard({ title, image, children }: { title: string, image: string, children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white p-2 rounded-3xl shadow-sm border border-neutral-100 flex flex-col">
      <img src={image} alt={title} className="w-full h-56 md:h-64 object-cover rounded-2xl mb-3" referrerPolicy="no-referrer" />
      <div className="px-3 pb-3 flex-grow flex flex-col">
        <h4 className="font-serif text-lg mb-1">{title}</h4>
        {children && (
          <div className="mt-auto pt-2">
            <button onClick={() => setIsOpen(!isOpen)} className="text-sm font-medium text-neutral-500 hover:text-neutral-800 flex items-center gap-1 transition-colors">
              {isOpen ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>} 
              {isOpen ? "Show Less" : "Read More"}
            </button>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                className="mt-2 text-sm text-neutral-600 leading-relaxed overflow-hidden"
              >
                {children}
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="h-screen flex overflow-hidden bg-[#f5f5f4]">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed top-4 left-4 z-50 p-3 rounded-full shadow-md transition-colors ${
          isSidebarOpen 
            ? 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700' 
            : 'bg-white text-neutral-900 hover:bg-neutral-100 border border-neutral-200'
        }`}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Left Pane - Collapsible */}
      <motion.div 
        initial={false}
        animate={{ width: isSidebarOpen ? '100%' : '0px' }}
        className="lg:max-w-[50vw] bg-[#0a0a0a] text-[#f5f5f4] relative overflow-hidden shrink-0"
      >
        <div className="w-screen lg:w-[50vw] h-full p-8 md:p-16 pt-20 md:pt-24 flex flex-col justify-between">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
           <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-neutral-700 to-transparent blur-3xl" />
           <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-neutral-800 to-transparent blur-3xl" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-neutral-400 mb-4">Portfolio & Bio</h2>
          <h1 className="font-serif text-7xl md:text-8xl lg:text-[112px] leading-[0.88] tracking-tight font-semibold mb-6">
            Hi, I'm<br />
            <span className="italic text-neutral-300">Sawyer.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-neutral-400 max-w-md">
          
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 mt-12 lg:mt-0 flex gap-6"
        >
          <a href="#" className="p-3 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
      </motion.div>

      {/* Right Pane - Scrollable */}
      <div className="flex-1 h-full overflow-y-auto p-8 md:p-16 lg:p-24 pt-20 md:pt-24">
        <div className="max-w-xl mx-auto space-y-24">
          
          {/* About Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 text-neutral-400">
              <User className="w-5 h-5" />
              <h3 className="text-sm font-mono tracking-widest uppercase">About Me</h3>
            </div>
            <div className="text-xl md:text-2xl leading-relaxed text-neutral-800 font-light space-y-4">
              <p>
                About me: I'm Sawyer. I have 1 dog and 2 sisters. My dog is stinky and cute at the same time; he can be questionable at times.
              </p>
              <p>
                I make games and apps.
              </p>
            </div>
          </motion.section>

          {/* What I Do Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8 text-neutral-400">
              <Briefcase className="w-5 h-5" />
              <h3 className="text-sm font-mono tracking-widest uppercase">What I Do</h3>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100">
              <p className="text-xl leading-relaxed text-neutral-800 font-light mb-6">
                Hobbies: Collecting coins, posting videos on YouTube and other platforms. I love riding my bike! Some places I like to bike around town and everywhere I can. I live stream a good amount. If you have questions about your computer, I can help.
              </p>
              <figure>
                <img 
                  src="/coins2.jpg" 
                  alt="Coin collection" 
                  className="w-full h-64 md:h-80 object-cover rounded-2xl mb-3"
                  referrerPolicy="no-referrer"
                />
                <figcaption className="text-neutral-500 text-sm text-center italic">
                  This box has 2k nickels, or 100 dollars in them.
                </figcaption>
              </figure>
            </div>
          </motion.section>

          {/* Meet My Dog Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 text-neutral-400">
              <Dog className="w-5 h-5" />
              <h3 className="text-sm font-mono tracking-widest uppercase">My Co-Pilot: Jax</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Jax Info & Pics */}
              <div className="bg-white p-2 rounded-3xl shadow-sm border border-neutral-100 flex flex-col">
                <div className="grid grid-cols-2 gap-2 mb-4 max-h-[500px] overflow-y-auto pr-2 rounded-2xl">
                  <img 
                    src="/jax-2.jpg" 
                    alt="Jax 1" 
                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="/jax-3.jpg" 
                    alt="Jax 2" 
                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="/jax-4.jpg" 
                    alt="Jax 3" 
                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="/jax-5.jpg" 
                    alt="Jax 4" 
                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="/jax4-new.png" 
                    alt="Jax 5" 
                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="/jax6.jpg" 
                    alt="Jax 6" 
                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="/jax8.jpg" 
                    alt="Jax 7" 
                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="/jax-idk.jpg" 
                    alt="Jax 8" 
                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="/jax10.jpg" 
                    alt="Jax 9" 
                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="/jax11.jpg" 
                    alt="Jax 10" 
                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="/jax12.jpg" 
                    alt="Jax 11" 
                    className="w-full h-48 md:h-56 object-cover rounded-2xl col-span-2"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-4 pb-4 flex-grow">
                  <h4 className="font-serif text-2xl mb-2">If you don’t see him, you will hear or smell him</h4>
                  <p className="text-neutral-500 leading-relaxed">
                    Jax is always being funny and cuddling with me. Always farting.
                  </p>
                </div>
              </div>

              {/* Live Court / Video */}
              <div className="bg-white p-2 rounded-3xl shadow-sm border border-neutral-100 flex flex-col">
                <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-4 bg-black">
                  <iframe 
                    src="https://www.youtube.com/embed/0Mvq3ApXzmE" 
                    title="YouTube Short" 
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="px-4 pb-4 relative group">
                  <h4 className="font-serif text-2xl mb-2">Live View Count</h4>
                  <p className="text-neutral-500 leading-relaxed">
                    Check out this moment!
                  </p>
                  <LiveViewCount />
                  <a 
                    href="https://www.youtube.com/@theshellshockersperson/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity text-xs text-neutral-400 hover:!opacity-100 cursor-pointer"
                    title="Secret YouTube Channel"
                  >
                    🤫
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Games I Play Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 text-neutral-400">
              <Gamepad2 className="w-5 h-5" />
              <h3 className="text-sm font-mono tracking-widest uppercase">Games I Play</h3>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-neutral-900 font-medium mb-4 px-2">Top Games</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GameCard 
                    title="Rocket League" 
                    image="/rl.png"
                  >
                    <p className="mb-2">My absolute favorite game is Rocket League. I play it all the time. I'd say it's usually a hard game, but you have full control over what you do. It is very competitive and can be very difficult to master.</p>
                    <p>I started playing in Season 5. I played until Season 6, stopped playing for a bit until Season 10, then stopped at Season 20. I started again at Season 22, but each time I got better.</p>
                  </GameCard>
                  
                  <GameCard 
                    title="Farming Simulator 22" 
                    image="/fd22.png"
                  >
                    <p className="mb-2">I have a series I make and stream called "Gold Mining Fun". It's really the only thing I play on it right now.</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>I also have Farming Simulator 19</li>
                      <li>Farming Simulator 17</li>
                      <li>Had Farming Simulator 15</li>
                      <li>I sometimes use a steering wheel, but I don't have a table for it anymore.</li>
                    </ul>
                  </GameCard>

                  <GameCard 
                    title="Roblox" 
                    image="/roblox.png"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-neutral-900 font-medium mb-4 px-2">Other Games</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GameCard 
                    title="Minecraft" 
                    image="/mic.png"
                  />
                  <GameCard 
                    title="NFSHPR" 
                    image="/nfshpr.png"
                  >
                    <p>Need for Speed Hot Pursuit Remastered</p>
                  </GameCard>
                  <GameCard 
                    title="Need for Speed Heat" 
                    image="/nfsh.png"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Life History Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 text-neutral-400">
              <Clock className="w-5 h-5" />
              <h3 className="text-sm font-mono tracking-widest uppercase">Life History</h3>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100">
              <p className="text-xl leading-relaxed text-neutral-800 font-light mb-8">
                When I was about 9, I went to BC. That's all I remember.
              </p>

              <h4 className="font-serif text-2xl mb-4 text-neutral-900">Trip to Hawaii</h4>
              <p className="text-neutral-500 leading-relaxed mb-6">
                I went to Hawaii on July 28, 2023. It was so fun and hot. I wish that I had my GoPro at the time, but I had my phone for photos. It was a very fun experience. This was the first time being on a plane—well, technically second, but I'd still consider it the first. On the way back, we heard about the fires and just got out in time.
                <br /><br />
                Here are some photos from when I went to Hawaii. The large one is one of my absolute favorite pictures!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <img 
                    src="/best.jpg" 
                    alt="Favorite Hawaii photo" 
                    className="w-full h-64 md:h-96 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <img 
                  src="/hawaii.jpg" 
                  alt="Hawaii trip" 
                  className="w-full h-48 md:h-64 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="/photop.jpg" 
                  alt="Hawaii trip" 
                  className="w-full h-48 md:h-64 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <footer className="pt-12 border-t border-neutral-200 pb-12 lg:pb-0">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Sawyer. All rights reserved.
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}

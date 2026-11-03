import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Folder, Trophy, Lightbulb } from "lucide-react";

const About = () => {
  // Safe window height check for SSR
  const [vh, setVh] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh(); // Set on mount
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  const { scrollY } = useScroll();

  // Scroll mapping: 
  // As the user scrolls from 0 to 100vh (the Hero height), 
  // the text precisely fades in and slides up. We stagger the start/end points.

  // Section 1: Context Label
  const y1 = useTransform(scrollY, [0, vh * 0.4], [80, 0]);
  const opacity1 = useTransform(scrollY, [0, vh * 0.3], [0, 1]);

  // Section 2: Description
  const y2 = useTransform(scrollY, [vh * 0.1, vh * 0.5], [80, 0]);
  const opacity2 = useTransform(scrollY, [vh * 0.1, vh * 0.4], [0, 1]);

  // Section 3: At a Glance
  const y3 = useTransform(scrollY, [vh * 0.2, vh * 0.6], [80, 0]);
  const opacity3 = useTransform(scrollY, [vh * 0.2, vh * 0.5], [0, 1]);

  return (
    <section className="h-screen w-full bg-white text-black font-sans px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12 w-full max-w-[1600px] mx-auto items-stretch">

        {/* Left Column: Context Label */}
        <motion.div
          className="md:col-span-3 lg:col-span-3 flex md:items-center"
          style={{ y: y1, opacity: opacity1 }}
        >
          <h2 className="font-sans text-base md:text-lg lg:text-xl font-bold uppercase tracking-widest leading-snug">
            About Me
          </h2>
        </motion.div>

        {/* Right Column: Content */}
        <div className="md:col-span-9 lg:col-span-9 flex flex-col gap-9 md:gap-11">

          {/* About Me Description */}
          <motion.div style={{ y: y2, opacity: opacity2 }} className="flex flex-col gap-7 md:gap-8 text-left">
            <p className="font-sans text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] font-normal text-black/85 leading-[1.7] md:leading-[1.65] tracking-[-0.015em]">
              I'm Vamshi Kumar Adapa, a <span className="font-bold text-black">Computer Science and Engineering</span> student with a strong interest in <span className="font-bold text-black">technology, innovation and practical problem-solving</span>.
            </p>
            <p className="font-sans text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] font-normal text-black/85 leading-[1.7] md:leading-[1.65] tracking-[-0.015em]">
              I enjoy turning ideas into meaningful solutions through hands-on projects, technical exploration and <span className="font-bold text-black">entrepreneurial initiatives</span>. My experience includes working on <span className="font-bold text-black">penetration testing</span>, <span className="font-bold text-black">IoT-based solutions</span> and technology-driven projects, along with participating in hackathons and developing startup ideas. I believe in continuous learning, building practical skills and creating solutions that make a <span className="font-bold text-black">real-world impact</span>.
            </p>
          </motion.div>

          {/* At a Glance */}
          <motion.div style={{ y: y3, opacity: opacity3 }} className="flex flex-col gap-3 pt-3 md:pt-4 text-left">
            <h3 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-black/60 mb-2">
              At a Glance
            </h3>
            <div className="flex flex-row flex-wrap items-start gap-12 sm:gap-14 md:gap-18 lg:gap-20">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <Folder className="w-5 h-5 text-black/75 shrink-0" strokeWidth={2} />
                  <span className="font-sans text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-black leading-none">
                    10+
                  </span>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-black/60 mt-2">
                  Projects
                </span>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-black/75 shrink-0" strokeWidth={2} />
                  <span className="font-sans text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-black leading-none">
                    6+
                  </span>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-black/60 mt-2">
                  Hackathons
                </span>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-black/75 shrink-0" strokeWidth={2} />
                  <span className="font-sans text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-black leading-none">
                    2+
                  </span>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-black/60 mt-2">
                  Startups
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
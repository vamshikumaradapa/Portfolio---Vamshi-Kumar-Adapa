import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface WelcomeIntroProps {
  onComplete: () => void;
}

export const WelcomeIntro = ({ onComplete }: WelcomeIntroProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isFadingOut, setIsFadingOut] = useState(false);

  // 37 vertical bars span across the entire "WELCOME" text
  const BAR_COUNT = 37;
  const letters = ["W", "E", "L", "C", "O", "M", "E"];

  useEffect(() => {
    // If user prefers reduced motion, finish quickly
    if (shouldReduceMotion) {
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }

    // Display for ~1.7s, then smoothly fade out
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1750);

    // Call onComplete after fade out animation completes (~1750 + 750 = 2500ms)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, shouldReduceMotion]);

  // Click or touch to skip immediately
  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(onComplete, 350);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleSkip}
      className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden cursor-pointer select-none"
      role="banner"
      aria-label="Welcome Intro"
    >
      <div className="relative flex items-center justify-center w-full px-4">
        {/* Glowing Vertical Bars (Waveform / Halo) behind the text */}
        <div className="absolute inset-0 flex items-center justify-center gap-[4px] sm:gap-[6px] md:gap-[8px] pointer-events-none">
          {Array.from({ length: BAR_COUNT }).map((_, i) => {
            // Distance from center: -1 to +1
            const normalizedDist = (i - (BAR_COUNT - 1) / 2) / ((BAR_COUNT - 1) / 2);
            // Smooth elliptical height envelope (tallest in the center, tapering gently at the edges)
            const baseCurve = Math.max(0.15, Math.sqrt(Math.max(0, 1 - Math.pow(normalizedDist, 2) * 0.88)));

            // Horizontal color progression: cyan -> electric violet -> cyan
            const colorProgress = Math.sin((i / (BAR_COUNT - 1)) * Math.PI);

            return (
              <motion.div
                key={i}
                className="w-[2px] sm:w-[2.5px] md:w-[3px] rounded-full origin-center"
                style={{
                  height: `${baseCurve * 220}px`,
                  background: `linear-gradient(180deg, rgba(0, 242, 254, 0.05) 0%, rgba(0, 242, 254, ${0.4 + colorProgress * 0.4}) 20%, rgba(139, 92, 246, 0.95) 50%, rgba(112, 0, 255, ${0.4 + colorProgress * 0.4}) 80%, rgba(112, 0, 255, 0.05) 100%)`,
                  boxShadow: `0 0 10px rgba(0, 242, 254, ${0.35 + colorProgress * 0.3}), 0 0 20px rgba(112, 0, 255, ${0.25 + colorProgress * 0.3})`,
                }}
                initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0.3, opacity: 0 }}
                animate={
                  shouldReduceMotion
                    ? { scaleY: 1, opacity: 0.85 }
                    : {
                        scaleY: [0.75, 1.15, 0.8, 1.1, 0.75],
                        opacity: [0.55, 0.95, 0.65, 0.92, 0.55],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : {
                        duration: 1.6,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: i * 0.035, // Traveling wave across the bars
                      }
                }
              />
            );
          })}
        </div>

        {/* WELCOME Text */}
        <div className="relative z-10 flex items-center justify-center pointer-events-none">
          <motion.div
            className="flex items-center tracking-tight"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {letters.map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20, filter: "blur(6px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase inline-block drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeIntro;

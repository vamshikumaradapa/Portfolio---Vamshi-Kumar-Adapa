import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  number: string;
}

interface SocialItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home", number: "01" },
  { label: "About", href: "#about", number: "02" },
  { label: "Work", href: "#work", number: "03" },
  { label: "More About Me", href: "#more-about-me", number: "04" },
  { label: "Philosophy", href: "#philosophy", number: "05" },
  { label: "Contact", href: "#contact", number: "06" },
];

const socialItems: SocialItem[] = [
  { label: "Email", href: "mailto:vamshikumaradapa@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vamshi-kumar-adapa-19649b322/" },
  { label: "GitHub", href: "https://github.com/vamshikumaradapa" },
];

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];
const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];

const overlayVariants: Variants = {
  closed: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.8, ease },
  },
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.8, ease },
  },
};

const itemVariants: Variants = {
  closed: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.6, ease },
  },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.3 + i * 0.06,
      ease: easeOut,
    },
  }),
};

const socialVariants: Variants = {
  closed: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.5, ease },
  },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.45 + i * 0.06,
      ease: "easeOut",
    },
  }),
};

const Navigation = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Critical for iOS Safari
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    document.body.style.overflow = "";
    document.body.style.touchAction = "";

    setTimeout(() => {
      if (href === "#home" || href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 250);
  };

  return (
    <>
      {/* Hamburger Button */}
      <div
        className="fixed top-6 right-6 md:top-8 md:right-10 z-[200]"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col items-center justify-center gap-[5px] w-14 h-14 md:w-16 md:h-16 rounded-full bg-black transition-colors duration-300 relative"
          style={{
            boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.6)",
            WebkitFontSmoothing: "antialiased",
          }}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {/* Top Line */}
          <motion.span
            animate={open ? { rotate: 45, y: 6.5, scaleX: 0.8 } : { rotate: 0, y: 0, scaleX: 1 }}
            transition={{ duration: 0.6, ease }}
            className="absolute block h-[1.5px] w-[22px] bg-white origin-center"
            style={{ top: "35%" }}
          />
          {/* Middle Line */}
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, ease }}
            className="absolute block h-[1.5px] w-[22px] bg-white origin-center"
            style={{ top: "50%", marginTop: "-0.75px" }}
          />
          {/* Bottom Line */}
          <motion.span
            animate={open ? { rotate: -45, y: -6.5, scaleX: 0.8 } : { rotate: 0, y: 0, scaleX: 1 }}
            transition={{ duration: 0.6, ease }}
            className="absolute block h-[1.5px] w-[22px] bg-white origin-center"
            style={{ bottom: "35%" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[100] bg-black flex flex-col justify-between px-6 sm:px-8 md:px-16 pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8 md:pb-10 overflow-hidden"
          >
            {/* Socials row */}
            <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-1 mb-2 sm:mb-3 pt-6 md:pt-0 shrink-0">
              <p className="text-xs sm:text-sm text-white/70 uppercase tracking-widest font-mono mr-2">
                Socials
              </p>
              {socialItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  custom={i}
                  variants={socialVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="text-sm sm:text-base md:text-lg font-medium text-white hover:opacity-40 transition-opacity"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-0 my-auto w-full">
              {navItems.map((item, i) => (
                <div
                  key={item.label}
                  className="overflow-hidden border-b border-white/20 py-2 sm:py-2.5 md:py-3 lg:py-3.5"
                >
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="flex items-baseline justify-between group cursor-pointer"
                  >
                    <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold text-white uppercase tracking-tight leading-none group-hover:translate-x-3 transition-transform duration-300 ease-out">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm text-white/50 font-mono tracking-widest self-start mt-1 md:mt-2">
                      {item.number}
                    </span>
                  </motion.a>
                </div>
              ))}
            </nav>

            {/* Bottom copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.9, duration: 0.6 } }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              className="text-[11px] sm:text-xs text-white/30 font-mono tracking-widest mt-2 sm:mt-4 md:mt-0 md:self-end shrink-0"
            >
              © 2026 VAMSHI KUMAR
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
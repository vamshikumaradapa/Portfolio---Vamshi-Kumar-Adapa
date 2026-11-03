import { motion } from "framer-motion";
import FlowingMenu from "./FlowingMenu";

const skillCategories = [
  {
    link: "#",
    text: "TOOLS & PLATFORMS",
    items: [
      { name: "Kali Linux", url: "https://cdn.simpleicons.org/kalilinux" },
      { name: "Burp Suite", url: "https://cdn.simpleicons.org/burpsuite" },
      { name: "Nmap", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%2322c55e\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a10 10 0 0 1 10 10\"/><path d=\"m12 12 7-7\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/></svg>" },
      { name: "Wireshark", url: "https://cdn.simpleicons.org/wireshark" },
      { name: "Metasploit", url: "https://cdn.simpleicons.org/metasploit" },
      { name: "OWASP ZAP", url: "https://cdn.simpleicons.org/owasp/ffffff" },
      { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Visual Studio Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "VirtualBox", url: "https://cdn.simpleicons.org/virtualbox" },
      { name: "TryHackMe", url: "https://cdn.simpleicons.org/tryhackme/ea262a" },
      { name: "Hack The Box", url: "https://cdn.simpleicons.org/hackthebox" },
      { name: "PortSwigger Web Security Academy", url: "https://cdn.simpleicons.org/portswigger" },
      { name: "Arduino IDE", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
      { name: "Cisco Packet Tracer", url: "https://cdn.simpleicons.org/cisco" }
    ]
  },
  {
    link: "#",
    text: "TECHNOLOGIES & CONCEPTS",
    items: [
      { name: "Web Application Security", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%2338bdf8\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><path d=\"m9 12 2 2 4-4\"/></svg>" },
      { name: "Network Security", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23818cf8\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/><path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\"/><path d=\"M12 12V8\"/></svg>" },
      { name: "Reconnaissance", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23f59e0b\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"/><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"/><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"/><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"/></svg>" },
      { name: "Vulnerability Assessment", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23ef4444\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/></svg>" },
      { name: "OWASP Top 10", url: "https://cdn.simpleicons.org/owasp/ffffff" },
      { name: "Active Directory Security", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      { name: "TCP/IP Networking", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%2338bdf8\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\"/><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\"/><line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"/><line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"/></svg>" },
      { name: "Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "IoT Architecture", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%2310b981\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.55a11 11 0 0 1 14.08 0\"/><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"/><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"/><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"/></svg>" },
      { name: "MQTT", url: "https://cdn.simpleicons.org/mqtt/ffffff" },
      { name: "Sensor Integration", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23f59e0b\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m12 14 4-4\"/><path d=\"M3.34 19a10 10 0 1 1 17.32 0\"/></svg>" },
      { name: "Automation", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23a855f7\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2v4\"/><path d=\"M12 18v4\"/><path d=\"m4.93 4.93 2.83 2.83\"/><path d=\"m16.24 16.24 2.83 2.83\"/><path d=\"M2 12h4\"/><path d=\"M18 12h4\"/><path d=\"m4.93 19.07 2.83-2.83\"/><path d=\"m16.24 7.76 2.83-2.83\"/></svg>" }
    ]
  },
  {
    link: "#",
    text: "PROGRAMMING & TECHNICAL SKILLS",
    items: [
      { name: "C", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Embedded C", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg" },
      { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Bash", url: "https://cdn.simpleicons.org/gnubash/4EAA25" },
      { name: "HTML", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Arduino", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
      { name: "ESP32", url: "https://cdn.simpleicons.org/espressif" },
      { name: "ESP8266", url: "https://cdn.simpleicons.org/espressif" },
      { name: "UART", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%2338bdf8\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 7h.01\"/><path d=\"M17 7h.01\"/><path d=\"M7 17h.01\"/><path d=\"M17 17h.01\"/><path d=\"m9 12 2 2 4-4\"/></svg>" },
      { name: "I2C", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23f43f5e\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6h16\"/><path d=\"M4 12h16\"/><path d=\"M4 18h16\"/><circle cx=\"8\" cy=\"6\" r=\"2\" fill=\"%23f43f5e\"/><circle cx=\"16\" cy=\"12\" r=\"2\" fill=\"%23f43f5e\"/><circle cx=\"10\" cy=\"18\" r=\"2\" fill=\"%23f43f5e\"/></svg>" },
      { name: "SPI", url: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%238b5cf6\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M9 9h6v6H9z\"/><path d=\"M9 1v3\"/><path d=\"M15 1v3\"/><path d=\"M9 20v3\"/><path d=\"M15 20v3\"/><path d=\"M20 9h3\"/><path d=\"M20 14h3\"/><path d=\"M1 9h3\"/><path d=\"M1 14h3\"/></svg>" }
    ]
  }
];

const SkillsPhilosophy = () => {
  return (
    <section className="min-h-screen bg-white text-black font-sans flex flex-col justify-between pt-24 md:pt-28 lg:pt-32 pb-0 relative z-10">
      {/* 1. Three Focus Area Cards: Arranged in a single balanced horizontal row */}
      <div className="w-full px-6 md:px-10 lg:px-12 py-4 md:py-6 bg-white z-10 flex-1 flex flex-col justify-center">
        <div className="w-full max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch"
          >
            {/* Card 1: Penetration Testing */}
            <div className="bg-black text-white rounded-2xl p-5 sm:p-6 md:p-6 lg:p-7 flex flex-col justify-between text-left h-full border border-neutral-900 shadow-sm transition-all duration-300">
              <div>
                <div className="mb-3 md:mb-3.5">
                  <span className="inline-block text-[11px] font-mono font-medium px-2.5 py-0.5 border border-white/20 rounded text-white/70">
                    01
                  </span>
                </div>
                <h3 className="font-sans text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-white mb-2.5 md:mb-3">
                  Penetration Testing
                </h3>
                <p className="font-sans text-xs sm:text-[13px] md:text-sm text-neutral-400 leading-relaxed font-normal">
                  Hands-on experience in assessing web application and network security, performing reconnaissance, identifying vulnerabilities, and conducting security assessments through practical projects.
                </p>
              </div>
            </div>

            {/* Card 2: Entrepreneurship */}
            <div className="bg-black text-white rounded-2xl p-5 sm:p-6 md:p-6 lg:p-7 flex flex-col justify-between text-left h-full border border-neutral-900 shadow-sm transition-all duration-300">
              <div>
                <div className="mb-3 md:mb-3.5">
                  <span className="inline-block text-[11px] font-mono font-medium px-2.5 py-0.5 border border-white/20 rounded text-white/70">
                    02
                  </span>
                </div>
                <h3 className="font-sans text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-white mb-2.5 md:mb-3">
                  Entrepreneurship
                </h3>
              </div>

              {/* Startup Initiatives */}
              <div className="pt-2 md:pt-2.5 border-t border-white/10 flex flex-col gap-2.5 md:gap-3">
                <div>
                  <h4 className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white mb-1">
                    BioCycle Sanitary Napkins
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-normal">
                    Developing biodegradable sanitary napkins using agricultural waste materials as an eco-friendly alternative to conventional sanitary products.
                  </p>
                </div>
                <div className="pt-2 md:pt-2.5 border-t border-white/10">
                  <h4 className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white mb-1">
                    OxyWalls
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-normal">
                    Developing a wall-mounted indoor air purifier designed to improve indoor air quality through multi-layer filtration technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Internet of Things */}
            <div className="bg-black text-white rounded-2xl p-5 sm:p-6 md:p-6 lg:p-7 flex flex-col justify-between text-left h-full border border-neutral-900 shadow-sm transition-all duration-300">
              <div>
                <div className="mb-3 md:mb-3.5">
                  <span className="inline-block text-[11px] font-mono font-medium px-2.5 py-0.5 border border-white/20 rounded text-white/70">
                    03
                  </span>
                </div>
                <h3 className="font-sans text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-white mb-2.5 md:mb-3">
                  Internet of Things
                </h3>
                <p className="font-sans text-xs sm:text-[13px] md:text-sm text-neutral-400 leading-relaxed font-normal">
                  Built practical projects including Smart Health Monitoring, Smart Home Automation, Gas Leakage Detection, and VisionGuard Smart Stick, combining sensors, microcontrollers, and connected technologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. The three interactive ticker categories */}
      <div className="w-full border-t border-black relative overflow-hidden mt-auto">
        <FlowingMenu
          items={skillCategories}
          speed={3}
          marqueeBgColor="#000000"
        />
      </div>
    </section>
  );
};

export default SkillsPhilosophy;

import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface LeadershipRole {
  id: string;
  title: string;
  organization: string;
  description: string;
}

interface Certification {
  title: string;
  organization: string;
  logoUrl?: string;
  isOpswat?: boolean;
}

const leadershipRoles: LeadershipRole[] = [
  {
    id: "01",
    title: "Technical Council President",
    organization: "Viswam Innovation & Entrepreneurship Hub (V-Hub)",
    description:
      "Leading student-driven technical and innovation initiatives, encouraging participation in workshops, hackathons and startup programmes while coordinating with faculty and student teams.",
  },
  {
    id: "02",
    title: "Student Brand Ambassador",
    organization: "Idea Lab, Viswam Engineering College",
    description:
      "Promoting innovation and entrepreneurship among students through technical events, workshops, hackathons and campus outreach, while encouraging participation in startup and project activities.",
  },
  {
    id: "03",
    title: "Student Leader",
    organization: "PALS (Pan-IIT Alumni Leadership Series)",
    description:
      "Working with IIT alumni mentors and student teams, developing leadership, communication and coordination skills through collaborative initiatives and student-focused activities.",
  },
];

const certifications: Certification[] = [
  {
    title: "Ethical Hacker",
    organization: "Cisco Networking Academy",
    logoUrl: "https://cdn.simpleicons.org/cisco",
  },
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    logoUrl: "https://cdn.simpleicons.org/cisco",
  },
  {
    title: "Networking Basics",
    organization: "Cisco Networking Academy",
    logoUrl: "https://cdn.simpleicons.org/cisco",
  },
  {
    title: "Critical Infrastructure Protection (CIP)",
    organization: "OPSWAT Academy",
    isOpswat: true,
  },
  {
    title: "Cybersecurity Job Simulation",
    organization: "Mastercard / Forage",
    logoUrl: "https://cdn.simpleicons.org/mastercard",
  },
  {
    title: "Cyber Job Simulation",
    organization: "Deloitte Australia / Forage",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_of_Deloitte.svg",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    organization: "Tata / Forage",
    logoUrl: "https://cdn.simpleicons.org/tata",
  },
  {
    title: "Cloud Infrastructure and Services",
    organization: "NPTEL",
    logoUrl: "/nptel-logo.jpg",
  },
  {
    title: "IT Essentials: PC Hardware and Software",
    organization: "Cisco",
    logoUrl: "https://cdn.simpleicons.org/cisco",
  },
  {
    title: "Cybersecurity & OSINT",
    organization: "Savory Minds",
    logoUrl: "/savory-minds-logo.png",
  },
];

const MagicBento: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    const handlePointerDown = () => setIsDragging(true);
    const handlePointerUp = () => setIsDragging(false);

    api.on("pointerDown", handlePointerDown);
    api.on("pointerUp", handlePointerUp);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
      api.off("pointerDown", handlePointerDown);
      api.off("pointerUp", handlePointerUp);
    };
  }, [api, onSelect]);

  // Support trackpad horizontal gesture scrolling (deltaX)
  useEffect(() => {
    if (!api) return;
    const root = api.rootNode();
    if (!root) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        const engine = api.internalEngine();
        engine.scrollBody.useFriction(0.35).useDuration(0.75);
        engine.target.add(-e.deltaX);
        engine.animation.start();
      }
    };

    root.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      root.removeEventListener("wheel", handleWheel);
    };
  }, [api]);

  // Global cursor and text selection lock during active drag
  useEffect(() => {
    if (isDragging) {
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    } else {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }
    return () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  // Safety release if pointer leaves window during active drag
  useEffect(() => {
    const handleGlobalRelease = () => {
      setIsDragging(false);
    };
    window.addEventListener("mouseup", handleGlobalRelease);
    window.addEventListener("pointerup", handleGlobalRelease);
    return () => {
      window.removeEventListener("mouseup", handleGlobalRelease);
      window.removeEventListener("pointerup", handleGlobalRelease);
    };
  }, []);

  return (
    <section id="more-about-me" className="w-full bg-black text-white pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-24 md:pb-32 select-none relative z-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="mb-14 md:mb-18">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Leadership & Certifications
          </h2>
        </div>

        {/* Part 1: Leadership Section – Clean Editorial List */}
        <div className="mb-20 md:mb-28">
          <div className="divide-y divide-neutral-800 border-t border-b border-neutral-800">
            {leadershipRoles.map((role) => (
              <div
                key={role.id}
                className="py-8 sm:py-9 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start"
              >
                {/* Left Column: Role Title & Organization */}
                <div className="md:col-span-5">
                  <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 leading-snug">
                    {role.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-400 font-medium">
                    {role.organization}
                  </p>
                </div>

                {/* Right Column: Description */}
                <div className="md:col-span-7">
                  <p className="font-sans text-sm sm:text-[15px] md:text-base text-neutral-300 leading-relaxed font-normal">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Certifications – Compact Horizontal Strip */}
        <div>
          <div className="mb-8 flex items-center justify-between border-b border-neutral-800 pb-4">
            <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white">
              Certifications
            </h3>

            {/* Subtle Circular Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-label="Previous certifications"
                className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-400 hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                aria-label="Next certifications"
                className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-400 hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
              dragFree: true,
              containScroll: "trimSnaps",
              watchDrag: true,
            }}
            className={cn("w-full relative select-none", isDragging ? "cursor-grabbing" : "cursor-grab")}
          >
            <CarouselContent
              viewportClassName={cn("cursor-grab", isDragging && "cursor-grabbing")}
              className="-ml-4 sm:-ml-5"
            >
              {certifications.map((cert, idx) => (
                <CarouselItem
                  key={idx}
                  className={cn(
                    "basis-[78%] sm:basis-[42%] md:basis-[30%] lg:basis-[25%] xl:basis-[22%] pl-4 sm:pl-5 select-none",
                    isDragging ? "cursor-grabbing" : "cursor-grab"
                  )}
                >
                  <div
                    className={cn(
                      "bg-white border border-neutral-200/90 hover:border-neutral-400/80 rounded-xl p-5 flex flex-col justify-between h-[160px] sm:h-[170px] text-left transition-all duration-200 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] select-none",
                      isDragging ? "cursor-grabbing" : "cursor-grab"
                    )}
                    style={{ userSelect: "none", WebkitUserSelect: "none" }}
                    onDragStart={(e) => e.preventDefault()}
                  >
                    <div className="select-none pointer-events-none">
                      {/* Top row: Official Logo and Index */}
                      <div className="flex items-center justify-between mb-3.5 pointer-events-none select-none">
                        <div className="h-6 flex items-center pointer-events-none select-none">
                          {cert.isOpswat ? (
                            <svg viewBox="0 0 155 25" className="h-4 w-auto pointer-events-none select-none text-neutral-900" fill="currentColor">
                              <path d="M12 0C9.3 0 6.6.9 4.6 2.6v3.2C6.5 3.7 9.2 2.5 12 2.5c5 0 9.2 4.1 9.2 9.1v7.9c1.9-2.1 2.9-4.7 2.8-7.5.1-6.5-5.1-11.9-11.6-12H12z" />
                              <path d="M2.8 11.8V4.3C1 6.4-.1 9 0 11.8c-.1 6.5 5.1 11.9 11.6 12h.4c2.7 0 5.3-.9 7.4-2.6V18c-1.9 2.1-4.6 3.3-7.5 3.3-5.1 0-9.1-4.1-9.1-9.5zM40.1.4H32v23.1h2.7V2.8H40c3 0 4.6 1.9 4.6 4.3S43 11.4 40 11.4h-3.6v2.4h3.7c4.5 0 7.4-2.8 7.4-6.7S44.6.4 40.1.4zm26.9 5l2-1.5C67.4 1.5 64.7 0 61.9 0c-.9 0-1.7.1-2.5.4V3c.8-.3 1.6-.5 2.4-.5 2.1 0 4.1 1.1 5.2 2.9zM63.9 11l-2.6-1.2c-2.1-1-3.7-1.8-3.7-4.2V1.2c-1.8 1-2.8 2.8-2.8 4.9 0 3.3 2.5 4.9 5.2 6.2l2.6 1.2c2.3 1.1 3.9 1.9 3.9 4.4v4.7c1.8-1.1 2.9-3 2.8-5.1 0-3.2-2-4.9-5.4-6.5zm-8.5 6.4l-2 1.5c1.7 3.1 4.9 5 8.4 5 1 0 2-.2 3-.5v-2.6c-.9.3-1.9.5-2.9.5-3.1 0-5.1-1.8-6.5-3.9zM74.6.4l8.8 23.5h.9l1-2.4L77.6.4zm25.6 15.2l1.5 3.6 7-18.8h-3zM91.2 0L85 15.5l1.3 3.6 5.3-13.5 7.3 18.3h1.1l.8-2.3L92.1 0zM117 16.4l3.7-8.6-1.5-3.3-8.1 19h2.9l1.9-4.7h9.5l-1.1-2.4zM121.1 0l-1 2.2 9.1 21.3h2.9L122.1 0zm12.5.4h19v2.5h-19zm8.1 4.2h2.7v18.9h-2.7zm10.9 17h-.3v.5h.3c.1 0 .2-.1.2-.2 0-.2-.1-.3-.2-.3z" />
                              <path d="M152.6 20.3c-1 0-1.9.8-1.9 1.8s.8 1.9 1.8 1.9 1.9-.8 1.9-1.8-.8-1.8-1.8-1.9zm.4 2.8l-.5-.6h-.3v.6h-.4v-1.9h.8c.3 0 .6.2.7.6v.1c0 .2-.1.4-.3.5l.5.7h-.5z" />
                            </svg>
                          ) : cert.logoUrl === "/nptel-logo.jpg" ? (
                            <img
                              src={cert.logoUrl}
                              alt={cert.organization}
                              draggable={false}
                              className="h-5 w-auto object-contain pointer-events-none select-none"
                              style={{ WebkitUserDrag: "none" }}
                            />
                          ) : (
                            <img
                              src={cert.logoUrl}
                              alt={cert.organization}
                              draggable={false}
                              className="h-5 sm:h-5.5 w-auto max-w-[80px] object-contain pointer-events-none select-none"
                              style={{ WebkitUserDrag: "none" }}
                            />
                          )}
                        </div>
                        <span className="font-mono text-[11px] text-neutral-400 tracking-wider pointer-events-none select-none">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-sans text-sm sm:text-[14.5px] font-bold tracking-tight text-neutral-900 group-hover:text-black transition-colors duration-200 line-clamp-2 leading-snug pointer-events-none select-none">
                        {cert.title}
                      </h4>
                    </div>

                    {/* Bottom: Organization */}
                    <div className="pt-2.5 border-t border-neutral-100 flex items-center justify-between pointer-events-none select-none">
                      <span className="font-sans text-xs text-neutral-500 font-medium truncate max-w-[95%] pointer-events-none select-none">
                        {cert.organization}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default MagicBento;

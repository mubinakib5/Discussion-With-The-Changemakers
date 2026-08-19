"use client";

import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Modal from "../common/Modal";
import RegistrationClosed from "../common/RegistrationClosed";

// In Next.js, we need to use the public folder for images
const chapterImage = "/images/Chapter.png";
const dcWhiteLogo = "/images/DC White.png";
const heroImage = "/images/Hero.png";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const bannerRef = useRef(null);
  const isBannerVisible = useInView(bannerRef, { margin: "-100px" });

  // Set your event date here
  const eventDate = useMemo(() => new Date("2026-09-30T00:00:00"), []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      // If the date has passed, show zeros instead of negative values
      if (distance < 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleRegistrationClick = () => {
    // Show registration closed message
    setIsModalOpen(true);
  };

  const TimeBlock = useCallback(
    ({ value, label, delay }) => {
      return (
        <motion.div
          initial={false}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center px-4 bg-neutral-white/90 rounded-lg py-3"
        >
          <motion.div
            initial={false}
            className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"
          >
            {String(value).padStart(2, "0")}
          </motion.div>
          <div className="text-sm text-neutral-black/80 uppercase">{label}</div>
        </motion.div>
      );
    },
    [hasAnimated]
  );

  return (
    <>
      <section
        ref={sectionRef}
        id="hero"
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/80 to-brand-light/70" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start space-y-6"
            >
              <div className="w-full lg:w-auto">
                <img
                  src={dcWhiteLogo}
                  alt="Discussion with the Changemakers"
                  className="h-[80px] sm:h-[100px] md:h-[112px] w-auto object-contain"
                />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-lg sm:text-xl md:text-2xl text-neutral-white/90 max-w-xl"
              >
                A platform for change-makers to connect and create impact
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRegistrationClick}
                className="bg-neutral-white hover:bg-brand-light text-brand-primary hover:text-neutral-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300"
              >
                Registration Closed
              </motion.button>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:items-end h-full"
            >
              <div className="relative w-full flex justify-start lg:justify-end h-[100px] sm:h-[120px] md:h-[140px] overflow-hidden">
                <motion.div
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.9, 1, 1, 0.9],
                    x: [-20, 0, 0, 20],
                  }}
                  transition={{
                    duration: 4,
                    times: [0, 0.1, 0.9, 1],
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 flex justify-start lg:justify-end items-start"
                >
                  <img
                    src={chapterImage}
                    alt="Chapter"
                    className="h-[80px] sm:h-[100px] md:h-[112px] w-auto object-contain"
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 flex justify-start lg:justify-end items-start"
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.9, 1, 1, 0.9],
                    x: [20, 0, 0, -20],
                  }}
                  transition={{
                    duration: 4,
                    times: [0, 0.1, 0.9, 1],
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: 4,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex space-x-2 sm:space-x-4 md:space-x-6 scale-[0.85] sm:scale-100 origin-left lg:origin-right">
                    <TimeBlock value={timeLeft.days} label="Days" delay={0.3} />
                    <TimeBlock
                      value={timeLeft.hours}
                      label="Hours"
                      delay={0.4}
                    />
                    <TimeBlock
                      value={timeLeft.minutes}
                      label="Minutes"
                      delay={0.5}
                    />
                    <TimeBlock
                      value={timeLeft.seconds}
                      label="Seconds"
                      delay={0.6}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RegistrationClosed onClose={() => setIsModalOpen(false)} />
      </Modal>

      {/* Scrolling Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-brand-primary/90 backdrop-blur-sm overflow-hidden py-4"
      >
        <button onClick={handleRegistrationClick} className="w-full">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
            className="flex whitespace-nowrap hover:text-brand-light transition-colors cursor-pointer"
          >
            <span className="text-3xl font-bold text-neutral-white uppercase mx-4">
              Registration Closed
            </span>
            <span className="text-3xl font-bold text-neutral-white uppercase mx-4">
              Registration Closed
            </span>
          </motion.div>
        </button>
      </motion.div>
    </>
  );
};

export default Hero;

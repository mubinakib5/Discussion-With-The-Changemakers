"use client";

import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Modal from "../common/Modal";
import TeamRegistrationForm from "../common/TeamRegistrationForm";

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
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const bannerRef = useRef(null);
  const isBannerVisible = useInView(bannerRef, { margin: "-100px" });

  // Set your event date here
  const eventDate = useMemo(() => new Date("2025-07-31T00:00:00"), []);
  // Set registration opening date
  const registrationOpenDate = useMemo(
    () => new Date("2025-07-01T00:00:00"),
    []
  );

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

  // Check if registration is open
  useEffect(() => {
    const now = new Date().getTime();
    const registrationTime = registrationOpenDate.getTime();
    setIsRegistrationOpen(now >= registrationTime);
  }, [registrationOpenDate]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleRegistrationClick = () => {
    if (isRegistrationOpen) {
      setIsModalOpen(true);
    } else {
      // Show coming soon message
      setIsComingSoonModalOpen(true);
    }
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
                {isRegistrationOpen ? "Register Now" : "Coming Soon"}
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TeamRegistrationForm onClose={() => setIsModalOpen(false)} />
      </Modal>
      <Modal
        isOpen={isComingSoonModalOpen}
        onClose={() => setIsComingSoonModalOpen(false)}
      >
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-brand-primary rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-neutral-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold text-brand-primary mb-4"
            >
              Coming Soon!
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-neutral-gray mb-6"
            >
              Registration will open on{" "}
              <span className="font-semibold text-brand-primary">
                July 1, 2025
              </span>
              . Stay tuned for updates!
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <a
                href="https://www.facebook.com/discussionwiththechangemakers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-light transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/discussionwiththechangemakers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-light transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.369-.315-.49-.753-.49-1.243 0-.49.121-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.369.315.49.753.49 1.243 0 .49-.121.928-.49 1.243-.369.315-.807.49-1.297.49zm-7.83 12.968c-2.448 0-4.896-.928-6.62-2.652C1.725 15.431.797 12.983.797 10.535c0-2.448.928-4.896 2.652-6.62C5.173 2.191 7.621 1.263 10.069 1.263c2.448 0 4.896.928 6.62 2.652 1.724 1.724 2.652 4.172 2.652 6.62 0 2.448-.928 4.896-2.652 6.62-1.724 1.724-4.172 2.652-6.62 2.652z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/showcase/discussionwiththechangemakers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-light transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => setIsComingSoonModalOpen(false)}
              className="mt-8 bg-brand-primary hover:bg-brand-light text-neutral-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Got it!
            </motion.button>
          </div>
        </div>
      </Modal>
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
              {isRegistrationOpen
                ? "Registration Now Open!"
                : "Team Registration Will Be Opened Soon."}
            </span>
            <span className="text-3xl font-bold text-neutral-white uppercase mx-4">
              {isRegistrationOpen
                ? "Registration Now Open!"
                : "Team Registration Will Be Opened Soon."}
            </span>
          </motion.div>
        </button>
      </motion.div>
    </>
  );
};

export default Hero;

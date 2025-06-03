"use client";

import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { socialLinks } from "../../data";
import Modal from "../common/Modal";

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
  const eventDate = useMemo(() => new Date("2025-07-31T00:00:00"), []);

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
                onClick={() => setIsModalOpen(true)}
                className="bg-neutral-white hover:bg-brand-light text-brand-primary hover:text-neutral-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300"
              >
                Register Now
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
        <div className="text-center">
          <h3 className="text-2xl font-bold text-neutral-black mb-4">
            Registration Coming Soon!
          </h3>
          <p className="text-neutral-gray mb-8">
            Registration Link Will Be Opened Soon. Stay Tuned With Us For
            Further Updates
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-light transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-light transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-light transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </Modal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-brand-primary/90 backdrop-blur-sm overflow-hidden py-4"
      >
        <a
          href="https://forms.gle/fCY6JUTeyYYzcrQm7"
          target="_blank"
          rel="noopener noreferrer"
        >
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
            className="flex whitespace-nowrap hover:text-brand-light transition-colors"
          >
            <span className="text-3xl font-bold text-neutral-white uppercase mx-4">
              Our Campus Ambassador Program Has Been Launched. Apply Now
            </span>
            <span className="text-3xl font-bold text-neutral-white uppercase mx-4">
              Our Campus Ambassador Program Has Been Launched. Apply Now
            </span>
          </motion.div>
        </a>
      </motion.div>
    </>
  );
};

export default Hero;

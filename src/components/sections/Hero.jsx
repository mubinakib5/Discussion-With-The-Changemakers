import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import heroImage from "../../assets/Hero.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

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
  }, [isInView]);

  const TimeBlock = useCallback(
    ({ value, label, delay }) => {
      const animationRef = useRef(null);

      return (
        <motion.div
          ref={animationRef}
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
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/80 to-brand-light/70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-4xl md:text-6xl font-bold text-neutral-white mb-6"
        >
          Discussion With The Changemakers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-xl md:text-2xl text-neutral-white/90 mb-12 max-w-3xl mx-auto"
        >
          Join us in shaping the future through meaningful dialogue and action
        </motion.p>

        <div className="flex justify-center space-x-4 md:space-x-8 mb-12">
          <TimeBlock value={timeLeft.days} label="Days" delay={0.3} />
          <TimeBlock value={timeLeft.hours} label="Hours" delay={0.4} />
          <TimeBlock value={timeLeft.minutes} label="Minutes" delay={0.5} />
          <TimeBlock value={timeLeft.seconds} label="Seconds" delay={0.6} />
        </div>

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
          className="bg-neutral-white hover:bg-brand-light text-brand-primary hover:text-neutral-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
        >
          Register Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

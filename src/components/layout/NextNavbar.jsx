"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../../data";

const NextNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  
  const isHomePage = pathname === "/";
  // Force scrolled navbar style on non-homepage routes
  const forceScrolledStyle = !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsHeroSection(window.scrollY < window.innerHeight);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Check for stored section ID to scroll to after navigation
  useEffect(() => {
    if (isHomePage) {
      const scrollToSection = sessionStorage.getItem('scrollToSection');
      if (scrollToSection) {
        // Clear the stored section ID
        sessionStorage.removeItem('scrollToSection');
        // Small timeout to ensure the page is fully loaded
        setTimeout(() => {
          const element = document.getElementById(scrollToSection);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    }
  }, [isHomePage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (e, href) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    
    if (!isHomePage) {
      // If we're not on the homepage, navigate to homepage first using Next.js router
      router.push('/');
      // Store the section ID in sessionStorage to scroll after navigation
      sessionStorage.setItem('scrollToSection', sectionId);
    } else {
      // If we're already on the homepage, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Close mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || forceScrolledStyle ? "py-4 bg-white shadow-lg" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            {/* Replace with Next.js Image component */}
            <img
              src={isScrolled || !isHeroSection || forceScrolledStyle 
                ? "/images/DC Black.png" 
                : "/images/DC White.png"}
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div
              className={`rounded-full p-1.5 flex items-center mr-2 ${
                isScrolled || forceScrolledStyle ? "bg-neutral-100" : "bg-[#2A2A2A]"
              }`}
            >
              {navLinks
                .filter((link) => !link.isButton)
                .map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className={`relative px-4 py-2 text-[15px] rounded-full transition-colors group ${
                      isScrolled || forceScrolledStyle
                        ? "text-neutral-600 hover:text-neutral-900"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <div
                      className={`absolute bottom-0.5 left-4 right-4 h-0.5 transform origin-left transition-transform duration-300 ${
                        isScrolled || forceScrolledStyle ? "bg-brand-primary" : "bg-white"
                      } ${
                        activeSection === link.href.substring(1)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                ))}
            </div>
            {navLinks
              .filter((link) => link.isButton)
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className={`ml-2 px-6 py-2 ${
                    isScrolled || forceScrolledStyle
                      ? "bg-brand-primary hover:bg-brand-light text-white"
                      : isHeroSection
                      ? "bg-white text-brand-primary hover:bg-white/90"
                      : "bg-brand-primary hover:bg-brand-light text-white"
                  } rounded-full transition-colors flex items-center text-[15px] ${
                    activeSection === link.href.substring(1)
                      ? "ring-2 ring-offset-2 ring-brand-primary/30"
                      : ""
                  }`}
                >
                  {link.label}
                  <span className="ml-1">↗</span>
                </a>
              ))}
          </div>

          {/* Mobile menu button - Increased touch target */}
          <button
            className={`md:hidden p-4 -mr-4 touch-manipulation ${
              isScrolled ? "text-neutral-600" : "text-white"
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 transform transition-all duration-300 ${
                  isScrolled ? "bg-neutral-600" : "bg-white"
                } ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0"
                    : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 ${
                  isScrolled ? "bg-neutral-600" : "bg-white"
                } transition-opacity duration-200 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 transform transition-all duration-300 ${
                  isScrolled ? "bg-neutral-600" : "bg-white"
                } ${
                  isMobileMenuOpen
                    ? "-rotate-45 translate-y-0"
                    : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu - Full screen with better transitions */}
        <div
          className={`md:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
          } ${!isMobileMenuOpen && "pointer-events-none"}`}
        >
          <div className="h-full overflow-y-auto overscroll-contain pb-safe">
            <div className="max-w-lg mx-auto px-4 py-8 flex flex-col h-full">
              <div className="flex-1 space-y-2">
                {navLinks
                  .filter((link) => !link.isButton)
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 ${
                        activeSection === link.href.substring(1)
                          ? "bg-brand-primary text-white transform scale-[1.02]"
                          : "text-neutral-600 hover:bg-neutral-100"
                      }`}
                      onClick={(e) => handleNavigation(e, link.href)}
                    >
                      <span className="relative">
                        {link.label}
                        {activeSection === link.href.substring(1) && (
                          <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white" />
                        )}
                      </span>
                    </a>
                  ))}
              </div>
              {/* Contact button at bottom */}
              <div className="mt-8">
                {navLinks
                  .filter((link) => link.isButton)
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`block w-full py-4 px-6 text-center text-lg font-medium rounded-xl transition-all duration-200 ${
                        activeSection === link.href.substring(1)
                          ? "bg-brand-light text-white transform scale-[1.02]"
                          : "bg-brand-primary text-white hover:bg-brand-light"
                      }`}
                      onClick={(e) => handleNavigation(e, link.href)}
                    >
                      {link.label}
                      <span className="ml-1">↗</span>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NextNavbar;

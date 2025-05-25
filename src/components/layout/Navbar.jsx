import { useEffect, useState } from "react";
import logoBlack from "../../assets/DC Black.png";
import logoWhite from "../../assets/DC White.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Check if we're in the hero section (assuming hero height is 100vh)
      setIsHeroSection(window.scrollY < window.innerHeight);

      // Calculate which section is currently in view
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

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#why", label: "Why" },
    { href: "#timeline", label: "Timeline" },
    { href: "#participate", label: "Participate" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact", isButton: true },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-white shadow-lg" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src={isScrolled || !isHeroSection ? logoBlack : logoWhite}
              alt="Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div
              className={`rounded-full p-1.5 flex items-center mr-2 ${
                isScrolled ? "bg-neutral-100" : "bg-[#2A2A2A]"
              }`}
            >
              {navLinks
                .filter((link) => !link.isButton)
                .map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[15px] rounded-full transition-colors group ${
                      isScrolled
                        ? "text-neutral-600 hover:text-neutral-900"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {/* Active indicator */}
                    <div
                      className={`absolute bottom-0.5 left-4 right-4 h-0.5 transform origin-left transition-transform duration-300 ${
                        isScrolled ? "bg-brand-primary" : "bg-white"
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
                  className={`ml-2 px-6 py-2 ${
                    isScrolled
                      ? "bg-brand-primary hover:bg-brand-light text-white"
                      : isHeroSection
                      ? "bg-white text-brand-primary hover:bg-white/90"
                      : "bg-brand-primary hover:bg-brand-light text-white"
                  } rounded-full transition-colors flex items-center text-[15px] ${
                    activeSection === link.href.substring(1)
                      ? "ring-2 ring-offset-2 ring-brand-primary"
                      : ""
                  }`}
                >
                  {link.label}
                  <span className="ml-1">↗</span>
                </a>
              ))}
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-3 rounded-full ${
              isScrolled ? "bg-neutral-100" : "bg-[#2A2A2A]"
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`h-5 w-5 ${
                isScrolled ? "text-neutral-600" : "text-white"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed left-0 right-0 bottom-0 top-[72px] ${
            isScrolled ? "bg-white" : "bg-white/10 backdrop-blur-lg"
          } transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-x-4 bottom-8 ${
              isScrolled ? "bg-neutral-100" : "bg-[#2A2A2A]"
            } rounded-2xl p-4`}
          >
            <div className="space-y-2">
              {navLinks
                .filter((link) => !link.isButton)
                .map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 rounded-xl text-[15px] transition-colors relative ${
                      isScrolled
                        ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    } ${
                      activeSection === link.href.substring(1)
                        ? isScrolled
                          ? "bg-neutral-200"
                          : "bg-white/10"
                        : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative">
                      {link.label}
                      {activeSection === link.href.substring(1) && (
                        <span
                          className={`absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full ${
                            isScrolled ? "bg-brand-primary" : "bg-white"
                          }`}
                        />
                      )}
                    </span>
                  </a>
                ))}
            </div>
            {navLinks
              .filter((link) => link.isButton)
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2 mt-4 rounded-xl text-[15px] ${
                    isScrolled
                      ? "bg-brand-primary hover:bg-brand-light text-white"
                      : isHeroSection
                      ? "bg-white text-brand-primary hover:bg-white/90"
                      : "bg-brand-primary hover:bg-brand-light text-white"
                  } text-center transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "ring-2 ring-offset-2 ring-brand-primary"
                      : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  <span className="ml-1">↗</span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

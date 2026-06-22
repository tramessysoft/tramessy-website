import { useState, useEffect, useRef } from "react";
import { ChevronDown, LogIn, Menu, X } from "lucide-react";
import logo from "../../assets/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null); // Create a ref for the mobile menu container
  const menuButtonRef = useRef(null);
  const { t } = useTranslation();

  const navItems = [
    { name: t("nav.home"), href: "/", type: "link" },
    { name: t("nav.features"), href: "/features", type: "link" },
    { name: t("nav.pricing"), href: "/package-pricing", type: "link" },
    { name: t("nav.reviews"), href: "review", type: "scroll" },
    { name: t("nav.blog"), href: "/blog", type: "link" },
    { name: t("nav.about"), href: "/about-us", type: "link" },
    { name: t("nav.contact"), href: "/contact-us", type: "link" },
  ];
  // navbar window scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // routing/scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (item) => {
    if (item.type === "scroll") {
      if (location.pathname === "/") {
        // যদি হোমেই থাকি, সরাসরি স্ক্রল করব
        scrollToSection(item.href);
      } else {
        // অন্য পেজে থাকলে আগে হোমে গিয়ে তারপর স্ক্রল করাবো
        navigate("/");
        setTimeout(() => {
          scrollToSection(item.href);
        }, 500); // ডিলে দিতে হবে যাতে হোমে যাওয়ার সময় স্ক্রল মিস না হয়
      }
    } else {
      navigate(item.href);
      // স্ক্রল টপে যাও
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
  };

  const handleCtaClick = () => {
    navigate("/contact-us");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  // Effect to handle clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open and the click is not on the menu itself
      // and not on the button that opens/closes the menu
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener when component unmounts or menu closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); // Re-run effect when isMenuOpen changes

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="">
            <Link to="/">
              <img src={logo} alt="tramessy logo" style={{ height: "30px" }} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item)}
                className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                  location.pathname === item.href
                    ? "border-b-2 border-primary pb-1 "
                    : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-5">
              <div>
                <LanguageSwitcher />
              </div>
              {/* <Link to="/contact-us"> */}
              {/* <Link to="/signin">
              <button className="flex items-center gap-2 rounded-lg border border-card-border bg-surface px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-input">
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  Sign in
                </button>
                </Link> */}
              <button
                onClick={handleCtaClick}
                className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium transform hover:scale-105"
              >
                {t("nav.demo_book")}
              </button>
              {/* </Link> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-white border-t shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(item)}
                  className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                    location.pathname === item.href
                      ? "text-primary font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center gap-5">
                <div>
                  <LanguageSwitcher />
                </div>
                {/* <Link to="/contact-us"> */}
                {/* <button className="flex items-center gap-2 rounded-lg border border-card-border bg-surface px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-input">
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  Sign in
                </button> */}
                <button
                  onClick={handleCtaClick}
                  className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium transform hover:scale-105"
                >
                  {t("nav.demo_book")}
                </button>
              </div>
              {/* </Link> */}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

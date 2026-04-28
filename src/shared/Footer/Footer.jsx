import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Facebook, Linkedin, Instagram } from "lucide-react";
import carBg from "../../assets/image/carBg.jpeg";
import whiteLogo from "../../assets/logo-2.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import bms from "../../assets/logo/BMS Tech o.png";
import basis from "../../assets/logo/basis.webp";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    name: "facebook",
    icon: <Facebook />,
    url: "https://www.facebook.com/tramessy",
  },
  {
    name: "linkedin",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/company/tramessy/",
  },
  // {
  //   name: "instagram",
  //   icon: <Instagram />,
  //   url: "https://instagram.com/yourprofile",
  // },
];

export default function FooterSection() {
  const { t } = useTranslation();
  // const [email, setEmail] = useState("")

  // const handleEmailSubmit = (e) => {
  //   e.preventDefault()
  //   console.log("Email submitted:", email)
  //   setEmail("")
  // }
  const quickLinks = [
    { name: t("about.title"), path: "/about-us" },
    { name: t("nav.home"), path: "/" },
    { name: t("nav.pricing"), path: "/package-pricing" },
  ];

  const institutionLinks = [
    {
      name: t("footer.Company.about_company"),
      type: "page",
      path: "/about-us",
    },
    {
      name: t("footer.Company.services"),
      type: "section",
      path: "/about-us#service",
    },
    { name: t("footer.Company.contact"), type: "page", path: "/contact-us" },
    { name: t("footer.Company.partners"), type: "section", path: "/#partner" },
    { name: "Privacy Policy", type: "page", path: "/privacy-policy" },
    { name: "Terms of Service", type: "page", path: "/terms-of-service" },
    { name: "Refund Policy", type: "page", path: "/refund-policy" },
  ];
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom right,  #11375b, rgba(70,150,136,0.85)), url(${carBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {/* Company Info */}
          <div>
            <img src={whiteLogo} alt="" className="w-28" />

            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              {t("footer.title")}
              <p className="pt-4 border-t border-white/20">
                {t("footer.hotline")}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-5">
                <div>
                  <h1 className="text-sm ">A Product Of:</h1>
                  <img src={bms} alt="Basis" className="w-28 rounded" />
                </div>
                <div>
                  <h1 className="text-sm ">Member Of:</h1>
                  <img src={basis} alt="" className="w-28 rounded" />
                </div>
              </div>
              <div className="text-sm">
                <p>Trade License No. TRAD/DNCC/009194/2022</p>
                <p>TIN No. 341194158241</p>
                <p>VAT Reg. No. 0050990580101</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              {t("footer.Quick_links")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:text-teal-500 transition-colors duration-200"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institution Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              {t("footer.Company.Company")}
            </h3>
            <ul className="space-y-3">
              {institutionLinks.map((link, index) => (
                <li key={index}>
                  {link.type === "section" ? (
                    <HashLink
                      smooth
                      to={link.path}
                      className="text-sm opacity-90 hover:text-teal-500 transition-colors duration-200"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {link.name}
                    </HashLink>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm opacity-90 hover:text-teal-500 transition-colors duration-200"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              {t("footer.Company.contact")}
            </h3>

            <div className="space-y-4 mb-8 text-sm">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal-500" />
                <p>info@tramessy.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-500" />
                <div>
                  <p>09666-700722</p>
                  {/* <p>+880 1730-797262</p> */}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-teal-500" />
                <div>
                  <p>+880 1627-355382</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-500" />
                <div>
                  <p>{t("footer.address")}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 text-gray-600 hover:text-white transition"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            {/* <p className="text-sm mb-4">বিশেষ অফার ও আপডেট পেতে আমাদের সঙ্গে থাকুন।</p>
            <form onSubmit={handleEmailSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল"
                className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
                disabled
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary/80 rounded-r-lg transition-colors duration-200 disabled:cursor-not-allowed"
                disabled
              >
                <Send className="w-5 h-5" />
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

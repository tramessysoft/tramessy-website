
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") ;
    if (savedLang && savedLang !== lang) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang);
    }else if (!savedLang) {
      i18n.changeLanguage("en"); // default English
      localStorage.setItem("lang", "en");
      setLang("en");
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "bn" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-2 md:px-3 py-1 border rounded-md text-sm font-medium hover:bg-primary hover:text-white transition flex gap-2 items-center"
    >
     {/* Flag Icon */}
      
        {lang === "bn" ? <img width={18} src="https://i.ibb.co.com/8gt0hPd9/united-states.png" alt="GB"/> : <img width={18} src="https://i.ibb.co.com/WNBt536S/bangladesh.png" alt="bd"/>}
    
      {lang === "bn" ? "EN" : "বাংলা"}
    </button>
  );
}


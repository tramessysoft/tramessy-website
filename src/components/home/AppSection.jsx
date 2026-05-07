import { useState} from 'react';
import { useTranslation } from "react-i18next";
import mobileImg from "../../assets/image/mobileV-.png"
import QRCode from "react-qr-code";
const AppDownloadSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
const {t} = useTranslation()
const apkUrl = `${window.location.origin}/tramessy.apk`;
 const handlePlayStoreClick = () => {
  setIsDownloading(true);

  const link = document.createElement("a");
  link.href = "/tramessy.apk";
  link.setAttribute("download", "tramessy.apk");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    setIsDownloading(false);
  }, 2000);
};

  return (
    <section id="download" className="w-full py-20 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("app-download.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("app-download.description")}
          </p>
        </div>

        {/* Main Download Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - App Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[200px]">
              <div className="absolute inset-0 "></div>
              <img
                src={mobileImg}
                alt="Tramessy App Interface"
                className="relative w-full rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Right Side - Download Info */}
          <div className="flex flex-col items-center lg:items-start">
             {/* QR Code */}
            <div className="bg-white p-4 rounded-2xl shadow-lg mb-6">
              <QRCode
                value={apkUrl}
                size={180}
              />
            </div>

            <p className="text-gray-600 text-sm text-center lg:text-left">
              {t("app-download.scan")}
            </p>
            <p className="text-gray-600 text-sm my-5 !text-center">{t("app-download.or")},</p>
           
            {/* Download Button */}
            <div className="">
              <button
                onClick={handlePlayStoreClick}
                disabled={isDownloading}
                className="w-full bg-secondary disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 disabled:scale-100 shadow-lg flex items-center justify-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-1.609-.786V2.6c0-.643.527-1.179 1.179-1.179.3 0 .579.116.788.325z" />
                  <path d="M14.955 2.41l5.977 5.977c.326.326.51.768.51 1.23 0 .463-.184.904-.51 1.23l-5.977 5.977m0-14.414l5.977 5.977m0 2.46l-5.977 5.977" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                {isDownloading ? `${t("app-download.downloading")}...` : t('app-download.download')}
              </button>
              <p className="text-center text-gray-600 text-sm mt-3">
                APK file • {70} MB
              </p>
            </div>

            {/* Additional Info */}
            {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-gray-700">
                <span className="font-semibold">Available on:</span> Android 6.0 and above
              </p>
            </div> */}
            </div>
        </div>

        {/* Secondary Features Banner */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '50+', label: t('app-download.user') },
            //   { number: '10K+', label: 'Daily Deliveries' },
              { number: '4.8★', label: t('app-download.rate') }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;

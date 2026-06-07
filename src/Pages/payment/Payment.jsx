import { useState } from "react";

// Payment image - replace this import path with your actual image path
import paymentImg from "../../assets/image/payment-bangla.jpeg";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
const Payment = () => {
  const [activeTab, setActiveTab] = useState("qr");
  const [copied, setCopied] = useState(false);
  const location = useLocation();
   const { t} = useTranslation();

  const planAmount = location.state?.amount || "";
  const planName = location.state?.planName || "";

  const [amount, setAmount] = useState(planAmount);

  const merchantInfo = {
    name: "TRAMESSY",
    merchantId: "400000000042717",
    terminalId: "81005181",
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
     <Helmet>
        <title>Payment | Tramessy - Transport Management Software</title>
        <meta
          name="description"
          content="Pay securely for your Tramessy transport management software subscription via BRAC Bank Bangla QR, VISA, or Mastercard."
        />
        <meta
          name="keywords"
          content="Tramessy payment, transport software subscription payment Bangladesh, BRAC Bank QR payment, fleet software billing"
        />
      </Helmet>
      <section
      id="payment"
      className="w-full min-h-screen pb-20 pt-32"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #fef9f0 100%)",
      }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"></span>
            <span className="text-primary text-sm font-semibold tracking-wide">
                {t('payment.secureGateway')}
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            {t('payment.payVia')}{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #11375b, #14b8a6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t('payment.paySmart')}
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t('payment.description')}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Payment Poster Image */}
          <div className="flex flex-col items-center">
            <div
              className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white"
              //   style={{
              //     background: "linear-gradient(160deg, #1a56db 0%, #0e3a9a 100%)",
              //   }}
            >
              {/* Decorative top band */}

              {/* Replace src below with your actual image import */}
              <img
                src={paymentImg}
                alt="BRAC Bank PaySmart QR"
                className="w-full h-auto object-contain rounded-3xl"
                style={{ minHeight: "420px", objectFit: "cover" }}
              />

              {/* Shimmer overlay effect */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
                }}
              ></div>
            </div>

            {/* Accepted Cards */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-gray-400 text-sm">Accepted:</span>
              <div className="flex gap-3 items-center">
                <div className="bg-white rounded-lg px-3 py-1.5 shadow text-blue-700 font-extrabold tracking-widest text-sm">
                  VISA
                </div>
                <div className="bg-white rounded-lg px-3 py-1.5 shadow flex items-center gap-1">
                  <div className="w-5 h-5 rounded-full bg-red-500 opacity-90"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-500 opacity-90 -ml-2"></div>
                  <span className="text-gray-700 text-xs font-semibold ml-1">
                    MC
                  </span>
                </div>
                <div className="bg-white rounded-lg px-3 py-1.5 shadow text-green-700 font-bold text-xs">
                  Bangla QR
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Payment Details */}
          <div className="flex flex-col gap-5">
            {/* Merchant Info Card */}
            <div
              className="rounded-2xl p-6 shadow-lg border border-blue-100"
              style={{ background: "white" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #11375b, #14b8a6)",
                  }}
                >
                  BB
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">BRAC Bank</p>
                  <p className="text-gray-400 text-xs">{t('payment.confidenceEndless')}</p>
                </div>
                <div className="ml-auto">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {t('payment.verifiedMerchant')}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: t('payment.merchantName'), value: merchantInfo.name },
                  { label: t('payment.merchantId'), value: merchantInfo.merchantId },
                  { label: t('payment.terminalId'), value: merchantInfo.terminalId },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-2.5 px-3 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <span className="text-gray-500 text-sm">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 font-semibold text-sm font-mono">
                        {item.value}
                      </span>
                      <button
                        onClick={() => handleCopy(item.value)}
                        className="text-blue-400 hover:text-blue-600 transition-colors"
                        title="Copy"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {copied && (
                <p className="text-green-600 text-xs text-center mt-3 font-medium">
                  {t('payment.copied')}
                </p>
              )}
            </div>

            {/* Amount Input */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <label className="block text-gray-700 font-semibold text-sm mb-2">
                {t('payment.paymentAmount')}
              </label>
              <div className="relative">
            
                <p className="text-gray-500 text-sm mt-2">
                  {t('payment.youArePaying')}{" "}
                  <span className="text-blue-600 font-bold">
                    ৳{Number(amount).toLocaleString("bn-BD")}
                  </span>{" "}
                  {t('payment.forPlan')} <span className="font-semibold">{planName} {t('payment.plan')}</span>
                </p>
              </div>
              {/* {amount && (
                <p className="text-gray-500 text-sm mt-2">
                  You are paying{" "}
                  <span className="text-blue-600 font-bold">
                    ৳{Number(amount).toLocaleString("bn-BD")}
                  </span>{" "}
                  to TRAMESSY
                </p>
              )} */}
            </div>

            {/* How to Pay Steps */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="font-bold text-gray-800 mb-4 text-sm tracking-wide uppercase">
                {t('payment.howToPay')}
              </h3>
              <div className="space-y-3">
                {[
                  {
                    step: "1",
                    text: t('payment.step1'),
                  },
                  { step: "2", text: t('payment.step2') },
                  { step: "3", text: t('payment.step3') },
                  { step: "4", text: t('payment.step4') },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, #11375b, #14b8a6)",
                      }}
                    >
                      {item.step}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4">
              <svg
                className="w-8 h-8 text-green-600 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div>
                <p className="text-green-800 font-semibold text-sm">
                  {t('payment.securePayment')}
                </p>
                <p className="text-green-600 text-xs">
                  {t('payment.securePaymentDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "50+", label: t('payment.activeUsers') },
              { number: "4.8★", label: t('payment.customerRating') },
              { number: "100%", label: t('payment.secureTransactions') },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-extrabold text-gray-700">
                  {stat.number}
                </p>
                <p className="text-gray-500 mt-1 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default Payment;

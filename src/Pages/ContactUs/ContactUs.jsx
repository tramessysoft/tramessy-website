

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Truck,
  Users,
  MessageCircle,
} from 'lucide-react';
import PageHero from '../../components/helpingComp/PageHero';
import { useInView } from '../../shared/hooks/UseInView';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';


const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

const Input = ({
  label,
  name,
  type = 'text',
  required = false,
  value,
  placeholder,
  onChange,
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label} {required && '*'}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      //   required={required}
      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);

const ContactUs = () => {
  const [formRef, isFormInView] = useInView({ threshold: 0.1 })
  const [infoRef, isInfoInView] = useInView({ threshold: 0.1 })
  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে ✅");
          setFormData(initialFormState);
        },
        (error) => {
          console.error("Email send error:", error);
          alert("দুঃখিত, বার্তা পাঠানো যায়নি ❌");
        }
      );
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "8801627355382"; // 🔴 যেই নাম্বারে যাবে (country code সহ)

    const message = `
📌 Demo Request

👤 নাম: ${formData.firstName}
📧 ইমেইল: ${formData.email}
📞 ফোন: ${formData.phone}
🏢 প্রতিষ্ঠান: ${formData.company || "N/A"}

📝 বার্তা:
${formData.message}
  `;

    const encodedMessage = encodeURIComponent(message.trim());

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };
const { t } = useTranslation()
  // page hero
  const breadcrumbs = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.contact") },
  ]

  return (
    <>
    <Helmet>
        <title>Contact Us | Tramessy - Transport Management Software</title>
        <meta
          name="description"
          content="Get in touch with Tramessy for transport management software support, demo requests, or inquiries. Call, email, or message us directly from Bangladesh."
        />
        <meta
          name="keywords"
          content="contact Tramessy, transport software support Bangladesh, fleet management helpline, logistics software demo BD"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/*  Header */}
      <PageHero title={t("nav.contact")} breadcrumbs={breadcrumbs} />
      {/* ✅ Main Section */}
      <main className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        {/* 🔹 Contact Info */}
        <section ref={infoRef} className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t("contact.title")}</h2>
            <p className="text-gray-600 text-sm">
             {t("contact.description")}
            </p>
          </div>

          {/* Cards */}
          {[
            {
              icon: <Phone className="h-6 w-6 text-blue-600" />,
              label: t("contact.phone"),
              details: ['09666-700722', '+880 1627-355382'],
              bg: 'bg-blue-100',
            },
            {
              icon: <Mail className="h-6 w-6 text-green-600" />,
              label: t("contact.email"),
              details: ['support@tramessy.com', 'info@tramessy.com'],
              bg: 'bg-green-100',
            },
            {
              icon: <MapPin className="h-6 w-6 text-purple-600" />,
              label: t("contact.location"),
              details: [t('contact.address')],
              bg: 'bg-purple-100',
            },
            {
              icon: <Clock className="h-6 w-6 text-orange-600" />,
              label: t("contact.time"),
              details: [
                t('contact.working_hours'),
              ],
              bg: 'bg-orange-100',
            },
          ].map((info, idx) => (
            <div
              key={idx}
              className={`flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow ${isInfoInView ? "animate-fade-in-left" : "opacity-0"}`}
              style={{ animationDelay: isInfoInView ? "0.2s" : "0s" }}
            >
              <div className={`${info.bg} p-3 rounded-full`}>{info.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                {info.details.map((line, i) => (
                  <p key={i} className="text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-2 gap-6 pt-6">
            {[
              {
                icon: <Truck className="h-8 w-8 mx-auto mb-2" />,
                label: 'সন্তুষ্ট গ্রাহক',
                value: '১০০০+',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: <Users className="h-8 w-8 mx-auto mb-2" />,
                label: 'গাড়ি ম্যানেজ করা হচ্ছে',
                value: '৫০০০+',
                color: 'from-green-500 to-green-600',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center p-6 bg-gradient-to-r ${stat.color} text-white rounded-xl`}
              >
                {stat.icon}
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </section>

        {/* 🔹 Contact Form */}
        <section ref={formRef} className={`bg-white rounded-2xl shadow-2xl p-8 ${isFormInView ? "animate-fade-in-left" : "opacity-0"}`}>
          <div className="text-center mb-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("contact.title")}
            </h3>
            <p className="text-gray-600 text-xs">
              {t("contact.formDescription")}
            </p>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            sendToWhatsApp();
          }} className="space-y-6">
            {/* Name Row */}
            <div className="">
              <Input
                label={t("contact.form.name")}
                name="firstName"
                required
                value={formData.firstName}
                placeholder={t("contact.form.namePlaceholder")}
                onChange={handleInputChange}
              />
            </div>

            {/* Email + Phone */}
            <Input
              label={t("contact.email")}
              name="email"
              type="email"
              required
              value={formData.email}
              placeholder={t("contact.form.emailPlaceholder")}
              onChange={handleInputChange}
            />

            <Input
              label={t("contact.form.phone")}
              name="phone"
              type="tel"
              required
              value={formData.phone}
              placeholder={t("contact.form.phonePlaceholder")}
              onChange={handleInputChange}
            />

            {/* Company + Subject */}
            <Input
              label={t("contact.form.company")}
              name="company"
              value={formData.company}
              placeholder={t("contact.form.companyPlaceholder")}
              onChange={handleInputChange}
            />

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                {t("contact.form.message")} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t("contact.form.messagePlaceholder")}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-teal-600 hover:from-primary hover:to-primary/40 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-[1.02] flex items-center justify-center"
            >
              <Send className="mr-2 h-5 w-5" />
              {t("contact.form.submit")}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            {t("contact.form.formFooter")}
          </div>
        </section>
      </main>
    </div>
    </>
    
  );
};

export default ContactUs;

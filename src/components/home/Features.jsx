
import { useState } from "react"
import {
  Users,
  ClipboardList,
  Wallet,
  Gift,
  Wrench,
  BarChart3,
  UsersRound,
  ShieldCheck,
  FileText,
  CalendarCheck,
  MapPin,
  SmilePlus,
  Wallet2,
  Settings,
  Bell,
  Route,
  Ticket,
  Bus,
  FileCheck2,
  UserCog,
  BusFront,
  Fuel,
  ShieldCheckIcon,

} from "lucide-react";
import { useInView } from "../../shared/hooks/UseInView";

export default function FeaturesSection() {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
    const tabs = [
    { id: "ট্রাক/কভার্ড ভ্যান", name: "ট্রাক/কভার্ড ভ্যান" },
    { id: "রেন্ট এ কার", name: "রেন্ট এ কার" },
    { id: "বাস অপারেটর", name: "বাস অপারেটর" },
    { id: "করপোরেট ফ্লিট", name: "করপোরেট ফ্লিট" },
  ]
  const [activeTab, setActiveTab] = useState(() => tabs[0]?.id || "")

  
const featureData = {
  "ট্রাক/কভার্ড ভ্যান": {
    features: [
      {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "গাড়ি ও ড্রাইভার ব্যবস্থাপনা ",
      bgColor: "bg-teal-100",
      iconBg: "bg-teal-500",
    },
    {
      icon: <ClipboardList className="w-5 h-5 text-white" />,
      title: "বুকিং ও ট্রিপ ম্যানেজমেন্ট ",
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-500",
    },
    {
      icon: <Wallet className="w-5 h-5 text-white" />,
      title: "ইনকাম ও এক্সপেন্স ম্যানেজমেন্ট ",
      bgColor: "bg-purple-100",
      iconBg: "bg-purple-500",
    },
    {
      icon: <Gift className="w-5 h-5 text-white" />,
      title: "ডিউস ও পেমেন্ট ট্র্যাকিং ",
      bgColor: "bg-green-100",
      iconBg: "bg-green-500",
    },
    {
      icon: <Wrench className="w-5 h-5 text-white" />,
      title: "সার্ভিসিং, যন্ত্রাংশ পরিবর্তন ",
      bgColor: "bg-orange-100",
      iconBg: "bg-orange-500",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      title: "রিপোর্টিং ও এনালাইটিক্স",
      bgColor: "bg-indigo-100",
      iconBg: "bg-indigo-500",
    },
    {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "ইউজার ম্যানেজমেন্ট ও অ্যাক্সেস কন্ট্রোল",
    bgColor: "bg-red-100",
    iconBg: "bg-red-500",
  },
  {
    icon: <UsersRound className="w-6 h-6 text-white" />,
    title: "কাস্টমার ও ডিলার ম্যানেজমেন্ট ",
    bgColor: "bg-cyan-100",
    iconBg: "bg-cyan-500",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "বিলিং ",
     bgColor: "bg-orange-100",
    iconBg: "bg-orange-500",
  },
    ],
    contentTitle: "ট্রাক/কভার্ড ভ্যান ব্যবসায় ট্র্যামেসির ভূমিকা ও কার্যকারিতা",
    contentText: "ট্রাক/কাভার্ড ভ্যান ব্যবসায় ট্র্যামেসি সফটওয়্যার একটি গেমচেঞ্জার। এটি পরিবহন ব্যবসায়ের প্রতিটি ধাপে  স্বচ্ছতা ও দক্ষতা আনে, যা সময় ও খরচ দুটোই সাশ্রয় করে এবং ব্যবসার ২০-৩০%  আয় বৃদ্ধি করে।",
  },
  "রেন্ট এ কার": {
    features: [
      {
    icon: <CalendarCheck className="w-6 h-6 text-white" />,
    title: "বুকিং ও রিজার্ভেশন ",
    bgColor: "bg-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    icon: <Wrench className="w-6 h-6 text-white" />,
    title: "মেইনটেনেন্স ও সার্ভিসিং",
    bgColor: "bg-green-100",
    iconBg: "bg-green-500",
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "জি.পি.এস ট্র্যাকিং ও মনিটরিং ",
    bgColor: "bg-indigo-100",
    iconBg: "bg-indigo-500",
  },
  {
    icon: <SmilePlus className="w-6 h-6 text-white" />,
    title: "গ্রাহক সম্পর্ক ব্যবস্থাপনা (CRM) ",
    bgColor: "bg-pink-100",
    iconBg: "bg-pink-500",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "ড্রাইভার ম্যানেজমেন্ট ",
    bgColor: "bg-orange-100",
    iconBg: "bg-orange-500",
  },
  {
    icon: <Wallet2 className="w-6 h-6 text-white" />,
    title: "আর্থিক ব্যবস্থাপনা ও বিলিং ",
    bgColor: "bg-yellow-100",
    iconBg: "bg-yellow-500",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "ইউজার ম্যানেজমেন্ট ও অ্যাক্সেস কন্ট্রোল ",
    bgColor: "bg-red-100",
    iconBg: "bg-red-500",
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: "সেটিংস ও কনফিগারেশন ",
    bgColor: "bg-cyan-100",
    iconBg: "bg-cyan-500",
  },
  {
    icon: <Bell className="w-6 h-6 text-white" />,
    title: "নোটিফিকেশন ",
    bgColor: "bg-purple-100",
    iconBg: "bg-purple-500",
  },
    ],
     contentTitle:  "রেন্ট এ কার ব্যবসায় ট্র্যামেসির ভূমিকা ও কার্যকারিতা",
    contentText: "একটি কার্যকর ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার রেন্ট-এ-কার ব্যবসাকে একটি আধুনিক, সংগঠিত এবং গ্রাহক-কেন্দ্রিক প্রতিষ্ঠানে রূপান্তরিত করতে পারে, যা বর্তমান প্রতিযোগিতামূলক বাজারে টিকে থাকার জন্য অত্যন্ত জরুরি।",
  },
  "বাস অপারেটর": {
    features: [
     {
    icon: <Route className="w-6 h-6 text-white" />,
    title: "রুট এবং সময়সূচী ব্যবস্থাপনা ",
    bgColor: "bg-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    icon: <Ticket className="w-6 h-6 text-white" />,
    title: "টিকিট ও রিজার্ভেশন ব্যবস্থাপনা ",
    bgColor: "bg-green-100",
    iconBg: "bg-green-500",
  },
  {
    icon: <Bus className="w-6 h-6 text-white" />,
    title: "ফ্লিট ম্যানেজমেন্ট ",
    bgColor: "bg-orange-100",
    iconBg: "bg-orange-500",
  },
  {
    icon: <Wrench className="w-6 h-6 text-white" />,
    title: "রক্ষণাবেক্ষণ ও সার্ভিসিং ব্যবস্থাপনা ",
    bgColor: "bg-indigo-100",
    iconBg: "bg-indigo-500",
  },
  {
    icon: <UsersRound className="w-6 h-6 text-white" />,
    title: "ড্রাইভার ও স্টাফ ম্যানেজমেন্ট ",
    bgColor: "bg-pink-100",
    iconBg: "bg-pink-500",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    title: "আর্থিক ব্যবস্থাপনা ও বিলিং ",
    bgColor: "bg-yellow-100",
    iconBg: "bg-yellow-500",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "যাত্রী ডেটা অ্যানালিটিক্স ",
    bgColor: "bg-cyan-100",
    iconBg: "bg-cyan-500",
  },
  {
    icon: <SmilePlus className="w-6 h-6 text-white" />,
    title: "গ্রাহক সম্পর্ক ব্যবস্থাপনা ",
    bgColor: "bg-teal-100",
    iconBg: "bg-teal-500",
  },
  {
    icon: <FileCheck2 className="w-6 h-6 text-white" />,
    title: "আইনগত সম্মতি ও ডকুমেন্টেশন ",
    bgColor: "bg-red-100",
    iconBg: "bg-red-500",
  },
    ],
    contentTitle:  "বাস ব্যবসায় ট্র্যামেসির ভূমিকা ও কার্যকারিতা",
    contentText: "বাস ব্যবসা, যেখানে যাত্রী পরিবহন একটি প্রধান অংশ, সেখানে ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার (TMS) অপরিহার্য ভূমিকা পালন করে। এটি এই খাতের জটিল অপারেশনগুলোকে সহজ, দক্ষ এবং লাভজনক করে তুলতে সাহায্য করে। বাস ব্যবসায় TMS-এর প্রধান ভূমিকা হলো একটি সমন্বিত প্ল্যাটফর্ম তৈরি করা যা বাস ফ্লিট, রুট, সময়সূচী, ড্রাইভার, যাত্রী এবং আর্থিক লেনদেনকে ডিজিটালি পরিচালনা করে। এটি ম্যানুয়াল প্রক্রিয়াগুলির সাথে সম্পর্কিত ত্রুটি, সময় অপচয় এবং অসঙ্গতি কমিয়ে আনে।",
  },
  "করপোরেট ফ্লিট": {
    features: [
      {
    icon: <BusFront className="w-6 h-6 text-white" />,
    title: "ফ্লিট এবং অ্যাসেট ম্যানেজমেন্ট ",
    bgColor: "bg-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    icon: <Wrench className="w-6 h-6 text-white" />,
    title: "রক্ষণাবেক্ষণ ব্যবস্থাপনা ",
    bgColor: "bg-green-100",
    iconBg: "bg-green-500",
  },
  {
    icon: <UserCog className="w-6 h-6 text-white" />,
    title: "ড্রাইভার ম্যানেজমেন্ট ",
    bgColor: "bg-orange-100",
    iconBg: "bg-orange-500",
  },
  {
    icon: <Fuel className="w-6 h-6 text-white" />,
    title: "জ্বালানি ব্যবস্থাপনা ",
    bgColor: "bg-yellow-100",
    iconBg: "bg-yellow-500",
  },
  {
    icon: <ShieldCheckIcon className="w-6 h-6 text-white" />,
    title: "কমপ্লায়েন্স ও রেগুলেটরি ",
    bgColor: "bg-red-100",
    iconBg: "bg-red-500",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    title: "আর্থিক ও রিপোর্টিং ",
    bgColor: "bg-teal-100",
    iconBg: "bg-teal-500",
  },
  {
    icon: <Route className="w-6 h-6 text-white" />,
    title: "রুট পরিকল্পনা ও অপ্টিমাইজেশন ",
    bgColor: "bg-indigo-100",
    iconBg: "bg-indigo-500",
  },
  {
    icon: <FileCheck2 className="w-6 h-6 text-white" />,
    title: "ডিজিটাল POD ",
    bgColor: "bg-cyan-100",
    iconBg: "bg-cyan-500",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "রিপোর্টিং ও অ্যানালিটিক্স ",
    bgColor: "bg-purple-100",
    iconBg: "bg-purple-500",
  },
    ],
    contentTitle: "করপোরেট ফ্লিট কিংবা ডিষ্ট্রিবিউশনে ট্র্যামেসির ভূমিকা ও কার্যকারিতা",
    contentText: `করপোরেট ফ্লিট (Corporate Fleet) এবং ডিস্ট্রিবিউশন (Distribution) উভয় ক্ষেত্রেই ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার (TMS) এর ভূমিকা অত্যন্ত গুরুত্বপূর্ণ। এই দুটি ক্ষেত্রই পণ্য বা পরিষেবার নির্বিঘ্ন চলাচল নিশ্চিত করার জন্য পরিবহন ব্যবস্থাপনার উপর নির্ভরশীল। TMS এই প্রক্রিয়াগুলোকে আধুনিকীকরণ, অপ্টিমাইজেশন এবং স্বয়ংক্রিয়করণের মাধ্যমে ব্যবসাগুলোকে আরও দক্ষ ও লাভজনক করে তোলে।`,
  },
}

  const { features = [], contentTitle="", contentText = "" } = featureData[activeTab] || {};


  return (
    <section className="py-20 ">
      <div ref={sectionRef} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-2xl lg:text-3xl font-bold text-gray-700 mb-6 ${isSectionInView ? "animate-fade-up" : "opacity-0"}`}>যে সকল ট্রান্সপোর্ট  ব্যবসা প্রতিষ্ঠানের জন্য <span className="text-primary">ট্র্যামেসি</span> প্রযোজ্য</h2>
          <p className={`text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}
          style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}
          >
            আপনার ট্রান্সপোর্ট  ব্যবসা প্রতিষ্ঠান যেমন ই হোক, ব্যবসায়িক কার্যক্রম দ্রুত এবং দক্ষতার সাথে ডিজিটাল উপায়ে পরিচালনার জন্য আপনার সাথে রয়েছে ট্র্যামেসি
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
        style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

      </div>
      <div className="bg-blue-50">
        {/* Content Grid */}
        <div ref={sectionRef} className="container mx-auto grid lg:grid-cols-3 gap-5 items-start py-16">
          {/* Features Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-md p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group flex items-center gap-2 ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
                  style={{ animationDelay: isSectionInView ? `${0.4 + index * 0.1}s` : "0s" }}
                >
                  <div
                    className={`p-1.5 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={`w-8 h-8 ${feature.iconBg} rounded-xl flex items-center justify-center`}>
                      <span className="text-white text-lg">{feature.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Content Text */}
          <div className={`lg:col-span-1 ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className={`bg-white rounded-md p-6 shadow-sm`}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{contentTitle}</h3>
              <p className="text-gray-600 leading-relaxed text-justify">{contentText}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

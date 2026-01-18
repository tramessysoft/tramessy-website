
import {
  CuboidIcon as Cube,
  Settings,
  MessageSquare,
  Database,
  Puzzle,
  CalendarCheck,
  UserCog,
  Truck,
  DollarSign,
  Fuel,
  CreditCard,
  Package,
  BarChart,
  Bell,
  Users,
  Lock,
  FileText,
  Wallet,
  ShieldCheck,
  CheckCircle,
  Monitor,
  BookOpen,
  Calendar,
  Building,
  Calculator,
  ClipboardCheck,
  GraduationCap,
  Megaphone,
  HandCoins,
  Laptop,
  Book,
} from "lucide-react"
import FeatureCard from "./FeatureCard"
import img from "../../assets/image/tramessy-feature.jpg"
import { useInView } from "../../shared/hooks/UseInView"

// Mapping feature titles to Lucide React icons
const iconMap = {
  "বুকিং ও ট্রিপ ম্যানেজমেন্ট": CalendarCheck,
  "চালক ব্যবস্থাপনা": UserCog,
  "গাড়ি ব্যবস্থাপনা": Truck,
  "আয়-ব্যয় ও বিলিং সিস্টেম": DollarSign,
  "জ্বালানি ও খরচ ট্র্যাকিং": Fuel,
  "ডিউ ও পেমেন্ট ম্যানেজমেন্ট": CreditCard,
  "ডিস্ট্রিবিউশন ও মাল ডেলিভারি": Package,
  "রিপোর্টিং ও অ্যানালিটিক্স": BarChart,
  "নোটিফিকেশন ও রিমাইন্ডার সিস্টেম": Bell,
  "মাল্টি-ইউজার ও মাল্টি-লোকেশন সাপোর্ট": Users,
  "মডিউল বেইজড কাস্টমাইজেশন": Puzzle,
  "ডেটা সিকিউরিটি ও ব্যাকআপ": Lock,
  "ট্রিপভিত্তিক আয়": DollarSign,
  "কাস্টমার ইনভয়েস ও বিলিং": FileText,
  "এক্সপেন্স মডিউল": Wallet,
  "চালক ও গাড়ি মালিক পেমেন্ট সিস্টেম": Users, // Reusing Users icon
  "মাসিক/বার্ষিক রিপোর্টিং": BarChart, // Reusing BarChart
  "কাস্টম ক্যাশফ্লো রিপোর্ট": Wallet, // Reusing Wallet
  "সিকিউর ও ইউজারভিত্তিক কন্ট্রোল": ShieldCheck,
  "ভর্তি ব্যবস্থাপনা": ClipboardCheck,
  "শিক্ষার্থী ব্যবস্থাপনা": GraduationCap,
  "উপস্থিতি ব্যবস্থাপনা": Calendar,
  "একাডেমিক কার্যক্রম ব্যবস্থাপনা": BookOpen,
  "ডিজিটাল ফি গ্রহণ": HandCoins,
  "পরীক্ষা এবং রেজাল্ট ব্যবস্থাপনা": ClipboardCheck,
  "শিক্ষক ও কর্মচারী পরিচালনা": Users,
  "বেতন প্রদান ব্যবস্থাপনা": DollarSign,
  "একাডেমিক কার্ড ম্যানেজমেন্ট": FileText,
  "শিক্ষক, অভিভাবক এবং এডমিন অ্যাপ": Monitor,
  "শ্রেণী উত্তীর্ণকরণ ব্যবস্থাপনা": BookOpen,
  "ছুটি ব্যবস্থাপনা": Calendar,
  "ক্লাস রুটিন ব্যবস্থাপনা": Calendar,
  "বাড়ির কাজ ব্যবস্থাপনা": Book,
}

// Parsed content for "ট্র্যামেসির মূল ফিচারসমূহ"
const tramessyFeatures = [
  {
    title: "বুকিং ও ট্রিপ ম্যানেজমেন্ট",
    description:
      "অনলাইন ও অফলাইন বুকিং এন্ট্রি, ট্রিপ তৈরি ও চালক/গাড়ি অ্যাসাইন, শিডিউল, পিকআপ-ড্রপ লোকেশন, মাল টাইপ, ট্রিপ স্ট্যাটাস ট্র্যাকিং (Planned, Running, Completed)। উপযোগী: রেন্ট-এ-কার, ট্রাক, বাস, ডিস্ট্রিবিউশন।",
  },
  {
    title: "চালক ব্যবস্থাপনা (Driver Management)",
    description:
      "চালকের তথ্য, লাইসেন্স, রেটিং সংরক্ষণ, ড্রাইভিং হিস্টোরি, ট্রিপ পারফরম্যান্স, চালকের পেমেন্ট, অ্যাডভান্স ও কমিশন হিসাব। উপযোগী: সব সেক্টরেই।",
  },
  {
    title: "গাড়ি ব্যবস্থাপনা (Vehicle Management)",
    description:
      "রেজিস্ট্রেশন, ফিটনেস, ইন্সুরেন্স ট্র্যাকিং, গাড়ির টাইপভিত্তিক ফিল্টার (বাস, কার, ট্রাক), সার্ভিস হিস্টোরি ও রক্ষণাবেক্ষণ অ্যালার্ট। উপযোগী: সব সেক্টরেই।",
  },
  {
    title: "আয়-ব্যয় ও বিলিং সিস্টেম",
    description:
      "ভাড়ার হিসাব, ট্রিপভিত্তিক আয়, এক্সপেন্স এন্ট্রি (ফুয়েল, টোল, ওয়ার্কশপ), কাস্টমার ইনভয়েস ও রিসিপ্ট জেনারেশন। উপযোগী: সব সেক্টরেই।",
  },
  {
    title: "জ্বালানি ও খরচ ট্র্যাকিং",
    description:
      "প্রতি ট্রিপে ফুয়েল কস্ট এন্ট্রি, টায়ার, পার্টস, টোল ও অন্যান্য খরচ, কস্ট পার কিলোমিটার/ট্রিপ বিশ্লেষণ। উপযোগী: ট্রাক, বাস, রেন্ট-এ-কার।",
  },
  {
    title: "ডিউ ও পেমেন্ট ম্যানেজমেন্ট",
    description:
      "কাস্টমার বকেয়া, চালকের পাওনা, স্বয়ংক্রিয় রিমাইন্ডার (SMS/WhatsApp), পেমেন্ট স্ট্যাটাস: Paid, Partial, Due। উপযোগী: সব সেক্টরেই।",
  },
  {
    title: "ডিস্ট্রিবিউশন ও মাল ডেলিভারি",
    description: "অর্ডার অনুযায়ী মাল ডেলিভারি ট্র্যাকিং, পার্সেল, ইনভেন্টরি ও রিসিভ কনফার্মেশন, একাধিক ড্রপ লোকেশনের জন্য রুট প্ল্যান।",
  },
  {
    title: "রিপোর্টিং ও অ্যানালিটিক্স",
    description: "মাসিক আয়/ব্যয়/প্রফিট রিপোর্ট, চালক ও গাড়ির পারফরম্যান্স রিপোর্ট, কাস্টমার ট্রিপ হিস্টোরি ও ইউটিলাইজেশন।",
  },
  {
    title: "নোটিফিকেশন ও রিমাইন্ডার সিস্টেম",
    description: "ট্রিপ স্ট্যাটাস, পেমেন্ট ডিউ, ফিটনেস এক্সপায়ারি, WhatsApp/SMS/Email অ্যালার্ট, ম্যানুয়াল ও অটো-রিমাইন্ডার সিস্টেম।",
  },
  {
    title: "মাল্টি-ইউজার ও মাল্টি-লোকেশন সাপোর্ট",
    description: "একাধিক ব্যবহারকারী: Owner, Manager, Accountant, শাখাভিত্তিক রিপোর্ট ও গাড়ি পরিচালনা, রোল বেইজড এক্সেস কন্ট্রোল।",
  },
  {
    title: "মডিউল বেইজড কাস্টমাইজেশন",
    description:
      "ব্যবসা অনুযায়ী ফিচার চালু/বন্ধ করার সুবিধা, রেন্ট-এ-কার, ট্রাকিং, বাস সার্ভিস ও ডিস্ট্রিবিউশন জন্য আলাদা মডিউল, ক্লায়েন্ট চাহিদা অনুযায়ী ফিচার যুক্তকরণ।",
  },
  {
    title: "ডেটা সিকিউরিটি ও ব্যাকআপ",
    description: "ক্লাউড বেসড ব্যাকআপ, ইউজারভিত্তিক পারমিশন, এনক্রিপশন ও সার্ভার সিকিউরিটি।",
  },
  {
    title: "ট্রিপভিত্তিক আয় (Trip-wise Income)",
    description:
      "প্রতিটি বুকিং বা ট্রিপ অনুযায়ী আয় এন্ট্রি, রেন্ট-এ-কার: সময়ভিত্তিক বা দৈনিক ভাড়া, ট্রাক/ডিস্ট্রিবিউশন: পার কেজি, পার ট্রিপ, পার কিলোমিটার রেট, বাস: যাত্রী সংখ্যা ও রুটভিত্তিক ভাড়া হিসাব।",
  },
  {
    title: "কাস্টমার ইনভয়েস ও বিলিং",
    description:
      "অটোমেটিক ইনভয়েস জেনারেশন, মাল্টিপল বুকিং একত্রে ইনভয়েস করার সুবিধা, ডিসকাউন্ট, ট্যাক্স, ডিউ এবং পেমেন্ট হিসাব, প্রফেশনাল রিসিপ্ট ও বিল প্রিন্ট/ডাউনলোড অপশন।",
  },
  {
    title: "এক্সপেন্স মডিউল (Expense Tracking)",
    description:
      "এক্সপেন্স ক্যাটাগরি: ফুয়েল, টোল/ব্রীজ, ড্রাইভার খরচ, মেইনটেনেন্স, খুচরা পার্টস, লাইসেন্স/ট্যাক্স, অফিস/অ্যাডমিন খরচ। ট্রিপভিত্তিক বা মাসিক এক্সপেন্স এন্ট্রি।",
  },
  {
    title: "চালক ও গাড়ি মালিক পেমেন্ট সিস্টেম",
    description:
      "ড্রাইভার কমিশন হিসাব (পার ট্রিপ, পারসেন্টেজ, বোনাস), গাড়ির মালিককে দেওয়া ভাড়ার হিসাব, অ্যাডভান্স ও পাওনা ব্যালেন্স ট্র্যাকিং, পেমেন্ট হিস্টোরি ও রিসিপ্ট সিস্টেম।",
  },
  {
    title: "মাসিক/বার্ষিক রিপোর্টিং",
    description:
      "ট্রিপভিত্তিক আয়-ব্যয়ের তুলনা (Profit & Loss), মাসিক, কাস্টম ডেট রেঞ্জ অনুযায়ী রিপোর্ট, গাড়িভিত্তিক প্রফিট/লস বিশ্লেষণ, কাস্টমারভিত্তিক আয় রিপোর্ট।",
  },
  {
    title: "কাস্টম ক্যাশফ্লো রিপোর্ট",
    description: "মোট আয় বনাম মোট খরচ, কাস্ট ইন/ক্যাশ আউট হিসাব, ব্যালেন্স শীট টাইপ রিপোর্ট।",
  },
  {
    title: "ডিউ ট্র্যাকিং ও রিমাইন্ডার",
    description: "কাস্টমার ডিউ লিস্ট ও রিপোর্ট, চালক/মালিক পাওনা রিপোর্ট, SMS/WhatsApp অটো রিমাইন্ডার সিস্টেম।",
  },
  {
    title: "সিকিউর ও ইউজারভিত্তিক কন্ট্রোল",
    description: "শুধুমাত্র নির্দিষ্ট ইউজার এক্সপেন্স অ্যাক্সেস পাবে, হিসাব রোলব্যাক/এডিট লগ হিস্টোরি সংরক্ষণ।",
  },
]

// Dummy content for "কেন শিক্ষা প্রতিষ্ঠানে ব্যবস্থাপনা সফটওয়্যার প্রয়োজন" section
const whyTramessyFeatures = [
  {
    icon: Truck,
    title: "সব ধরনের যানবাহনের জন্য উপযোগী",
    description: "রেন্ট-এ-কার, ট্রাক, বাস, পরিবহন ও ডিস্ট্রিবিউশন সেবা — সবকিছু ট্র্যাক ও ম্যানেজ করা যাবে এক প্ল্যাটফর্ম থেকেই।",
  },
  {
    icon: Wallet,
    title: "ব্যয় কমিয়ে মুনাফা বাড়ান",
    description: "ট্রিপভিত্তিক আয়-ব্যয় বিশ্লেষণ ও এক্সপেন্স ট্র্যাকিংয়ের মাধ্যমে অপারেশনাল খরচ কমাতে সহায়তা করে।",
  },
  {
    icon: ShieldCheck,
    title: "সিকিউরিটি ও ডেটা ব্যাকআপ",
    description: "ক্লাউড-ভিত্তিক নিরাপদ ব্যাকআপ ও ইউজারভিত্তিক অ্যাক্সেস কন্ট্রোল সুবিধা।",
  },
  {
    icon: BarChart,
    title: "ডাটা বিশ্লেষণ ও রিপোর্টিং",
    description: "চালক, যানবাহন ও ব্যবসার উপর সম্পূর্ণ রিপোর্টিং সিস্টেম — রিয়েল টাইমে বিশ্লেষণ সুবিধা।",
  },
  {
    icon: Bell,
    title: "নোটিফিকেশন ও রিমাইন্ডার",
    description: "SMS, WhatsApp ও Email এর মাধ্যমে অটো ও ম্যানুয়াল নোটিফিকেশন ও রিমাইন্ডার ব্যবস্থা।",
  },
  {
    icon: Users,
    title: "একাধিক ইউজার ও লোকেশন সাপোর্ট",
    description: "বিভিন্ন শাখা ও রোলভিত্তিক ইউজার ম্যানেজমেন্ট — মাল্টি-লোকেশন ব্যবসার জন্য পারফেক্ট।",
  },
  {
    icon: Puzzle,
    title: "মডিউল বেইজড কাস্টমাইজেশন",
    description: "ব্যবসা অনুযায়ী ফিচার চালু/বন্ধ করার সুবিধা — রেন্ট-এ-কার, ট্রাকিং বা বাস সেবা, সবার জন্য কাস্টমাইজেবল।",
  },
  {
    icon: DollarSign,
    title: "স্বয়ংক্রিয় বিলিং ও ইনভয়েস",
    description: "ভাড়ার হিসাব, চালক পেমেন্ট, ইনভয়েস ও রিসিপ্ট — সব কিছু এক জায়গায়।",
  },
];

// features
const features = [
  'ক্লায়েন্ট ও ড্রাইভারদের জন্য আলাদা লগইন প্যানেল।',
  'রিয়েল-টাইম ট্রিপ আপডেট ও ট্র্যাকিং সিস্টেম।',
  'ইনভয়েস ও রিসিপ্ট অটোমেটেড জেনারেশন এবং ডাউনলোড সুবিধা।',
  'ওয়েবভিত্তিক রিপোর্টিং সিস্টেম (ট্রিপ, ব্যালেন্স, ড্রাইভার পারফরম্যান্স)।',
  'নিজস্ব ডোমেইন ও ব্র্যান্ডিংসহ হোস্টিং সুবিধা।',
  'দ্রুত লোডিং, মোবাইল-ফ্রেন্ডলি ও SEO অপ্টিমাইজড ওয়েবপোর্টাল।',
  'ব্যবহারকারী ও রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোল।',
];


const FeaturesSection = () => {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
  return (
    <section className="py-16 bg-white">
      <div ref={sectionRef}  className="container mx-auto ">
        {/* Top Navigation/Tabs */}
        {/* <div className="flex justify-center mb-12 border-b-2 border-gray-200">
          <div className="flex space-x-8">
            <div className="flex flex-col items-center pb-4 border-b-2 border-feature-icon text-feature-icon">
              <Cube className="w-8 h-8 mb-2" />
              <span className="font-semibold text-lg">মূল ফিচার</span>
            </div>
            <div className="flex flex-col items-center pb-4 text-gray-600 hover:text-feature-icon transition-colors cursor-pointer">
              <Settings className="w-8 h-8 mb-2" />
              <span className="font-semibold text-lg">প্রশাসনিক মডিউল</span>
            </div>
            <div className="flex flex-col items-center pb-4 text-gray-600 hover:text-feature-icon transition-colors cursor-pointer">
              <MessageSquare className="w-8 h-8 mb-2" />
              <span className="font-semibold text-lg">যোগাযোগ</span>
            </div>
            <div className="flex flex-col items-center pb-4 text-gray-600 hover:text-feature-icon transition-colors cursor-pointer">
              <Database className="w-8 h-8 mb-2" />
              <span className="font-semibold text-lg">তথ্য ব্যবস্থাপনা</span>
            </div>
            <div className="flex flex-col items-center pb-4 text-gray-600 hover:text-feature-icon transition-colors cursor-pointer">
              <Puzzle className="w-8 h-8 mb-2" />
              <span className="font-semibold text-lg">ইন্টিগ্রেশন / এড অন</span>
            </div>
          </div>
        </div> */}

        {/* Main Features Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tramessyFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
               animationDelay={`${index * 0.1}s`}
              iconName={iconMap[feature.title] ? iconMap[feature.title].displayName : "HelpCircle"} 
              title={feature.title}
              description={feature.description}
              isSectionInView={isSectionInView

              }
            />
          ))}
        </div>

        {/* Website Features Section */}
        <div className="bg-white py-12">
  <div ref={sectionRef} className="flex flex-col lg:flex-row items-center justify-between gap-12">
    {/* Left Content */}
    <div className={`flex-1 text-center lg:text-left max-w-2xl ${isSectionInView ? "animate-fade-up" : ""}`}>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-feature-icon inline-block pb-2">
        ট্র্যামেসি ওয়েবপোর্টালের ফিচারসমূহ
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        ট্র্যামেসি ওয়েবপোর্টাল পরিবহন ও লজিস্টিক প্রতিষ্ঠানের জন্য ডিজাইন করা একটি আধুনিক এবং ফিচার-সমৃদ্ধ সিস্টেম, যেখানে ক্লায়েন্ট, ড্রাইভার ও
        ম্যানেজমেন্ট সবাই রিয়েল-টাইমে তথ্য দেখতে ও কন্ট্রোল করতে পারে। প্রতিষ্ঠানভিত্তিক কাস্টমাইজড ওয়েবসাইট ও কাস্টম ড্যাশবোর্ডের মাধ্যমে আপনি আপনার
        প্রতিষ্ঠানের ট্রিপ, ড্রাইভার, যানবাহন এবং ইনকাম-এক্সপেন্স সবকিছু এক নজরে দেখতে পারবেন।
      </p>
      </div>
      <ul ref={sectionRef} className="text-gray-700 text-lg space-y-3 text-left">
  {features.map((item, index) => (
    <li
      key={index}
      className={`flex items-start gap-2 ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}
      style={{ animationDelay: isSectionInView ? `${0.4 + index * 0.1}s` : "0s" }}
    >
      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
      <span>{item}</span>
    </li>
  ))}
</ul>

    </div>

    {/* Right Illustration */}
    <div className={`flex-1 flex justify-center lg:justify-end ${isSectionInView ? "animate-fade-in-left" : ""}`}>
      <img
        src={img}
        alt="Tramessy web portal screenshot"
        className="w-full  h-auto object-contain rounded-lg shadow-lg"
       
      />
    </div>
  </div>
</div>


        {/* Why tramessy Section */}
        <div ref={sectionRef} className="py-16">
          <h2 className="animate-fade-up text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12 border-b-2 border-feature-icon inline-block pb-2">
            কেন ট্র্যামেসি প্রয়োজন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyTramessyFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              // Determine row number (assuming 4 items per row)
    const row = Math.floor(index / 4);

    // Apply animation based on row
    let animationClass = '';
    if (row === 0) animationClass = 'animate-fade-up';
    else if (row === 1) animationClass = 'animate-fade-in-right';
    else if (row === 2) animationClass = 'animate-fade-in-left';
    else animationClass = 'animate-fade-up';
              return (
                <div
                  key={index}
                  className={`${animationClass} bg-white rounded-lg shadow-sm p-6 border border-feature-border flex flex-col items-center text-center`}
                >
                  <div className="mb-4">
                    {IconComponent && <IconComponent className="w-12 h-12 text-feature-icon text-primary" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

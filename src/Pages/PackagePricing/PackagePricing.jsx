
import { BarChart3, Check, Crown, Settings, Truck } from "lucide-react"

// import { pricingPlans } from "../../data/pricing-data"
import { useInView } from "../../shared/hooks/UseInView"
import Button from "../../components/helpingComp/Button"
import PageHero from "../../components/helpingComp/PageHero"
import PricingCard from "../../components/PackagePricing/PricingCard"
import { useState } from "react"

const PackagePricing = () => {

   const [billingCycle, setBillingCycle] = useState("monthly") 
  // monthly | halfYearly | yearly

  // ইংরেজি থেকে বাংলায় নাম্বার কনভার্টার
const toBengaliNumber = (num) => {
  return num.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
};

const calculateDiscountedPrice = (price) => {
  const basePrice = parseInt(
    price
      .replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d))
      .replace(/[^\d]/g, "")
  )
  let finalPrice = basePrice

  if (billingCycle === "halfYearly") finalPrice = Math.round(basePrice * 0.90) // ৭% ছাড়
  if (billingCycle === "yearly") finalPrice = Math.round(basePrice * 0.80)     // ১০% ছাড়

  return toBengaliNumber(finalPrice)
}


  const pricingPlans = [
  {
    title: 'বেসিক',
    subtitle: 'ছোট ট্রান্সপোর্ট ব্যবসা, নতুন উদ্যোক্তা, স্টার্টআপ',
    price: '১,৪৯৯',
    period: 'মাস',
    icon: <Truck className="h-6 w-6" />,
    gradient: 'from-green-400 to-green-600',
    buttonText: 'বেসিক প্ল্যান কিনুন',
    features: [
      { text: '১ থেকে ৫টি গাড়ি ম্যানেজমেন্ট', included: true },
      { text: 'ট্রিপ হিসাব ও মনিটরিং', included: true },
      { text: 'রোড এক্সপেন্স ট্র্যাকিং', included: true },
      { text: 'জ্বালানি ব্যবস্থাপনা', included: true },
      { text: 'সার্ভিসিং ও রক্ষণাবেক্ষণ', included: true },
      { text: 'গাড়ির কিস্তি ও পেমেন্ট হিসাব', included: true },
      { text: 'পার্টস ও স্টক ম্যানেজমেন্ট', included: true },
      { text: 'ডিজিটাল বিল ও চালান তৈরি', included: true },
      { text: 'ভাউচার ও রসিদ তৈরি', included: true },
      { text: 'পাওনার হিসাব ও ট্র্যাকিং', included: true },
      { text: 'SMS/Email নোটিফিকেশন সিস্টেম', included: true },
      { text: 'GPS ট্র্যাকিং ও API ইন্ট্রিগেশন', included: true },
      { text: 'মাল্টি-ইউজার এক্সেস (২ জন পর্যন্ত)', included: true },
      { text: 'বেতন ও কমিশন হিসাব', included: true },
      { text: 'হাজিরা ও ছুটি ম্যানেজমেন্ট', included: false },
      { text: 'ব্যালেন্স স্টেটমেন্ট ও ক্যাশফ্লো রিপোর্ট', included: false },
      { text: 'ডেডিকেটেড একাউন্ট ম্যানেজার ও লাইভ সাপোর্ট', included: false },
    ]
  },
  {
    title: 'স্ট্যান্ডার্ড',
    subtitle: 'মাঝারি আকারের ট্রান্সপোর্ট ব্যবসা',
    price: '২,৪৯৯',
    period: 'মাস',
    icon: <BarChart3 className="h-6 w-6" />,
    gradient: 'from-blue-500 to-teal-600',
    buttonText: 'স্ট্যান্ডার্ড প্ল্যান কিনুন',
    isPopular: true,
    features: [
      { text: '৫ থেকে ১০টি গাড়ি ম্যানেজমেন্ট', included: true },
      { text: 'ট্রিপ হিসাব ও মনিটরিং', included: true },
      { text: 'রোড এক্সপেন্স ট্র্যাকিং', included: true },
      { text: 'জ্বালানি ব্যবস্থাপনা', included: true },
      { text: 'সার্ভিসিং ও রক্ষণাবেক্ষণ', included: true },
      { text: 'গাড়ির কিস্তি ও পেমেন্ট হিসাব', included: true },
      { text: 'পার্টস ও স্টক ম্যানেজমেন্ট', included: true },
      { text: 'ডিজিটাল বিল ও চালান তৈরি', included: true },
      { text: 'ভাউচার ও রসিদ তৈরি', included: true },
      { text: 'পাওনার হিসাব ও ট্র্যাকিং', included: true },
      { text: 'SMS/Email নোটিফিকেশন সিস্টেম', included: true },
      { text: 'GPS ট্র্যাকিং ও API ইন্ট্রিগেশন', included: true },
      { text: 'মাল্টি-ইউজার এক্সেস (৩ জন পর্যন্ত)', included: true },
       { text: 'বেতন ও কমিশন হিসাব', included: true },
      { text: 'হাজিরা ও ছুটি ম্যানেজমেন্ট', included: false },
      { text: 'ব্যালেন্স স্টেটমেন্ট ও ক্যাশফ্লো রিপোর্ট', included: false },
      { text: 'ডেডিকেটেড একাউন্ট ম্যানেজার ও লাইভ সাপোর্ট', included: false },
    ]
  },
  {
    title: 'প্রো প্ল্যান',
    subtitle: 'বড় আকারের ট্রান্সপোর্ট ব্যবসা',
    price: '৪,৯৯৯',
    period: 'মাস',
    icon: <Crown className="h-6 w-6" />,
    gradient: 'from-purple-500 to-pink-600',
    buttonText: 'প্রো প্ল্যান কিনুন',
    features: [
      { text: '১০-২০টি গাড়ি ম্যানেজমেন্ট', included: true },
      { text: 'ট্রিপ হিসাব ও মনিটরিং', included: true },
      { text: 'রোড এক্সপেন্স ট্র্যাকিং', included: true },
      { text: 'জ্বালানি ব্যবস্থাপনা', included: true },
      { text: 'সার্ভিসিং ও রক্ষণাবেক্ষণ', included: true },
      { text: 'গাড়ির কিস্তি ও পেমেন্ট হিসাব', included: true },
      { text: 'পার্টস ও স্টক ম্যানেজমেন্ট', included: true },
      { text: 'ডিজিটাল বিল ও চালান তৈরি', included: true },
      { text: 'ভাউচার ও রসিদ তৈরি', included: true },
      { text: 'পাওনার হিসাব ও ট্র্যাকিং', included: true },
      { text: 'SMS/Email নোটিফিকেশন সিস্টেম', included: true },
      { text: 'GPS ট্র্যাকিং ও API ইন্ট্রিগেশন', included: true },
      { text: 'মাল্টি-ইউজার এক্সেস (৫ জন পর্যন্ত)', included: true },
      { text: 'হাজিরা ও ছুটি ম্যানেজমেন্ট', included: true },
      { text: 'বেতন ও কমিশন হিসাব', included: true },
      { text: 'ব্যালেন্স স্টেটমেন্ট ও ক্যাশফ্লো রিপোর্ট', included: true },
      { text: 'ডেডিকেটেড একাউন্ট ম্যানেজার ও লাইভ সাপোর্ট', included: true },
      { text: 'অ্যাপ্রুভাল ও ভেরিফাই সিস্টেম', included: true },
      { text: 'রিজার্ভেশন ও বুকিং ব্যবস্থা', included: true },
    ]
  },
  {
    title: 'প্রিমিয়াম',
    subtitle: 'বড় আকারের ট্রান্সপোর্ট ব্যবসা',
    price: '৭,৯৯৯',
    period: 'মাস',
    icon: <Crown className="h-6 w-6" />,
    gradient: ' from-blue-500 to-purple-600',
    buttonText: 'প্রিমিয়াম প্ল্যান কিনুন',
    features: [
      { text: '২০-৫০টি গাড়ি ম্যানেজমেন্ট', included: true },
      { text: 'ট্রিপ হিসাব ও মনিটরিং', included: true },
      { text: 'রোড এক্সপেন্স ট্র্যাকিং', included: true },
      { text: 'জ্বালানি ব্যবস্থাপনা', included: true },
      { text: 'সার্ভিসিং ও রক্ষণাবেক্ষণ', included: true },
      { text: 'গাড়ির কিস্তি ও পেমেন্ট হিসাব', included: true },
      { text: 'পার্টস ও স্টক ম্যানেজমেন্ট', included: true },
      { text: 'ডিজিটাল বিল ও চালান তৈরি', included: true },
      { text: 'ভাউচার ও রসিদ তৈরি', included: true },
      { text: 'পাওনার হিসাব ও ট্র্যাকিং', included: true },
      { text: 'SMS/Email নোটিফিকেশন সিস্টেম', included: true },
      { text: 'GPS ট্র্যাকিং ও API ইন্ট্রিগেশন', included: true },
      { text: 'মাল্টি-ইউজার এক্সেস (১০ জন পর্যন্ত)', included: true },
      { text: 'হাজিরা ও ছুটি ম্যানেজমেন্ট', included: true },
      { text: 'বেতন ও কমিশন হিসাব', included: true },
      { text: 'ব্যালেন্স স্টেটমেন্ট ও ক্যাশফ্লো রিপোর্ট', included: true },
      { text: 'ডেডিকেটেড একাউন্ট ম্যানেজার ও লাইভ সাপোর্ট', included: true },
      { text: 'অ্যাপ্রুভাল ও ভেরিফাই সিস্টেম', included: true },
      { text: 'রিজার্ভেশন ও বুকিং ব্যবস্থা', included: true },
    ]
  },
]

  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 })
  const breadcrumbs = [{ label: "হোম", href: "/" }, { label: "প্যাকেজ এবং প্রাইস" }]
  return (
    <section className="bg-gray-50 py-8">
      <PageHero title="প্যাকেজ এবং প্রাইস" breadcrumbs={breadcrumbs} />
      <div ref={sectionRef} className="container mx-auto px-4 py-16">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center text-gray-700 mb-12 ${isSectionInView ? "animate-fade-up" : "opacity-0"}`}
        >
          আমাদের মূল্য পরিকল্পনা
        </h2>
        
        {/* Billing Toggle */}
        <div className="flex justify-center gap-4 mb-10 bg-gray-100 lg:mx-[20%] xl:mx-[26.5%]">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-lg ${
              billingCycle === "monthly"
                ? "bg-primary text-white"
                : "bg-white shadow text-gray-700"
            }`}
          >
            মাসিক পেমেন্ট
          </button>
          <button
            onClick={() => setBillingCycle("halfYearly")}
            className={`px-4 py-2 rounded-lg ${
              billingCycle === "halfYearly"
                ? "bg-primary text-white"
                : "bg-white shadow text-gray-700"
            }`}
          >
            ৬ মাস পেমেন্ট(১০% ছাড়)
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-2 rounded-lg ${
              billingCycle === "yearly"
                ? "bg-primary text-white"
                : "bg-white shadow text-gray-700"
            }`}
          >
            ১ বছর পেমেন্ট(২০% ছাড়)
          </button>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
          {pricingPlans.map((plan, index) => {
            const discountedPrice = calculateDiscountedPrice(plan.price)

  let badge = null
  if (billingCycle === "halfYearly") badge = "১০% বিশেষ অফার"
  if (billingCycle === "yearly") badge = "২০% বিশেষ অফার"
            
            return <PricingCard
              key={index}
              title={plan.title}
              subtitle={plan.subtitle}X
              // price={plan.price}
              // period={plan.period}
              badge={badge}
              price={discountedPrice}
              period={billingCycle === "monthly" ? "মাস" : billingCycle === "halfYearly" ? "৬ মাস" : "১ বছর"}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
              gradient={plan.gradient}
              icon={plan.icon}
              isSectionInView={isSectionInView}
            />
          })}
        </div>
      </div>
    </section>
  )
}

export default PackagePricing

import { BarChart3, Check, Crown, Settings, Truck } from "lucide-react";

// import { pricingPlans } from "../../data/pricing-data"
import { useInView } from "../../shared/hooks/UseInView";
import Button from "../../components/helpingComp/Button";
import PageHero from "../../components/helpingComp/PageHero";
import PricingCard from "../../components/PackagePricing/PricingCard";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const PackagePricing = () => {
  const { t, i18n } = useTranslation();
  const isBangla = i18n.language === "bn";

  const [billingCycle, setBillingCycle] = useState("monthly");
  // monthly | halfYearly | yearly

  // ইংরেজি থেকে বাংলায় নাম্বার কনভার্টার
  const toBengaliNumber = (num) => {
    return num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
  };

  // const calculateDiscountedPrice = (price) => {
  //   const basePrice = parseInt(
  //     price
  //       .replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d))
  //       .replace(/[^\d]/g, "")
  //   )
  //   let finalPrice = basePrice

  //   if (billingCycle === "halfYearly") finalPrice = Math.round(basePrice * 0.90) // ৭% ছাড়
  //   if (billingCycle === "yearly") finalPrice = Math.round(basePrice * 0.80)     // ১০% ছাড়

  //   return toBengaliNumber(finalPrice)
  // }

  const calculateDiscountedPrice = (price) => {
    const basePrice = parseInt(
      price
        .replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯".indexOf(d))
        .replace(/[^\d]/g, ""),
    );

    let finalPrice = basePrice;

    if (billingCycle === "halfYearly") finalPrice = Math.round(basePrice * 0.9);
    if (billingCycle === "yearly") finalPrice = Math.round(basePrice * 0.8);

    // 🔥 language based return
    return isBangla ? toBengaliNumber(finalPrice) : finalPrice;
  };

  const pricingPlans = [
    {
      title: t("pricing.plans.basic.name"),
      subtitle: t("pricing.plans.basic.description"),
      price: t("pricing.plans.basic.price"),
      period: t("pricing.plans.basic.period"),
      icon: <Truck className="h-6 w-6" />,
      gradient: "from-green-400 to-green-600",
      buttonText: t("pricing.plans.basic.buttonText"),
      features: [
        { text: t("pricing.plans.basic.list1"), included: true },
        { text: t("pricing.plans.premium.list2"), included: true },
        { text: t("pricing.plans.premium.list3"), included: true },
        { text: t("pricing.plans.premium.list4"), included: true },
        { text: t("pricing.plans.premium.list5"), included: true },
        { text: t("pricing.plans.premium.list6"), included: true },
        { text: t("pricing.plans.premium.list7"), included: true },
        { text: t("pricing.plans.premium.list8"), included: true },
        { text: t("pricing.plans.premium.list9"), included: true },
        { text: t("pricing.plans.premium.list10"), included: true },
        { text: t("pricing.plans.premium.list11"), included: true },
        { text: t("pricing.plans.premium.list12"), included: true },
        { text: t("pricing.plans.basic.list13"), included: true },
        { text: t("pricing.plans.basic.list14"), included: true },
        { text: t("pricing.plans.premium.list14"), included: true },
        { text: t("pricing.plans.premium.list15"), included: false },
        { text: t("pricing.plans.premium.list16"), included: false },
        { text: t("pricing.plans.premium.list17"), included: false },
        { text: t("pricing.plans.premium.list18"), included: false },
        { text: t("pricing.plans.premium.list19"), included: false },
        { text: t("pricing.plans.premium.list20"), included: false },
      ],
    },
    {
      title: t("pricing.plans.standard.name"),
      subtitle: t("pricing.plans.standard.description"),
      price: t("pricing.plans.standard.price"),
      period: t("pricing.plans.standard.period"),
      icon: <BarChart3 className="h-6 w-6" />,
      gradient: "from-blue-500 to-teal-600",
      buttonText: t("pricing.plans.standard.buttonText"),
      isPopular: true,
      features: [
        { text: t("pricing.plans.standard.list1"), included: true },
        { text: t("pricing.plans.premium.list2"), included: true },
        { text: t("pricing.plans.premium.list3"), included: true },
        { text: t("pricing.plans.premium.list4"), included: true },
        { text: t("pricing.plans.premium.list5"), included: true },
        { text: t("pricing.plans.premium.list6"), included: true },
        { text: t("pricing.plans.premium.list7"), included: true },
        { text: t("pricing.plans.premium.list8"), included: true },
        { text: t("pricing.plans.premium.list9"), included: true },
        { text: t("pricing.plans.premium.list10"), included: true },
        { text: t("pricing.plans.premium.list11"), included: true },
        { text: t("pricing.plans.premium.list12"), included: true },
        { text: t("pricing.plans.standard.list13"), included: true },
        { text: t("pricing.plans.basic.list14"), included: true },
        { text: t("pricing.plans.premium.list14"), included: true },
        { text: t("pricing.plans.premium.list15"), included: false },
        { text: t("pricing.plans.premium.list16"), included: false },
        { text: t("pricing.plans.premium.list17"), included: false },
        { text: t("pricing.plans.premium.list18"), included: false },
        { text: t("pricing.plans.premium.list19"), included: false },
        { text: t("pricing.plans.premium.list20"), included: false },
      ],
    },
    {
      title: t("pricing.plans.pro.name"),
      subtitle: t("pricing.plans.pro.description"),
      price: t("pricing.plans.pro.price"),
      period: t("pricing.plans.pro.period"),
      icon: <Crown className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-600",
      buttonText: t("pricing.plans.pro.buttonText"),
      features: [
        { text: t("pricing.plans.pro.list1"), included: true },
        { text: t("pricing.plans.premium.list2"), included: true },
        { text: t("pricing.plans.premium.list3"), included: true },
        { text: t("pricing.plans.premium.list4"), included: true },
        { text: t("pricing.plans.premium.list5"), included: true },
        { text: t("pricing.plans.premium.list6"), included: true },
        { text: t("pricing.plans.premium.list7"), included: true },
        { text: t("pricing.plans.premium.list8"), included: true },
        { text: t("pricing.plans.premium.list9"), included: true },
        { text: t("pricing.plans.premium.list10"), included: true },
        { text: t("pricing.plans.premium.list11"), included: true },
        { text: t("pricing.plans.premium.list12"), included: true },
        { text: t("pricing.plans.pro.list13"), included: true },
        { text: t("pricing.plans.basic.list14"), included: true },
        { text: t("pricing.plans.premium.list14"), included: true },
        { text: t("pricing.plans.premium.list15"), included: true },
        { text: t("pricing.plans.premium.list16"), included: true },
        { text: t("pricing.plans.premium.list17"), included: true },
        { text: t("pricing.plans.premium.list18"), included: true },
        { text: t("pricing.plans.premium.list19"), included: true },
        { text: t("pricing.plans.premium.list20"), included: false },
      ],
    },
    {
      title: t("pricing.plans.premium.name"),
      subtitle: t("pricing.plans.premium.description"),
      price: t("pricing.plans.premium.price"),
      period: t("pricing.plans.premium.period"),
      icon: <Crown className="h-6 w-6" />,
      gradient: " from-blue-500 to-purple-600",
      buttonText: t("pricing.plans.premium.buttonText"),
      features: [
        { text: t("pricing.plans.premium.list1"), included: true },
        { text: t("pricing.plans.premium.list2"), included: true },
        { text: t("pricing.plans.premium.list3"), included: true },
        { text: t("pricing.plans.premium.list4"), included: true },
        { text: t("pricing.plans.premium.list5"), included: true },
        { text: t("pricing.plans.premium.list6"), included: true },
        { text: t("pricing.plans.premium.list7"), included: true },
        { text: t("pricing.plans.premium.list8"), included: true },
        { text: t("pricing.plans.premium.list9"), included: true },
        { text: t("pricing.plans.premium.list10"), included: true },
        { text: t("pricing.plans.premium.list11"), included: true },
        { text: t("pricing.plans.premium.list12"), included: true },
        { text: t("pricing.plans.premium.list13"), included: true },
        { text: t("pricing.plans.basic.list14"), included: true },
        { text: t("pricing.plans.premium.list14"), included: true },
        { text: t("pricing.plans.premium.list15"), included: true },
        { text: t("pricing.plans.premium.list16"), included: true },
        { text: t("pricing.plans.premium.list17"), included: true },
        { text: t("pricing.plans.premium.list18"), included: true },
        { text: t("pricing.plans.premium.list19"), included: true },
        { text: t("pricing.plans.premium.list20"), included: true },
      ],
    },
  ];

  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 });
  const breadcrumbs = [
    { label: t("nav.home"), href: "/" },
    { label: t("pricing.bannar") },
  ];
  return (
    <>
    <Helmet>
  <title>Pricing Plans | Tramessy - Transport Management Software</title>
  <meta
    name="description"
    content="Choose the right Tramessy plan for your business. Affordable monthly, half-yearly, and yearly pricing for transport and fleet management software in Bangladesh."
  />
  <meta
    name="keywords"
    content="Tramessy pricing, transport software price Bangladesh, fleet management plan, logistics software subscription BD"
  />
</Helmet>
    <section className="bg-gray-50 py-8">
      <PageHero title={t("pricing.bannar")} breadcrumbs={breadcrumbs} />
      <div ref={sectionRef} className="container mx-auto px-4 py-16">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center text-gray-700 mb-12 ${isSectionInView ? "animate-fade-up" : "opacity-0"}`}
        >
          {t("pricing.title")}
        </h2>

        {/* Billing Toggle */}
        <div className="flex justify-center gap-4 mb-10 bg-gray-100 lg:mx-[20%] xl:mx-[21.5%]">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-lg ${
              billingCycle === "monthly"
                ? "bg-primary text-white"
                : "bg-white shadow text-gray-700"
            }`}
          >
            {t("pricing.tab.monthly")}
          </button>
          <button
            onClick={() => setBillingCycle("halfYearly")}
            className={`px-4 py-2 rounded-lg ${
              billingCycle === "halfYearly"
                ? "bg-primary text-white"
                : "bg-white shadow text-gray-700"
            }`}
          >
            {t("pricing.tab.halfYearly")}
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-2 rounded-lg ${
              billingCycle === "yearly"
                ? "bg-primary text-white"
                : "bg-white shadow text-gray-700"
            }`}
          >
            {t("pricing.tab.yearly")}
          </button>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
          {pricingPlans.map((plan, index) => {
            const discountedPrice = calculateDiscountedPrice(plan.price);

            let badge = null;
            if (billingCycle === "halfYearly") badge = t("pricing.offer.halfYearly");
            if (billingCycle === "yearly") badge = t("pricing.offer.yearly");

            return (
              <PricingCard
                key={index}
                title={plan.title}
                subtitle={plan.subtitle}
                X
                // price={plan.price}
                // period={plan.period}
                badge={badge}
                price={discountedPrice}
                // period={billingCycle === "monthly" ? "মাস" : billingCycle === "halfYearly" ? "মাস" : "মাস"}
                period={
                  billingCycle === "monthly"
                    ? t("pricing.plans.basic.period")
                    : billingCycle === "halfYearly"
                      ? t("pricing.plans.basic.period")
                      : t("pricing.plans.basic.period")
                }
                features={plan.features}
                isPopular={plan.isPopular}
                buttonText={plan.buttonText}
                gradient={plan.gradient}
                icon={plan.icon}
                isSectionInView={isSectionInView}
              />
            );
          })}
        </div>
      </div>
    </section>
    </>
    
  );
};

export default PackagePricing;

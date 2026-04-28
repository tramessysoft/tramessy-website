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
} from "lucide-react";
import FeatureCard from "./FeatureCard";
import img from "../../assets/image/tramessy-feature.jpg";
import { useInView } from "../../shared/hooks/UseInView";
import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const { t } = useTranslation();
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 });
  // Mapping feature titles to Lucide React icons
  const iconMap = {
    [t("features.booking_trip")]: CalendarCheck,
    [t("features.rent_car.driver_management")]: UserCog,
    [t("features.vehicle_management")]: Truck,
    [t("features.income_bill")]: DollarSign,
    [t("features.fuel_expense")]: Fuel,
    [t("features.dues_management")]: CreditCard,
    [t("features.distribution_delivery")]: Package,
    [t("features.reporting")]: BarChart,
    [t("features.rent_car.notifications_reminders")]: Bell,
    [t("features.multi_user_location_support")]: Users,
    [t("features.module_customization")]: Puzzle,
    [t("features.data_security")]: Lock,
    [t("features.trip_wise_income")]: DollarSign,
    [t("features.customer_invoice")]: FileText,
    [t("features.expense_module")]: Wallet,
    [t("features.driver_payment")]: Users, // Reusing Users icon
    [t("features.monthly_yearly_reporting")]: BarChart, // Reusing BarChart
    [t("features.custom_cashflow_report")]: Wallet, // Reusing Wallet
    [t("features.dues_tracking_reminders")]: ShieldCheck,
    [t("features.data_security")]: ClipboardCheck,
  };

  // Parsed content for "ট্র্যামেসির মূল ফিচারসমূহ"
  const tramessyFeatures = [
    {
      title: t("features.booking_trip"),
      description: t(
        "features.description_featrues_page.Booking & Trip Management",
      ),
    },
    {
      title: t("features.rent_car.driver_management"),
      description: t("features.description_featrues_page.Driver Management"),
    },
    {
      title: t("features.vehicle_management"),
      description: t("features.description_featrues_page.Vehicle Management"),
    },
    {
      title: t("features.income_bill"),
      description: t(
        "features.description_featrues_page.Income-Expense & Billing System",
      ),
    },
    {
      title: t("features.fuel_expense"),
      description: t(
        "features.description_featrues_page.Fuel & Expense Tracking",
      ),
    },
    {
      title: t("features.dues_management"),
      description: t(
        "features.description_featrues_page.Dues & Payment Management",
      ),
    },
    {
      title: t("features.distribution_delivery"),
      description: t(
        "features.description_featrues_page.Distribution & Cargo Delivery",
      ),
    },
    {
      title: t("features.reporting"),
      description: t(
        "features.description_featrues_page.Reporting & Analytics",
      ),
    },
    {
      title: t("features.rent_car.notifications_reminders"),
      description: t(
        "features.description_featrues_page.Notifications & Reminders",
      ),
    },
    {
      title: t("features.multi_user_location_support"),
      description: t(
        "features.description_featrues_page.Multi-User & Multi-Location Support",
      ),
    },
    {
      title: t("features.module_customization"),
      description: t(
        "features.description_featrues_page.Module-based Customization",
      ),
    },
    {
      title: t("features.data_security"),
      description: t(
        "features.description_featrues_page.Data Security & Backup",
      ),
    },
    {
      title: t("features.trip_wise_income"),
      description: t("features.description_featrues_page.Trip-wise Income"),
    },
    {
      title: t("features.customer_invoice"),
      description: t(
        "features.description_featrues_page.Customer Invoice & Billing",
      ),
    },
    {
      title: t("features.expense_module"),
      description: t(
        "features.description_featrues_page.Expense Module (Expense Tracking)",
      ),
    },
    {
      title: t("features.driver_payment"),
      description: t(
        "features.description_featrues_page.Driver & Vehicle Owner Payment System",
      ),
    },
    {
      title: t("features.monthly_yearly_reporting"),
      description: t(
        "features.description_featrues_page.Monthly/Yearly Reporting",
      ),
    },
    {
      title: t("features.custom_cashflow_report"),
      description: t(
        "features.description_featrues_page.Custom Cashflow Report",
      ),
    },
    {
      title: t("features.dues_tracking_reminders"),
      description: t(
        "features.description_featrues_page.Due Tracking & Reminders",
      ),
    },
    {
      title: t("features.data_security"),
      description: t(
        "features.description_featrues_page.Data Security & Backup",
      ),
    },
  ];

  // Dummy content for "কেন শিক্ষা প্রতিষ্ঠানে ব্যবস্থাপনা সফটওয়্যার প্রয়োজন" section
  const whyTramessyFeatures = [
    {
      icon: Truck,
      title: t("features.tramessy_need.list.title1"),
      description: t("features.tramessy_need.list.description1"),
    },
    {
      icon: Wallet,
      title: t("features.tramessy_need.list.title2"),
      description: t("features.tramessy_need.list.description2"),
    },
    {
      icon: ShieldCheck,
      title: t("features.tramessy_need.list.title3"),
      description: t("features.tramessy_need.list.description3"),
    },
    {
      icon: BarChart,
      title: t("features.tramessy_need.list.title4"),
      description: t("features.tramessy_need.list.description4"),
    },
    {
      icon: Bell,
      title: t("features.tramessy_need.list.title5"),
      description: t("features.tramessy_need.list.description5"),
    },
    {
      icon: Users,
      title: t("features.tramessy_need.list.title6"),
      description: t("features.tramessy_need.list.description6"),
    },
    {
      icon: Puzzle,
      title: t("features.tramessy_need.list.title7"),
      description: t("features.tramessy_need.list.description7"),
    },
    {
      icon: DollarSign,
      title: t("features.tramessy_need.list.title8"),
      description: t("features.tramessy_need.list.description8"),
    },
  ];
  const features = [
    t("features.web_portal.list1"),
    t("features.web_portal.list2"),
    t("features.web_portal.list3"),
    t("features.web_portal.list4"),
    t("features.web_portal.list5"),
    t("features.web_portal.list6"),
    t("features.web_portal.list7"),
  ];

  return (
    <section className="py-16 bg-white">
      <div ref={sectionRef} className="container mx-auto ">
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
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {tramessyFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              animationDelay={`${index * 0.1}s`}
              iconName={
                iconMap[feature.title]
                  ? iconMap[feature.title].displayName
                  : "HelpCircle"
              }
              title={feature.title}
              description={feature.description}
              isSectionInView={isSectionInView}
            />
          ))}
        </div>

        {/* Website Features Section */}
        <div className="bg-white py-12">
          <div
            ref={sectionRef}
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* Left Content */}
            <div
              className={`flex-1 text-center lg:text-left max-w-2xl ${isSectionInView ? "animate-fade-up" : ""}`}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-feature-icon inline-block pb-2">
                  {t("features.web_portal.title")}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {t("features.web_portal.description")}
                </p>
              </div>
              <ul
                ref={sectionRef}
                className="text-gray-700 text-lg space-y-3 text-left"
              >
                {features.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-2 ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}
                    style={{
                      animationDelay: isSectionInView
                        ? `${0.4 + index * 0.1}s`
                        : "0s",
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Illustration */}
            <div
              className={`flex-1 flex justify-center lg:justify-end ${isSectionInView ? "animate-fade-in-left" : ""}`}
            >
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
            {t("features.tramessy_need.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyTramessyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              // Determine row number (assuming 4 items per row)
              const row = Math.floor(index / 4);

              // Apply animation based on row
              let animationClass = "";
              if (row === 0) animationClass = "animate-fade-up";
              else if (row === 1) animationClass = "animate-fade-in-right";
              else if (row === 2) animationClass = "animate-fade-in-left";
              else animationClass = "animate-fade-up";
              return (
                <div
                  key={index}
                  className={`${animationClass} bg-white rounded-lg shadow-sm p-6 border border-feature-border flex flex-col items-center text-center`}
                >
                  <div className="mb-4">
                    {IconComponent && (
                      <IconComponent className="w-12 h-12 text-feature-icon text-primary" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { useState } from "react";
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
import { useTranslation } from "react-i18next";

export default function FeaturesSection() {
  const { t } = useTranslation();
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 });
  const tabs = [
    { id: "truck", name: t("business_types.truck") },
    { id: "rent_car", name: t("business_types.rent_car") },
    { id: "bus", name: t("business_types.bus") },
    { id: "corporate", name: t("business_types.corporate") },
  ];
  const [activeTab, setActiveTab] = useState("truck");

  const featureData = {
    truck: {
      features: [
        {
          icon: <Users className="w-5 h-5 text-white" />,
          title: t("features.vehicle_driver"),
          bgColor: "bg-teal-100",
          iconBg: "bg-teal-500",
        },
        {
          icon: <ClipboardList className="w-5 h-5 text-white" />,
          title: t("features.booking_trip"),
          bgColor: "bg-blue-100",
          iconBg: "bg-blue-500",
        },
        {
          icon: <Wallet className="w-5 h-5 text-white" />,
          title: t("features.income_expense"),
          bgColor: "bg-purple-100",
          iconBg: "bg-purple-500",
        },
        {
          icon: <Gift className="w-5 h-5 text-white" />,
          title: t("features.dues_payment"),
          bgColor: "bg-green-100",
          iconBg: "bg-green-500",
        },
        {
          icon: <Wrench className="w-5 h-5 text-white" />,
          title: t("features.maintenance"),
          bgColor: "bg-orange-100",
          iconBg: "bg-orange-500",
        },
        {
          icon: <BarChart3 className="w-5 h-5 text-white" />,
          title: t("features.reporting"),
          bgColor: "bg-indigo-100",
          iconBg: "bg-indigo-500",
        },
        {
          icon: <ShieldCheck className="w-6 h-6 text-white" />,
          title: t("features.user_management"),
          bgColor: "bg-red-100",
          iconBg: "bg-red-500",
        },
        {
          icon: <UsersRound className="w-6 h-6 text-white" />,
          title: t("features.customer_management"),
          bgColor: "bg-cyan-100",
          iconBg: "bg-cyan-500",
        },
        {
          icon: <FileText className="w-6 h-6 text-white" />,
          title: t("features.billing"),
          bgColor: "bg-orange-100",
          iconBg: "bg-orange-500",
        },
      ],
      contentTitle:
        t("features.content_title"),
      contentText:
        t("features.content_text"),
    },
    rent_car: {
      features: [
        {
          icon: <CalendarCheck className="w-6 h-6 text-white" />,
          title: t("features.rent_car.booking_reservation"),
          bgColor: "bg-blue-100",
          iconBg: "bg-blue-500",
        },
        {
          icon: <Wrench className="w-6 h-6 text-white" />,
          title: t("features.rent_car.maintenance"),
          bgColor: "bg-green-100",
          iconBg: "bg-green-500",
        },
        {
          icon: <MapPin className="w-6 h-6 text-white" />,
          title: t("features.rent_car.gps_tracking"),
          bgColor: "bg-indigo-100",
          iconBg: "bg-indigo-500",
        },
        {
          icon: <SmilePlus className="w-6 h-6 text-white" />,
          title: t("features.rent_car.crm"),
          bgColor: "bg-pink-100",
          iconBg: "bg-pink-500",
        },
        {
          icon: <ShieldCheck className="w-6 h-6 text-white" />,
          title: t("features.rent_car.driver_management"),
          bgColor: "bg-orange-100",
          iconBg: "bg-orange-500",
        },
        {
          icon: <Wallet2 className="w-6 h-6 text-white" />,
          title: t("features.rent_car.financial_management"),
          bgColor: "bg-yellow-100",
          iconBg: "bg-yellow-500",
        },
        {
          icon: <ShieldCheck className="w-6 h-6 text-white" />,
          title: t("features.rent_car.user_management"),
          bgColor: "bg-red-100",
          iconBg: "bg-red-500",
        },
        {
          icon: <Settings className="w-6 h-6 text-white" />,
          title: t("features.rent_car.settings_configuration"),
          bgColor: "bg-cyan-100",
          iconBg: "bg-cyan-500",
        },
        {
          icon: <Bell className="w-6 h-6 text-white" />,
          title: t("features.rent_car.notifications_reminders"),
          bgColor: "bg-purple-100",
          iconBg: "bg-purple-500",
        },
      ],
      contentTitle: t("features.rent_car.content_title"),
      contentText: t("features.rent_car.content_text"),
    },
    bus: {
      features: [
        {
          icon: <Route className="w-6 h-6 text-white" />,
          title: t("features.bus.route_schedule"),
          bgColor: "bg-blue-100",
          iconBg: "bg-blue-500",
        },
        {
          icon: <Ticket className="w-6 h-6 text-white" />,
          title: t("features.bus.ticket_reservation"),
          bgColor: "bg-green-100",
          iconBg: "bg-green-500",
        },
        {
          icon: <Bus className="w-6 h-6 text-white" />,
          title: t("features.bus.fleet_management"),
          bgColor: "bg-orange-100",
          iconBg: "bg-orange-500",
        },
        {
          icon: <Wrench className="w-6 h-6 text-white" />,
          title: t("features.bus.maintenance"),
          bgColor: "bg-indigo-100",
          iconBg: "bg-indigo-500",
        },
        {
          icon: <UsersRound className="w-6 h-6 text-white" />,
          title: t("features.bus.driver_staff_management"),
          bgColor: "bg-pink-100",
          iconBg: "bg-pink-500",
        },
        {
          icon: <Wallet className="w-6 h-6 text-white" />,
          title: t("features.bus.financial_management"),
          bgColor: "bg-yellow-100",
          iconBg: "bg-yellow-500",
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-white" />,
          title: t("features.bus.passenger_data_analytics"),
          bgColor: "bg-cyan-100",
          iconBg: "bg-cyan-500",
        },
        {
          icon: <SmilePlus className="w-6 h-6 text-white" />,
          title: t("features.bus.customer_relationship_management"),
          bgColor: "bg-teal-100",
          iconBg: "bg-teal-500",
        },
        {
          icon: <FileCheck2 className="w-6 h-6 text-white" />,
          title: t("features.bus.legal_compliance_documentation"),
          bgColor: "bg-red-100",
          iconBg: "bg-red-500",
        },
      ],
      contentTitle: t("features.bus.content_title"),
      contentText: t("features.bus.content_text"),
    },
    corporate: {
      features: [
        {
          icon: <BusFront className="w-6 h-6 text-white" />,
          title: t("features.corporate.fleet_management"),
          bgColor: "bg-blue-100",
          iconBg: "bg-blue-500",
        },
        {
          icon: <Wrench className="w-6 h-6 text-white" />,
          title: t("features.corporate.maintenance_management"),
          bgColor: "bg-green-100",
          iconBg: "bg-green-500",
        },
        {
          icon: <UserCog className="w-6 h-6 text-white" />,
          title: t("features.corporate.driver_management"),
          bgColor: "bg-orange-100",
          iconBg: "bg-orange-500",
        },
        {
          icon: <Fuel className="w-6 h-6 text-white" />,
          title: t("features.corporate.fuel_management"),
          bgColor: "bg-yellow-100",
          iconBg: "bg-yellow-500",
        },
        {
          icon: <ShieldCheckIcon className="w-6 h-6 text-white" />,
          title: t("features.corporate.compliance_management"),
          bgColor: "bg-red-100",
          iconBg: "bg-red-500",
        },
        {
          icon: <Wallet className="w-6 h-6 text-white" />,
          title: t("features.corporate.reporting_analytics"),
          bgColor: "bg-teal-100",
          iconBg: "bg-teal-500",
        },
        {
          icon: <Route className="w-6 h-6 text-white" />,
          title: t("features.corporate.route_planning_optimization"),
          bgColor: "bg-indigo-100",
          iconBg: "bg-indigo-500",
        },
        {
          icon: <FileCheck2 className="w-6 h-6 text-white" />,
          title: t("features.corporate.digital_pod"),
          bgColor: "bg-cyan-100",
          iconBg: "bg-cyan-500",
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-white" />,
          title: t("features.corporate.report"),
          bgColor: "bg-purple-100",
          iconBg: "bg-purple-500",
        },
      ],
      contentTitle:
        t("features.corporate.content_title"),
      contentText: t("features.corporate.content_text"),
    },
  };

  const {
    features = [],
    contentTitle = "",
    contentText = "",
  } = featureData[activeTab] || {};

  return (
    <section className="py-20 ">
      <div ref={sectionRef} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-2xl lg:text-3xl font-bold text-gray-700 mb-6 ${isSectionInView ? "animate-fade-up" : "opacity-0"}`}
          >
            {t("features.title")}
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}
            style={{ animationDelay: isSectionInView ? "0.2s" : "0s" }}
          >
            {t("features.sub-title")}
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
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
        <div
          ref={sectionRef}
          className="container mx-auto grid lg:grid-cols-3 gap-5 items-start py-16"
        >
          {/* Features Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-md p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group flex items-center gap-2 ${isSectionInView ? "animate-fade-in-left" : "opacity-0"}`}
                  style={{
                    animationDelay: isSectionInView
                      ? `${0.4 + index * 0.1}s`
                      : "0s",
                  }}
                >
                  <div
                    className={`p-1.5 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={`w-8 h-8 ${feature.iconBg} rounded-xl flex items-center justify-center`}
                    >
                      <span className="text-white text-lg">{feature.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Content Text */}
          <div
            className={`lg:col-span-1 ${isSectionInView ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <div className={`bg-white rounded-md p-6 shadow-sm`}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {contentTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                {contentText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

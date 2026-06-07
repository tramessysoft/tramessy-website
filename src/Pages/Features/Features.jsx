import { useTranslation } from "react-i18next";
import FeaturesSection from "../../components/FeatuerPage/FeatureSection";
import PageHero from "../../components/helpingComp/PageHero";
import { Helmet } from "react-helmet-async";

const Features = () => {
  const { t } = useTranslation();
  const breadcrumbs = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.features") },
  ];
  return (
    <>
       <Helmet>
        <title>Features | Tramessy - Fleet & Transport Management Software</title>
        <meta
          name="description"
          content="Explore Tramessy's powerful features — trip management, vehicle tracking, driver management, billing, and real-time reports for transport businesses in Bangladesh."
        />
        <meta
          name="keywords"
          content="Tramessy features, fleet management features Bangladesh, trip management software, vehicle tracking system BD, transport ERP"
        />
      </Helmet>
      <main>
        <PageHero title={t("nav.features")} breadcrumbs={breadcrumbs} />
        <div className="container mx-auto px-4 py-8">
          <FeaturesSection />
        </div>
      </main>
    </>
  );
};

export default Features;

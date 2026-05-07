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
        {/* <title>Tramessy | Fleet Management Features</title> */}
      </Helmet>
       <meta
          name="description"
          content="Fleet & Transport ERP Software Bangladesh | Tramessy"
        />
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

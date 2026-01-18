import FeaturesSection from "../../components/FeatuerPage/FeatureSection";
import PageHero from "../../components/helpingComp/PageHero";

const Features = () => {
    const breadcrumbs = [
    { label: "হোম", href: "/" },
    { label: "ফিচার" }, 
  ]
    return (
        <main>
      <PageHero title="ফিচার" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto px-4 py-8">
       <FeaturesSection/>
      </div>
    </main>
    );
};

export default Features;
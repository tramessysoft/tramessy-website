import { useTranslation } from "react-i18next";
import AboutTramessySection from "../../components/About/AboutTramessySection";
import MissionSection from "../../components/About/Mission";
import ServicesSection from "../../components/About/Service";
import TechnologySection from "../../components/About/Technology";
import VisionSection from "../../components/About/Vission";
import PageHero from "../../components/helpingComp/PageHero";

const About = () => {
    const { t } = useTranslation();
    const breadcrumbs = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about") }, 
  ]
    return (
        <div>
            <PageHero title={t("nav.about")} breadcrumbs={breadcrumbs}/>
            <AboutTramessySection/>
            <MissionSection/>
            <VisionSection/>
            <ServicesSection/>
            <TechnologySection/>
        </div>
    );
};

export default About;






import Header from "../../shared/header";
import LanguageSwitcher from "../../shared/languageSwitcher";
import ThemeSwitcher from "../../shared/themeSwitcher";
import IntroSection from "./intro";
import AboutSection from "./about";
import FeatureSection from "./feature";
import ServiceSection from "./service";
import Contact from "../../../pages/main/contact";
import Footer from "../../shared/footer";
import PartnerSlider from "./partnerSlider";

const HomeContainer = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <LanguageSwitcher />
        <ThemeSwitcher />
        <IntroSection />
        <AboutSection />
        <PartnerSlider />
        <FeatureSection />
        <ServiceSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomeContainer;

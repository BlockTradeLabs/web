import Header from "../../shared/header";
import ThemeSwitcher from "../../shared/themeSwitcher";
import RoadmapSection from "./roadmap";
import TeamSection from "./team";
import Footer from "../../shared/footer";

const AboutContainer = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <ThemeSwitcher />
        <TeamSection />
        <RoadmapSection />
        <Footer />
      </div>
    </>
  );
};

export default AboutContainer;

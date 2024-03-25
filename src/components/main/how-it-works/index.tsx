import Header from "../../shared/header";
import ThemeSwitcher from "../../shared/themeSwitcher";
import How from "./how";

const HowItWorksContainer = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <ThemeSwitcher />
        <How />
      </div>
    </>
  );
};

export default HowItWorksContainer;

import FAQSection from "../../../components/main/home/faq";
import Footer from "../../../components/shared/footer";
import Header from "../../../components/shared/header";
import LanguageSwitcher from "../../../components/shared/languageSwitcher";
import ThemeSwitcher from "../../../components/shared/themeSwitcher";

const FAQ = () => {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <ThemeSwitcher />
      <FAQSection />
      <Footer />
    </>
  );
};

export default FAQ;

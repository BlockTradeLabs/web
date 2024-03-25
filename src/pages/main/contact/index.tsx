import { Link } from "react-router-dom";
import styles from "../../../components/main/home/testimonial/assets/css/styles.module.css";
import ContactItem from "./contactItem";
import "swiper/css";
import "swiper/css/navigation";
import { slides } from "../../../constants/main/home/contact";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.contact}>
        <div className={`container ${styles.container}`}>
          <header className={styles.header}>
            <div>
              <h2 className={styles.title}>
                {t("home.contact.title")}
                <span>{t("home.contact.titleSpan")}</span>
              </h2>
              <p className={styles.description}>
                {t("home.contact.description")}
              </p>
            </div>
          </header>
          <ul className="row g-4 align-items-stretch">
            {slides.map((slide, index) => (
              <ContactItem key={index} item={slide} />
            ))}
          </ul>
          <div className="text-center">
            <Link to="about/team" className={styles.btnMore}>
              {t("home.contact.btnFAQ")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

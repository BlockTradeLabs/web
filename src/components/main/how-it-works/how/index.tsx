import styles from "./assets/css/styles.module.css";
import { useTranslation } from "react-i18next";

const How = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.team}>
        <div className="container">
          <header className={styles.header}>
            <h2 className={styles.title}>
              {t("home.how-it-works.title")}
              <span>{t("home.how-it-works.titleSpan")}</span>
            </h2>
            <p className={styles.description}>
              {t("home.how-it-works.description")}
            </p>
          </header>
        </div>
      </section>
    </>
  );
};

export default How;

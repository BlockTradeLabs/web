import { Link } from "react-router-dom";
import bgLight from "./assets/images/bg.png";
import bgAgu from "./assets/images/bg-agu.png";
import coinImg from "./assets/images/coin.png";
import ghostImg from "./assets/images/ghosts-agu.png";
// import backgroundImg from "./assets/images/candlestick-graph-1.png";
import { socialMediaLinks } from "../../../../constants/main/home/intro";
import styles from "./assets/css/styles.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/configureStore";
import CommonAnimation from "../../../common/commonAnimation";
import { useTypingText } from "./useTypingText";

const IntroSection = () => {
  const { t } = useTranslation();
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  const variants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  // const texts = ["qwertyuiop", "asdfghjkll", "zxcvbnm"];
  const { word } = useTypingText(
    [
      t("home.intro.titleSpan.1"),
      t("home.intro.titleSpan.2"),
      t("home.intro.titleSpan.3"),
      "Spectre",
    ],
    100,
    20
  );

  return (
    <>
      <section
        style={{
          // boxShadow: `inset 0px -20px 30px 0px #0a0b19`,
          backgroundImage: `url(${bgAgu})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
        className={`${styles.intro}`}
      >
        <div className="container" style={{ height: `100vh` }}>
          <div className={styles.container}>
            <div
              className={`col col-12 col-md-5 col-lg-6 ${styles.ghostImage} ${styles.hero}`}
              style={{
                backgroundImage: `url(${ghostImg})`,
                backgroundPosition: `center`,
                backgroundSize: `contain`,
                backgroundRepeat: `no-repeat`,
              }}
            >
              {/* <img src={ghostImg} alt="hero image" /> */}
            </div>
            <CommonAnimation
              variants={variants1}
              className={`col col-12 col-md-7 ${styles.content}`}
            >
              <div className={styles.imgCoin}>
                <img src={coinImg} alt="coin image" />
              </div>
              <h1 className={styles.title}>
                {t("home.intro.title")} <span>{word}</span>
              </h1>

              {/* <TypingAnimation texts={texts} /> */}

              <p className={styles.description}>
                {t("home.intro.description")}
              </p>
              <div className={styles.btnGroup}>
                <Link to="login" className={styles.btnStart}>
                  <i className="bi bi-telegram"></i>
                  {t("home.intro.btnStart")}
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="https://youtube.com" className={styles.btnJnComty}>
                  <i className="bi bi-discord"></i>
                  {t("home.intro.btnJnComty")}
                </Link>
              </div>
              <div className={styles.social}>
                <p>{t("home.intro.socialTitle")}</p>
                <ul className={styles.socialLinkList}>
                  {socialMediaLinks.map((link, index) => (
                    <li key={index} className={styles.socialLinkItem}>
                      <Link to={link.url}>
                        <i className={`bi ${link.icon}`}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </CommonAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;

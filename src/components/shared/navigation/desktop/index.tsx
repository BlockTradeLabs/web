import { NavLink } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import { mainNavItems } from "../../../../constants/shared/navigation";
import { useTranslation } from "react-i18next";

const DesktopNavigation = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.navList}>
      {mainNavItems.map((item, index) => (
        <li className={styles.navItem} key={index}>
          <NavLink
            to={item.to}
            target={item.to.substring(0, 4) == "http" ? "_blank" : ""}
          >
            {t(`shared.header.navList.${item.label}`)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavigation;

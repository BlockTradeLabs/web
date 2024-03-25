import { useState } from "react";
import { NavLink } from "react-router-dom";
import { handleToggler } from "../../../../helpers/handleToggler";
import styles from "./assets/css/styles.module.css";
import { mainNavItems } from "../../../../constants/shared/navigation";
import { useTranslation } from "react-i18next";

const MobileNavigation = () => {
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => handleToggler(isOpenMenu, setIsOpenMenu)}
        className={styles.btnToggle}
      >
        <i className="bi bi-list"></i>
      </button>

      <div className={`container `}>
        <ul className={`${styles.navList} ${isOpenMenu ? styles.active : ""}`}>
          {mainNavItems.map((item, index) => (
            <li className={styles.navItem} key={index}>
              <NavLink to={item.to}>
                {t(`shared.header.navList.${item.label}`)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;

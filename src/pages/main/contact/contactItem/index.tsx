import { useTranslation } from "react-i18next";
import { ItemProps } from "../../../../models/IContactItem";
import styles from "./assets/css/styles.module.css";
import quoteIcon from "./assets/images/quote-icon.svg";

const ContactItem: React.FC<ItemProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <li className="col-sm-12 col-md-6">
      <div className={styles.item}>
        <h4>{t(`home.contact.slides.${item.contactReference}.title`)}</h4>
        <div className="d-flex align-items-center justify-content-between">
          <div className={styles.contactReference}>
            <div className={styles.authorContent}>
              <span className="text-capitalize">
                {t(`home.contact.slides.${item.contactReference}.description`)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ContactItem;

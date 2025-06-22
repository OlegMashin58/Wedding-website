import MainForm from "../MainForm/MainForm";
import styles from "./index.module.css";

import { ReactComponent as Heart } from "../../assets/icons/hearts-valentines-day-svgrepo-com.svg";

const FormSection = () => {
  return (
    <>
      <div className={styles.form_wrapper}>
        <p className={styles.form__title}>Анкета гостя</p>
        <div className={styles.grid_divider}>
          <span
            style={{
              fontWeight: "bold",
              color: "#333",
              fontSize: "16px",
              padding: "0 10px",
            }}
          >
            <Heart />
          </span>
        </div>
        <MainForm />
      </div>
    </>
  );
};

export default FormSection;

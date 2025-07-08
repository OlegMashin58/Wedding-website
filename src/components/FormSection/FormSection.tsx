import { MainForm } from "../MainForm/MainForm";
import styles from "./index.module.css";

import { ReactComponent as Heart } from "../../assets/icons/hearts-valentines-day-svgrepo-com.svg";

export const FormSection = () => {
  return (
    <>
      <div className={styles.form_wrapper}>
        <span className={styles.form__title}>Анкета гостя</span>
        <span>
          Заполните, пожалуйста, форму, чтобы подтвердить своё присутствие
        </span>
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

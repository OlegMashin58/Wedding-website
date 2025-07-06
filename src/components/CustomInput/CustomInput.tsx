import { useState } from "react";
import { EyeIcon, EyeHideIcon } from "../../components";
import styles from "./index.module.css";

type TInputProps = {
  title?: string;
  placeholder?: string;
  type?: string;
  label?: string;
};

export const CustomInput = ({
  title,
  placeholder,
  type,
  label,
}: TInputProps) => {
  const [show, setShow] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShow(!show);
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>{label}</label>
      <span className={styles.inputTitle}>{title}</span>
      <div className={styles.passwordWrapper}>
        <input
          className={styles.mainInput}
          placeholder={placeholder}
          type={type === "password" ? (show ? "text" : "password") : type}
        />
        {type === "password" ? (
          <span className={styles.eyeIcon} onClick={toggleShowPassword}>
            {show ? <EyeIcon /> : <EyeHideIcon />}
          </span>
        ) : null}
      </div>
    </div>
  );
};

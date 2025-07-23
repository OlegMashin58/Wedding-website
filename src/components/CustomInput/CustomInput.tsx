import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.css";

interface ICustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const CustomInput = forwardRef<HTMLInputElement, ICustomInputProps>(
  ({ label, ...rest }, ref) => (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel}>{label}</label>
      <input className={styles.mainInput} ref={ref} {...rest} />
    </div>
  )
);

CustomInput.displayName = "CustomInput";

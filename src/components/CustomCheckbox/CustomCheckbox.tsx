import styles from "./index.module.css";
import { ChangeEvent } from "react";

interface ICustomCheckboxProps {
  label: string;
  value?: string;
}

export const CustomCheckbox = ({
  label,
  value,
  ...props
}: ICustomCheckboxProps) => {
  return (
    <div className={styles.checkboxWrapper}>
      <input
        className={styles.checkbox}
        type="checkbox"
        value={value}
        {...props}
      />
      <label className={styles.checkboxLabel}>{label}</label>
    </div>
  );
};

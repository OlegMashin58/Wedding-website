import styles from "./index.module.css";
import { ChangeEvent } from "react";

interface ICustomCheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomCheckbox = ({
  label,
  checked,
  onChange,
}: ICustomCheckboxProps) => {
  return (
    <div className={styles.checkboxWrapper}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      ></input>
      <label className={styles.checkboxLabel}>{label}</label>
    </div>
  );
};

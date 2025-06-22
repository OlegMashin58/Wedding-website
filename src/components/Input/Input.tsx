import styles from "./index.module.css";

type TInputProps = {
  title: string;
  placeholder?: string;
};

export const Input = ({ title, placeholder }: TInputProps) => {
  return (
    <div className={styles.input__container}>
      <span className={styles.input__title}>{title}</span>
      <input className={styles.main__input} placeholder={placeholder} />
    </div>
  );
};

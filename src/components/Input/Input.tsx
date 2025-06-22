import styles from "./index.module.css";

type TInputProps = {
  title: string;
};

const Input = ({ title }: TInputProps) => {
  return (
    <div className={styles.input__container}>
      <span className={styles.input__title}>{title}</span>
      <input className={styles.main__input} />
    </div>
  );
};

export default Input;

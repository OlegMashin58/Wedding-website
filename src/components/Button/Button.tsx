import styles from "./index.module.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className={styles.main__button} onClick={onClick}>
      {title}
    </button>
  );
};

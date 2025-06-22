import styles from "./index.module.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className={styles.main__button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

import styles from "./index.module.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const MainButton = ({ title, onClick }: ButtonProps) => {
  return (
    <button className={styles.mainButton} onClick={onClick}>
      {title}
    </button>
  );
};

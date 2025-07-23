import styles from "./index.module.css";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const MainButton = ({ title, onClick, type }: ButtonProps) => {
  return (
    <button className={styles.mainButton} onClick={onClick} type={type}>
      {title}
    </button>
  );
};

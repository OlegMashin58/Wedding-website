import { useState } from "react";
import styles from "./index.module.css";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={styles.burgerMenu} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

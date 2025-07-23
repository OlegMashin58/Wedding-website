import { BurgerMenu } from "../BurgerMenu";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <BurgerMenu />
      </div>
    </>
  );
};

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./index.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header__wrapper}>
        <BurgerMenu />
      </div>
    </>
  );
};

export default Header;

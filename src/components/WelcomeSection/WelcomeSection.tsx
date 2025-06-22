import styles from "./index.module.css";
import Photo from "./../../assets/images/WelcomeImage.jpg";

export const WelcomeSection = () => {
  return (
    <>
      <div className={styles.welcome__container}>
        <span className={styles.welcome__title}>Олег и Екатерина</span>
        <img src={Photo} className={styles.welcome__photo}></img>
      </div>
    </>
  );
};

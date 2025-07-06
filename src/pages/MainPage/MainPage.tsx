import {
  Header,
  WelcomeSection,
  FormSection,
  DetailsSection,
} from "../../components";
import styles from "./index.module.css";

export const MainPage = () => {
  return (
    <>
      <div className={styles.mainPage}>
        <Header />
        <WelcomeSection />
        <FormSection />
        <DetailsSection />
      </div>
    </>
  );
};

import { Header } from "../components/Header/Header";
import { WelcomeSection } from "../components/WelcomeSection/WelcomeSection";
import { FormSection } from "../components/FormSection/FormSection";
import { DetailsSection } from "../components/DetailsSection/DetailsSection";
import styles from "./index.module.css";

const MainPage = () => {
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

export default MainPage;

import styles from "./index.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { SyntheticEvent } from "react";

const WORDS = {
  INPUT_TITLE: "Ваше Имя и Фамилия",
  BUTTON_TITLE: "Отправить",
};

const MainForm = () => {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input title={WORDS.INPUT_TITLE} />
        <Button title={WORDS.BUTTON_TITLE} onClick={() => {}} />
      </form>
    </div>
  );
};

export default MainForm;

import styles from "./index.module.css";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { SyntheticEvent } from "react";

const TITLE = {
  NAME_AND_SURNAME: "Ваше Имя и Фамилия",
  WILL_YOU_BE_WITH: "Если вы будете не одни, пожалуйста, заполните поле ниже",
  SUBMIT: "Отправить",
};

const PLACEHOLDER = {
  NAME_AND_SURNAME: "Имя и Фамилия",
  WILL_YOU_BE_WITH: "Имя и Фамилия вашего спутника/спутницы",
};

export const MainForm = () => {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          title={TITLE.NAME_AND_SURNAME}
          placeholder={PLACEHOLDER.NAME_AND_SURNAME}
        />
        <Input
          title={TITLE.WILL_YOU_BE_WITH}
          placeholder={PLACEHOLDER.WILL_YOU_BE_WITH}
        />
        <Button title={TITLE.SUBMIT} onClick={() => {}} />
      </form>
    </div>
  );
};

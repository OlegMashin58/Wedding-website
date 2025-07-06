import { CustomInput, MainButton } from "../../components";
// import { MainButton } from "../MainButton";
import styles from "./index.module.css";

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
        <CustomInput
          title={TITLE.NAME_AND_SURNAME}
          placeholder={PLACEHOLDER.NAME_AND_SURNAME}
        />
        <CustomInput
          title={TITLE.WILL_YOU_BE_WITH}
          placeholder={PLACEHOLDER.WILL_YOU_BE_WITH}
        />
        <MainButton title={TITLE.SUBMIT} onClick={() => {}} />
      </form>
    </div>
  );
};

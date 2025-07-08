import { CustomInput, MainButton, CustomCheckbox } from "../../components";
import styles from "./index.module.css";
import { useState, SyntheticEvent } from "react";

const TITLE = {
  NAME_AND_SURNAME: "Ваше Имя и Фамилия",
  WILL_YOU_BE_WITH: "Если вы будете не одни, пожалуйста, заполните поле ниже",
  SUBMIT: "Отправить",
};

const PLACEHOLDER = {
  NAME_AND_SURNAME: "Имя и Фамилия",
  WILL_YOU_BE_WITH: "Имя и Фамилия вашего спутника/спутницы",
};

const DRINKS = [
  { name: "Вино" },
  { name: "Коньяк" },
  { name: "Водка" },
  { name: "Шампанское" },
  { name: "Виски" },
  { name: "Безалкогольные напики" },
];

export const MainForm = () => {
  const [extraInputs, setExtraInputs] = useState<string[]>([]);

  const handleAddInput = () => {
    setExtraInputs((prev) => [...prev, ""]);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <CustomInput
          label={TITLE.NAME_AND_SURNAME}
          placeholder={PLACEHOLDER.NAME_AND_SURNAME}
        />
        {extraInputs.map((_, idx) => (
          <CustomInput
            key={idx}
            label={TITLE.WILL_YOU_BE_WITH + ` #${idx + 2}`}
            placeholder={PLACEHOLDER.WILL_YOU_BE_WITH}
          />
        ))}
        <MainButton title={"+"} onClick={handleAddInput} />
        <span>
          Уточните Ваши предпочтения в алкоголе, выбрав один или несколько
          вариантов:
        </span>
        <div className={styles.checkboxGroup}>
          {DRINKS.map((drink) => (
            <CustomCheckbox key={drink.name} label={drink.name} />
          ))}
        </div>
        <MainButton title={TITLE.SUBMIT} onClick={() => {}} />
      </form>
    </div>
  );
};

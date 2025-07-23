import { CustomInput, MainButton, CustomCheckbox } from "../../components";
import styles from "./index.module.css";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { DRINKS, TITLE, PLACEHOLDER } from "./consts";

interface Companion {
  name: string;
}

interface MainFormValues {
  name: string;
  companions: Companion[];
  drinks: string[];
}

export const MainForm = () => {
  const { control, register, handleSubmit, watch } = useForm<MainFormValues>({
    defaultValues: {
      name: "",
      companions: [],
      drinks: [],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "companions",
  });

  const onSubmit: SubmitHandler<MainFormValues> = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label={TITLE.NAME_AND_SURNAME}
          placeholder={PLACEHOLDER.NAME_AND_SURNAME}
          {...register("name")}
        />
        {fields.map((field, idx) => (
          <CustomInput
            key={field.id}
            label={TITLE.WILL_YOU_BE_WITH + ` #${idx + 2}`}
            placeholder={PLACEHOLDER.WILL_YOU_BE_WITH}
            {...register(`companions.${idx}.name` as const)}
          />
        ))}
        <MainButton title={"+"} onClick={() => append({ name: "" })} />
        <span>
          Уточните Ваши предпочтения в алкоголе, выбрав один или несколько
          вариантов:
        </span>
        <div className={styles.checkboxGroup}>
          {DRINKS.map((drink) => (
            <CustomCheckbox
              key={drink.name}
              value={drink.name}
              label={drink.name}
              {...register("drinks")}
            />
          ))}
        </div>
        <MainButton title={TITLE.SUBMIT} type="submit" />
      </form>
    </div>
  );
};

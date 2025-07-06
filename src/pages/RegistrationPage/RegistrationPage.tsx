import { useState } from "react";
import { MainButton, CustomInput } from "../../components";
// import { EyeIcon } from "../../components/SVGComponents/EyeIcon";
import styles from "./index.module.css";

export const RegistrationPage = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(true);

  const BUTTON_TITLE = {
    LOGIN: "Войти",
    REGISTRATION: "Зарегестрироваться",
    CANCEL: "Отмена",
  };

  const FORM_TITLE = {
    ENTRANCE: "Вход",
    REGISTRATION: "Регистрация",
  };

  const INPUT_TITLE = {
    NUMBER_PHONE: "Номер телефона",
    PASSWORD: "Пароль",
    REPEAT_PASSWORD: "Повторите пароль",
  };

  const renderFormTitle = () => {
    return (
      <div className={styles.formTitleWrapper}>
        <span className={styles.formTitle}>
          {isLogin ? FORM_TITLE.ENTRANCE : FORM_TITLE.REGISTRATION}
        </span>
      </div>
    );
  };

  const handleToggleRegistration = () => {
    setIsLogin(false);
  };

  const handleToggleLogin = () => {
    setIsLogin(true);
  };

  const renderLoginForm = () => {
    return (
      <div className={styles.formLogin}>
        <CustomInput label={INPUT_TITLE.NUMBER_PHONE} />
        <CustomInput
          label={INPUT_TITLE.PASSWORD}
          type={"password"}
          placeholder={INPUT_TITLE.PASSWORD}
        />
        <MainButton title={BUTTON_TITLE.LOGIN} onClick={() => {}} />
        <span
          className={styles.toggleSwitchForm}
          onClick={handleToggleRegistration}
        >
          {FORM_TITLE.REGISTRATION}
        </span>
      </div>
    );
  };

  const renderRegistrationForm = () => {
    return (
      <div className={styles.formRegistration}>
        <CustomInput label={INPUT_TITLE.NUMBER_PHONE} />
        <CustomInput label={INPUT_TITLE.PASSWORD} />
        <CustomInput label={INPUT_TITLE.REPEAT_PASSWORD} />
        <MainButton title={BUTTON_TITLE.REGISTRATION} onClick={() => {}} />
        <span className={styles.toggleSwitchForm} onClick={handleToggleLogin}>
          {BUTTON_TITLE.LOGIN}
        </span>
      </div>
    );
  };

  return (
    <div className={styles.registrationWrapper}>
      <form className={styles.form}>
        {renderFormTitle()}
        {isLogin ? renderLoginForm() : renderRegistrationForm()}
      </form>
    </div>
  );
};

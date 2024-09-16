import { useState } from "react";
import s from "./Form.module.css";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import Button from "../common/Button/Button";
import Header from "../common/Header/Header";
import rocket from "../../images/rocket.png";
import ErrorMsg from "../common/ErrorMsg/ErrorMsg";

const INITIAL_STATE = {
  name: "",
  surname: "",
  birthday: "",
  phone: "",
  website: "",
  about: "",
  technologies: "",
  project: "",

  nameError: "",
  surnameError: "",
  birthdayError: "",
  phoneError: "",
  websiteError: "",
  aboutError: "",
  technologiesError: "",
  projectError: "",
};

const Form = ({ onSubmit }) => {
  const [customState, setState] = useState(INITIAL_STATE);

  const handleChangeInput = (name, e) => {
    let value = e.target.value;

    if (name === "phone") {
      const phoneMask = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);

      const value = phoneMask
        .slice(1, 5)
        .filter((item) => item !== "")
        .join("-");

      setState((customState) => ({
        ...customState,
        [e.target.name]: value,
      }));
    } else {
      setState((customState) => ({
        ...customState,
        [e.target.name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const state = { ...customState };

    let isError = false;

    for (const [key, value] of Object.entries(state)) {
      state[key] = value.trim();
    }

    if (state.name === "") {
      state.nameError = "Поле обязательное для заполнения";
      isError = true;
    } else if (state.name.charAt(0) !== state.name.charAt(0).toUpperCase()) {
      state.nameError = "Имя должно начинаться с большой буквы";
      isError = true;
    } else {
      state.nameError = "";
    }

    if (state.surname === "") {
      state.surnameError = "Поле обязательное для заполнения";
      isError = true;
    } else if (
      state.surname.charAt(0) !== state.surname.charAt(0).toUpperCase()
    ) {
      state.surnameError = "Фамилия должна начинаться с большой буквы";
      isError = true;
    } else {
      state.surnameError = "";
    }

    if (state.birthday === "") {
      state.birthdayError = "Поле обязательное для заполнения";
      isError = true;
    } else {
      state.birthdayError = "";
    }

    if (state.phone === "") {
      state.phoneError = "Поле обязательное для заполнения";
      isError = true;
    } else if (!state.phone.match(/\d-\d{4}-\d{2}-\d{2}/g)) {
      state.phoneError = "Телефон должен быть в формате X-XXXX-XX-XX";
      isError = true;
    } else {
      state.phoneError = "";
    }

    if (state.website === "") {
      state.websiteError = "Поле обязательное для заполнения";
      isError = true;
    } else if (!state.website.match("https?://.+")) {
      state.websiteError =
        "Сайт должен начинаться с http://... или https://...";
      isError = true;
    } else {
      state.websiteError = "";
    }

    if (state.about === "") {
      state.aboutError = "Поле обязательное для заполнения";
      isError = true;
    } else if (state.about.length > 600) {
      state.aboutError = "Максимальное кол-во символов: 600";
      isError = true;
    } else {
      state.aboutError = "";
    }

    if (state.technologies === "") {
      state.technologiesError = "Поле обязательное для заполнения";
      isError = true;
    } else if (state.technologies.length > 600) {
      state.technologiesError = "Максимальное кол-во символов: 600";
      isError = true;
    } else {
      state.technologiesError = "";
    }

    if (state.project === "") {
      state.projectError = "Поле обязательное для заполнения";
      isError = true;
    } else if (state.project.length > 600) {
      state.projectError = "Максимальное кол-во символов: 600";
      // eslint-disable-next-line no-unused-vars
      isError = true;
    } else {
      state.projectError = "";
    }

    if (isError) {
      setState(state);
    } else {
      let {
        name,
        surname,
        birthday,
        phone,
        website,
        about,
        technologies,
        project,
      } = state;

      onSubmit({
        name,
        surname,
        birthday,
        phone,
        website,
        about,
        technologies,
        project,
      });
    }
  };

  const reset = () => {
    setState(INITIAL_STATE);
  };

  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <div className={s.contentWrap}>
          <Header text="Создание анкеты" />
          <img src={rocket} className={s.image} alt="rocket" />
        </div>
      </div>

      <form className={s.form}>
        <Input
          label="Имя"
          name="name"
          value={customState.name}
          placeholder="пример: Екатерина"
          onChange={handleChangeInput}
        />
        <ErrorMsg error={customState.nameError} />

        <Input
          label="Фамилия"
          name="surname"
          value={customState.surname}
          placeholder="пример: Борисенко"
          onChange={handleChangeInput}
        />
        <ErrorMsg error={customState.surnameError} />

        <Input
          label="Дата Рождения"
          type="date"
          name="birthday"
          value={customState.birthday}
          onChange={handleChangeInput}
        />
        <ErrorMsg error={customState.birthdayError} />

        <Input
          label="Телефон"
          type="tel"
          name="phone"
          value={customState.phone}
          placeholder="пример: X-XXXX-XX-XX"
          onChange={handleChangeInput}
        />
        <ErrorMsg error={customState.phoneError} />

        <Input
          label="Сайт"
          name="website"
          value={customState.website}
          placeholder="пример: http://website.com"
          onChange={handleChangeInput}
        />
        <ErrorMsg error={customState.websiteError} />

        <TextArea
          label="О себе"
          name="about"
          value={customState.about}
          rows={7}
          placeholder="Напишите коротко о себе ..."
          maxLength={600}
          onChange={handleChangeInput}
        />
        <ErrorMsg error={customState.aboutError} />

        <TextArea
          label="Стек технологий"
          name="technologies"
          value={customState.technologies}
          rows={7}
          placeholder="Перечислите стек технологий которыми Вы владеете..."
          maxLength={600}
          onChange={handleChangeInput}
        />
        <ErrorMsg error={customState.technologiesError} />

        <TextArea
          label="Описание последнего проекта"
          name="project"
          value={customState.project}
          rows={7}
          placeholder="Опишите свой последний проект..."
          maxLength={600}
          onChange={handleChangeInput}
        />
        <ErrorMsg error={customState.projectError} />

        <div className={s.buttonWrapper}>
          <Button text="Отменить" type="button" onClick={reset} />
          <Button text="Сохранить" type="button" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Form;

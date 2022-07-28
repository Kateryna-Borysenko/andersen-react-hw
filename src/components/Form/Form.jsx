import React, { Component } from "react";
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

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  handleChangeInput = (name, e) => {
    let value = e.target.value;

    if (name === "phone") {
      const phoneMask = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);

      const value = phoneMask
        .slice(1, 5)
        .filter((item) => item !== "")
        .join("-");

      this.setState({ [e.target.name]: value });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const state = { ...this.state };

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
      this.setState(state);
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

      this.props.onSubmit({
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

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
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
            value={this.state.name}
            placeholder="пример: Екатерина"
            onChange={this.handleChangeInput}
          />
          <ErrorMsg error={this.state.nameError} />

          <Input
            label="Фамилия"
            name="surname"
            value={this.state.surname}
            placeholder="пример: Борисенко"
            onChange={this.handleChangeInput}
          />
          <ErrorMsg error={this.state.surnameError} />

          <Input
            label="Дата Рождения"
            type="date"
            name="birthday"
            value={this.state.birthday}
            onChange={this.handleChangeInput}
          />
          <ErrorMsg error={this.state.birthdayError} />

          <Input
            label="Телефон"
            type="tel"
            name="phone"
            value={this.state.phone}
            placeholder="пример: X-XXXX-XX-XX"
            onChange={this.handleChangeInput}
          />
          <ErrorMsg error={this.state.phoneError} />

          <Input
            label="Сайт"
            name="website"
            value={this.state.website}
            placeholder="пример: http://website.com"
            onChange={this.handleChangeInput}
          />
          <ErrorMsg error={this.state.websiteError} />

          <TextArea
            label="О себе"
            name="about"
            value={this.state.about}
            rows={7}
            placeholder="Напишите коротко о себе ..."
            maxLength={600}
            onChange={this.handleChangeInput}
          />
          <ErrorMsg error={this.state.aboutError} />

          <TextArea
            label="Стек технологий"
            name="technologies"
            value={this.state.technologies}
            rows={7}
            placeholder="Перечислите стек технологий которыми Вы владеете..."
            maxLength={600}
            onChange={this.handleChangeInput}
          />
          <ErrorMsg error={this.state.technologiesError} />

          <TextArea
            label="Описание последнего проекта"
            name="project"
            value={this.state.project}
            rows={7}
            placeholder="Опишите свой последний проект..."
            maxLength={600}
            onChange={this.handleChangeInput}
          />
          <ErrorMsg error={this.state.projectError} />

          <div className={s.buttonWrapper}>
            <Button text="Отменить" type="button" onClick={this.reset} />
            <Button
              text="Сохранить"
              type="button"
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

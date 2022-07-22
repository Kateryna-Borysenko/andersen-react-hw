import React, { Component } from "react";
import s from "./Form.module.css";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import Button from "../common/Button/Button";
// import ErrorMsg from '../common/ErrorMsg/ErrorMsg'

const INITIAL_STATE = {
  name: "",
  surname: "",
  birthDate: "",
  phone: "",
  website: "",
  about: "",
  technologies: "",
  lastProject: "",
  isError: false,
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };

    this.initialState = Object.assign({}, this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.phoneNumberMask = this.phoneNumberMask.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  }

  reset = () => {
    this.setState(this.initialState);
  };

  handleChange(e) {
    const normalize = (text) => {
      const words = text.split(" ");
      return words
        .map((word) => {
          const capLetter = word.charAt(0).toUpperCase();
          const rest = word.substring(1);
          return `${capLetter}${rest}`;
        })
        .join(" ");
    };

    const { name, value } = e.target;

    if (name === "name" || name === "surname") {
      this.setState({ [name]: normalize(value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  phoneNumberMask(e) {
    const phoneMask = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);

    const value = phoneMask
      .slice(1, 5)
      .filter((item) => item !== "")
      .join("-");

    this.setState({ [e.target.name]: value });
  }

  onBlur(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  }

  render() {
    const isDisabledBtn = Object.values(this.state).some(
      (value) => value === ""
    );

    return (
      <form className={s.form}>
        <Input
          label="Имя"
          type="text"
          name="name"
          value={this.state.name}
          placeholder="пример: Екатерина"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          message="Фамилия может содержать только буквы, апостроф, тире и пробелы."
          onChange={this.handleChange}
          onBlur={this.onBlur}
        />
        {/* {isError && <ErrorMsg message={'Error Message'} />} */}

        <Input
          label="Фамилия"
          type="text"
          name="surname"
          value={this.state.surname}
          placeholder="пример: Борисенко"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          message="Фамилия может содержать только буквы, апостроф, тире и пробелы."
          onChange={this.handleChange}
          onBlur={this.onBlur}
        />
        {/* {isError && <ErrorMsg message={''} />} */}

        <Input
          label="Дата Рождения"
          type="date"
          name="birthDate"
          value={this.state.birthDate}
          onChange={this.handleChange}
          onBlur={this.onBlur}
        />
        {/* {isError && <ErrorMsg message={''} />} */}

        <Input
          label="Телефон"
          type="tel"
          name="phone"
          value={this.state.phone}
          placeholder="пример: 7-7777-77-77"
          pattern="\d{1}-\d{4}-\d{2}-\d{2}"
          message="Номер телефона должен состоять из максимум 12 символом с учетом дефисов в формате: 7-7777-77-77"
          onChange={this.phoneNumberMask}
          onBlur={this.onBlur}
        />
        {/* {isError && <ErrorMsg message={''} />} */}

        <Input
          label="Сайт"
          type="text"
          name="website"
          value={this.state.website}
          placeholder="пример: https://website.com"
          pattern=""
          message="Должен начинаться с https://"
          onChange={this.handleChange}
          onBlur={this.onBlur}
        />
        {/* {isError && <ErrorMsg message={''} />} */}

        <TextArea
          label="О себе"
          name="about"
          value={this.state.about}
          rows={7}
          placeholder="Напишите коротко о себе ..."
          maxLength={600}
          onChange={this.handleChange}
          onBlur={this.onBlur}
        />
        {/* {isError && <ErrorMsg message={''} />} */}

        <TextArea
          label="Стек технологий"
          name="technologies"
          value={this.state.technologies}
          rows={7}
          placeholder="Перечислите стек технологий которыми Вы владеете..."
          maxLength={600}
          onChange={this.handleChange}
          onBlur={this.onBlur}
        />
        {/* {isError && <ErrorMsg message={''} />} */}

        <TextArea
          label="Описание последнего проекта"
          name="lastProject"
          value={this.state.lastProject}
          rows={7}
          placeholder="Опишите свой последний проект..."
          maxLength={600}
          onChange={this.handleChange}
          onBlur={this.onBlur}
        />
        {/* {isError && <ErrorMsg message={''} />} */}

        <div className={s.buttonWrapper}>
          <Button text="Отменить" type="button" onClick={this.reset} />
          <Button
            text="Сохранить"
            type="submit"
            disabled={isDisabledBtn}
            onClick={this.handleSubmit}
            onBlur={this.onBlur}
          />
        </div>
      </form>
    );
  }
}

export default Form;

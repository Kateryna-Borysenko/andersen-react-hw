import React, { Component } from "react";
import { nanoid } from "nanoid";
import s from "./Form.module.css";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

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
  disabled: false,
};

class Form extends Component {
  state = { ...INITIAL_STATE };

  handleChange = (e) => {
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

    if (name === "name" || "surname") {
      this.setState({ [name]: normalize(value).trim() });
    } else {
      this.setState({ [name]: value.trim() });
    }
  };

  reset = () => this.setState({ ...INITIAL_STATE });

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({ id: nanoid(), ...this.state });

    this.reset();
  };

  render() {
    const {
      name,
      surname,
      birthDate,
      phone,
      website,
      about,
      technologies,
      lastProject,
      isError,
      disabled,
    } = this.state;

    return (
      <form className={s.form}>
        <Input
          label="Имя"
          type="text"
          name="name"
          value={name}
          placeholder="пример: Екатерина"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          message="Фамилия может содержать только буквы, апостроф, тире и пробелы."
          onChange={this.handleChange}
        />

        {isError && <ErrorMsg message={"Error Message"} />}

        <Input
          label="Фамилия"
          type="text"
          name="surname"
          value={surname}
          placeholder="пример: Борисенко"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          message="Фамилия может содержать только буквы, апостроф, тире и пробелы."
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <Input
          label="Дата Рождения"
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <Input
          label="Телефон"
          type="tel"
          name="phone"
          value={phone}
          placeholder="пример: 7-7777-77-77"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          message="Номер телефона должен состоять из максимум 12 символом с учетом дефисов"
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <Input
          label="Сайт"
          type="text"
          name="website"
          value={website}
          placeholder="пример: https://website.com"
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <TextArea
          label="О себе"
          name="about"
          value={about}
          rows={7}
          placeholder="Напишите коротко о себе ..."
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <TextArea
          label="Стек технологий"
          name="technologies"
          value={technologies}
          rows={7}
          placeholder="Перечислите стек технологий которыми Вы владеете..."
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <TextArea
          label="Описание последнего проекта"
          name="lastProject"
          value={lastProject}
          rows={7}
          placeholder="Опишите свой последний проект..."
          onChange={this.handleChange}
        />
        {isError && <ErrorMsg message={""} />}

        <div className={s.buttonWrapper}>
          <Button text="Отменить" type="button" onClick={this.reset} />
          <Button
            text="Сохранить"
            type="submit"
            disabled={disabled}
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    );
  }
}

export default Form;

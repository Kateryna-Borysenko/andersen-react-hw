import React, { Component } from "react";
import s from "./Form.module.css";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import Button from "../common/Button/Button";
import Header from "../common/Header/Header";
import rocket from "../../images/rocket.png";

const INITIAL_STATE = {
  name: "",
  surname: "",
  birthDate: "",
  phone: "",
  website: "",
  about: "",
  technologies: "",
  lastProject: "",
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

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

    if (name === "name" || name === "surname") {
      this.setState({ [name]: normalize(value) });
    } else {
      this.setState({ [name]: value });
    }
  };

  phoneNumberMask = (e) => {
    const phoneMask = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);

    const value = phoneMask
      .slice(1, 5)
      .filter((item) => item !== "")
      .join("-");

    this.setState({ [e.target.name]: value });
  };

  onBlur = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  };

  render() {
    const isDisabledBtn = Object.values(this.state).some(
      (value) => value === ""
    );

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
            type="text"
            name="name"
            value={this.state.name}
            placeholder="пример: Екатерина"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Фамилия может содержать только буквы, апостроф, тире и пробелы."
            onChange={this.handleChange}
            onBlur={this.onBlur}
          />

          <Input
            label="Фамилия"
            type="text"
            name="surname"
            value={this.state.surname}
            placeholder="пример: Борисенко"
            pattern='^[a-zA-Zа-яА-Я]+(([" -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$'
            title="Фамилия может содержать только буквы, апостроф, тире и пробелы."
            onChange={this.handleChange}
            onBlur={this.onBlur}
          />

          <Input
            label="Дата Рождения"
            type="date"
            name="birthDate"
            value={this.state.birthDate}
            onChange={this.handleChange}
            onBlur={this.onBlur}
          />

          <Input
            label="Телефон"
            type="tel"
            name="phone"
            value={this.state.phone}
            placeholder="пример: 7-7777-77-77"
            pattern="\d{1}-\d{4}-\d{2}-\d{2}"
            title="Номер телефона должен состоять из максимум 12 символом с учетом дефисов в формате: 7-7777-77-77"
            onChange={this.phoneNumberMask}
            onBlur={this.onBlur}
          />

          <Input
            label="Сайт"
            type="text"
            name="website"
            value={this.state.website}
            placeholder="пример: https://website.com"
            pattern=""
            title="Website должен начинаться с https://"
            onChange={this.handleChange}
            onBlur={this.onBlur}
          />

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
      </div>
    );
  }
}

export default Form;

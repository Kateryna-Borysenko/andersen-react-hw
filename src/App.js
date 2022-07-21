import React, { Component } from "react";
import Container from "./components/Container/Container";
import Form from "./components/Form/Form";
import image from "./images/rocket.png";
import s from "./App.module.css";
class App extends Component {
  state = {
    data: [
      {
        name: "Kateryna",
        surname: "Borysenko",
        birthDate: "1983-02-10",
        phone: "+380992053330",
        website: "https://my-website.com",
        about: "Software Engineer",
        technologies: "CSS HTML JS React Express Node.js MongoDB",
        lastProject: "This Project",
      },
    ],
  };

  onSubmit = (newData) => {
    const isInDataList = (data) => data.phone === newData.phone;

    this.state.data.some(isInDataList)
      ? alert(
          `${newData.phone} Пользователь с таким номером телефона уже существует`
        )
      : this.setState((prevState) => ({
          data: [
            ...prevState.data,
            {
              ...newData,
            },
          ],
        }));
  };

  render() {
    return (
      <Container>
        <div className={s.wrap}>
          <div className={s.contentWrap}>
            <h1 className={s.title}>Создание анкеты</h1>
            <img src={image} className={s.image} alt="brain" />
            <p className={s.description}>
              Lorem Ipsum — это просто текст-пустышка полиграфической и наборной
              индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли
              с 1500-х годов, когда неизвестный печатник взял гранку шрифта и
              перемешал ее, чтобы сделать книгу образцов шрифтов. Он пережил не
              только пять столетий, но и скачок в электронный набор текста,
              оставаясь практически неизменным. Он был популяризирован в 1960-х
              годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum,
              а совсем недавно - с программным обеспечением для настольных
              издательских систем, таким как Aldus PageMaker, включая версии
              Lorem Ipsum.
            </p>
          </div>
          <Form onSubmit={this.onSubmit} />
        </div>
      </Container>
    );
  }
}

export default App;

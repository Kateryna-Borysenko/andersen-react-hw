import React, { Component } from "react";
import Container from "../common/Container/Container";
import Form from "../Form/Form";
import image from "../../images/rocket.png";
import s from "./App.module.css";
class App extends Component {
  state = {
    data: [],
  };

  handleAddData = (newData) => {
    this.setState((prevState) => ({
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
              оставаясь практически неизменным.
            </p>
          </div>
          <Form onSubmit={this.handleAddData} />
        </div>
      </Container>
    );
  }
}

export default App;

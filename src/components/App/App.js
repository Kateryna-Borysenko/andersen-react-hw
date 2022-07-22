import React, { Component } from "react";
import Container from "../common/Container/Container";
import Form from "../Form/Form";
import image from "../../images/rocket.png";
import s from "./App.module.css";
class App extends Component {
  state = {
    data: [],
    isFormOpen: true,
  };

  handleAddData = (newData) => {
    //TODO -> написать проверку на дубликаты
    this.setState((prevState) => ({
      data: [
        ...prevState.data,
        {
          ...newData,
        },
      ],
      isFormOpen: false,
    }));
  };

  render() {
    return (
      <Container>
        <div className={s.wrap}>
          <div className={s.contentWrap}>
            <h1 className={s.title}>Создание анкеты</h1>
            <img src={image} className={s.image} alt="brain" />
          </div>
          {this.state.isFormOpen && <Form onSubmit={this.handleAddData} />}
        </div>
      </Container>
    );
  }
}

export default App;

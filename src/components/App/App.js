import React, { Component } from "react";
import Container from "../common/Container/Container";
import Form from "../Form/Form";
import brain from "../../images/brain.png";
import rocket from "../../images/rocket.png";
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
    const { isFormOpen } = this.state;
    return (
      <Container>
        <div className={s.wrap}>
          <div className={s.contentWrap}>
            <h1 className={s.title}>Создание анкеты</h1>
            {!isFormOpen && <img src={brain} className={s.image} alt="brain" />}
            {isFormOpen && (
              <img src={rocket} className={s.image} alt="rocket" />
            )}
          </div>
          {isFormOpen && <Form onSubmit={this.handleAddData} />}
        </div>
      </Container>
    );
  }
}

export default App;

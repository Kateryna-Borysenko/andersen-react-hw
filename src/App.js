import React, { Component } from "react";
import Container from "./components/Container/Container";
import Form from "./components/Form/Form";

class App extends Component {
  state = {
    data: [],
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
        <Form onSubmit={this.onSubmit} />
      </Container>
    );
  }
}

export default App;

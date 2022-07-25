import React, { Component } from "react";
import Container from "../common/Container/Container";
import Form from "../Form/Form";
import Profile from "../Profile/Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isFormOpen: true,
    };
  }

  handleAddData = (newData) => {
    this.setState((prevState) => ({
      data: { ...prevState.data, ...newData },
      isFormOpen: false,
    }));
  };

  render() {
    const { isFormOpen } = this.state;
    const { data } = this.state;

    return (
      <Container>
        {isFormOpen && <Form onSubmit={this.handleAddData} />}
        {!isFormOpen && <Profile data={data} />}
      </Container>
    );
  }
}

export default App;

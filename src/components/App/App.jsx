import React, { Component } from "react";
import Container from "../common/Container/Container";
import Form from "../Form/Form";
import Profile from "../Profile/Profile";

const INITIAL_STATE = {
  name: "",
  surname: "",
  birthday: "",
  phone: "",
  website: "",
  about: "",
  technologies: "",
  project: "",

  submitted: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  handleAddData = (newData) => {
    this.setState({ ...newData, submitted: true });
  };

  render() {
    const { submitted, ...data } = this.state;

    return (
      <Container>
        {!submitted && <Form onSubmit={this.handleAddData} />}
        {submitted && <Profile data={data} />}
      </Container>
    );
  }
}

export default App;

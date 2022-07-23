import React, { Component } from "react";
import Container from "../common/Container/Container";
import Form from "../Form/Form";
import s from "./App.module.css";
import Profile from "../Profile/Profile";

class App extends Component {
  state = {
    data: [
      {
        name: "Екатерина",
        surname: "Борисенко",
        birthDate: "1993-02-10",
        phone: "1-2345-67-89",
        website: "https://my-website.com",
        about: "I'm Software Engineer",
        technologies: "CSS HTML JS React Node.js Express Mongo DB",
        lastProject: "This project is the last",
      },
    ],
    isFormOpen: true,
  };

  handleAddData = (newData) => {
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
    console.log("🍒 isFormOpen", isFormOpen);

    const { data } = this.state;
    console.log("🍒 data", data);

    return (
      <Container>
        {isFormOpen && <Form onSubmit={this.handleAddData} />}
        {!isFormOpen && <Profile data={data} />}
      </Container>
    );
  }
}

export default App;

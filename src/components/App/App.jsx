import { useState } from "react";
import Container from "../common/Container/Container";
import Form from "../Form/Form";
import Profile from "../Profile/Profile";

const App = () => {
  const [data, setData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAddData = (newData) => {
    setData(newData);
    setSubmitted(true);
  };

  return (
    <Container>
      {!submitted && <Form onSubmit={handleAddData} />}
      {submitted && <Profile data={data} />}
    </Container>
  );
};

export default App;

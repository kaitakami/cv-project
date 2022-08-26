import { Component } from "react";
import Form from "./components/Form";
import Result from "./components/Result";


class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        <div className="container md:grid md:grid-cols-2">
          <Form />
          <Result />
        </div>
      </div>
    );
  }
}

export default App;

import { Component } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App min-h-screen bg-slate-100">
        <div className="container">
          <h1 className="font-bold text-3xl md:text-5xl text-center p-4">
            CV Generator
          </h1>
          <p className="font-bold text-center pl-4 mb-5">
            Create a professional CV in 5 minutes by just filling this form
          </p>
          <div className="container md:grid md:grid-cols-2 m-auto py-6 gap-7">
            <Form />
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import { Fragment, Component } from "react";
import "./App.css";
import FormularioCadastro from "./Componente/FormularioCadastro/FormularioCadastro";


class App extends Component {
  render(){
    return (
      <Fragment>
        <h1> Formulário de cadastro </h1>
        <FormularioCadastro/>
      </Fragment>
    );
  }
}

export default App;

import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Componente/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/500.css";
import { validarCPF, validarSenha, validarTexto } from "./models/cadastro";
import { ValidacaoCadastro } from "./contexts/ValidacaoCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacaoCadastro.Provider
          value={{
            cpf: validarCPF,
            senha: validarSenha,
            nome: validarTexto,
            sobrenome: validarTexto,
          }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacaoCadastro.Provider>
      </Container>
    );
  }
}
function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;

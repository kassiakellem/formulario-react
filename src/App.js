import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Componente/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import '@fontsource/roboto/500.css';
import DadosPessoais from "./Componente/FormularioCadastro/DadosPessoais";
import DadosUsuario from "./Componente/FormularioCadastro/DadosUsuario";
import DadosEntrega from "./Componente/FormularioCadastro/DadosEntrega/DadosEntrega";

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth='sm'>
        <Typography variant="h3"
         component="h1"
          align="center"> 

        Formulário de cadastro

         </Typography>
        <DadosPessoais aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
        <DadosUsuario/>
        <DadosEntrega/>
      </Container>
    );
  }
}
function aoEnviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf){ 
  if(cpf.length !== 11){
  return {valido: false, texto:"CPF deve ter 11 digitos"}
}else{
  return {valido:true, texto:""}
}
}

export default App;

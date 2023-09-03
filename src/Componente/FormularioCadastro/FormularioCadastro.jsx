import React, { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega/DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";


function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState("")
  useEffect(()=>{
    if(etapaAtual === Formulario.length- 1){
    aoEnviar(dadosColetados)
}})

  const Formulario = [
  <DadosUsuario aoEnviar={ColetarDados}/>,
  <DadosPessoais aoEnviar={ColetarDados} validarCPF={validarCPF} />, 
  <DadosEntrega aoEnviar={ColetarDados}/>,
  <Typography variant="h5" margin={5} textAlign={"center"}>Obrigada pelo cadastro!</Typography>
]

  function ColetarDados(dados){
    setDados({...dadosColetados, ...dados})
    Proximo();
    
  }

  function Proximo() {
 setEtapaAtual(etapaAtual+1);
  }

  

  return (
    <>
   <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
      {Formulario [etapaAtual]};
      
    </>
   
  );

  }



export default FormularioCadastro;

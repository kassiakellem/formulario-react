import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega/DadosEntrega";


function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const Formulario = [<DadosUsuario aoEnviar={Proximo}/>,<DadosPessoais aoEnviar={Proximo} validarCPF={validarCPF} />, <DadosEntrega aoEnviar={aoEnviar}/>]

  function Proximo() {
 setEtapaAtual(etapaAtual+1);
  }

  

  return (
    <>
      
      {Formulario [etapaAtual]};
      
    </>
   
  );

  }



export default FormularioCadastro;

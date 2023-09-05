import React from "react";
import { validarCPF, validarTexto, validarSenha } from "../models/cadastro";

const ValidacaoCadastro = React.createContext({
  cpf: validarCPF,
  senha: validarSenha,
  nome: validarTexto,
  sobrenome: validarTexto,
});


export { ValidacaoCadastro };

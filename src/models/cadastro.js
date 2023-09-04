function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
    if (senha.length <= 4 || senha.length >= 72) {
      return { valido: false, texto: "Senha deve ter de 4 a 72 dígitos" };
    } else {
      return { valido: true, texto: "" };
    }
  }

  function validarTexto(texto) {
    if (texto.length <= 0 || texto.length >= 72) {
      return { valido: false, texto: "O campo deve ter de 4 a 72 dígitos" };
    } else {
      return { valido: true, texto: "" };
    }
  }
  
  export {validarCPF, validarSenha, validarTexto};
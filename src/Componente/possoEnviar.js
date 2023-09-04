function possoEnviar(erros) {
  for (let campo in erros) {
    if (!erros[campo].valido) {
      return false;
    }
  }
  return true;
}

export { possoEnviar };

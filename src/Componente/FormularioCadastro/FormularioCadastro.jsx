import React from "react";
import { Button } from '@mui/material';

function FormularioCadastro(){
  return (
    <form>
        <label>Nome</label>
      <input type="text"/>

      <label>Sobrenome</label>
      <input type="text"/>

      <label>CPF</label>
      <input type="text"/>

      <label>Promoção</label>
      <input type="checkbox"/>

      <label>Novidades</label>
      <input type="checkbox"/>

      <Button type="submit" variant="contained" color="primary">Cadastro</Button>
    </form>
  );
}

export default FormularioCadastro;

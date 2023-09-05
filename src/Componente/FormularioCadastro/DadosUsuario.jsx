import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ValidacaoCadastro } from "../../contexts/ValidacaoCadastro";
import { useErros } from "../../Hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes= useContext(ValidacaoCadastro)
  const [ erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar(erros)) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        onBlur={validarCampos}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        name="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;

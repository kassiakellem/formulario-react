import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { possoEnviar } from "../possoEnviar";
import { ValidacaoCadastro } from "../../contexts/ValidacaoCadastro";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const objetosDeValidacao = {
    senha: { valido: true, texto: "" },
  };
  const [erros, setErros] = useState(objetosDeValidacao);

  const validacoes= useContext(ValidacaoCadastro)

  function validarCampos(event) {
    const { name, value } = event.target;
    if (validacoes[name] == undefined) {
      return;
    }

    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

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

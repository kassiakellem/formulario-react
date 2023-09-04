import React, { useContext, useState } from "react";

import {
  Button,
  FormControl,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { ValidacaoCadastro } from "../../contexts/ValidacaoCadastro";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const objetosDeValidacao = {
    cpf: { valido: true, texto: "" },
    nome: { valido: true, texto: "" },
    sobrenome: { valido: true, texto: "" },
  };
  const [erros, setErros] = useState(objetosDeValidacao);

  const validacoes = useContext(ValidacaoCadastro);

  function validarCampos(event) {
    const { name, value } = event.target;
    validarPeloName(name, value);
  }
  function validarPeloName(name, value) {
    if (validacoes[name] != undefined) {
      const novoEstado = { ...erros };
      novoEstado[name] = validacoes[name](value);
      setErros((estadoAnterior) => novoEstado);
      console.log(erros);
    }
  }

  function possoEnviar() {
    validarPeloName("nome", nome);
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        name="nome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        onBlur={validarCampos}
        error={!erros.sobrenome.valido}
        helperText={erros.sobrenome.texto}
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        name="sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;

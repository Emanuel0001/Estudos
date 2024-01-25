import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import Botao from "../Button";
import { useState } from "react";

const Form = (props) => {
  const [nome, setNome] = useState("");

  const onSubmitForm = (evento) => {
    evento.preventDefault();
  }


  return (
    <section className="formulario">
      <form onSubmit={onSubmitForm}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Form;

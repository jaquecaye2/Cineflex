import axios from "axios";
import styled from "styled-components";
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TituloTela from "./shared/TituloTela";
import Button from "./shared/Button";
import ClasseAssento from "./shared/ClasseAssento";

function Assentos({
  assento,
  idsAssentos,
  setIdAssentos,
  assentosReservados,
  setAssentosReservados,
}) {
  const [classe, setClasse] = React.useState("");

  React.useEffect(() => {
    if (assento.isAvailable === false) {
      setClasse("indisponivel");
    } else {
      setClasse("disponivel");
    }
  }, []);

  function alterarClasse() {
    if (classe === "disponivel") {
      setClasse("selecionado");
      setIdAssentos([...idsAssentos, assento.id]);
      setAssentosReservados([...assentosReservados, assento.name]);
    } else if (classe === "selecionado") {
      setClasse("disponivel");
      for (let i = 0; i < idsAssentos.length; i++) {
        if (idsAssentos[i] === assento.id) {
          idsAssentos.splice(idsAssentos.indexOf(assento.id), 1);
          assentosReservados.splice(
            assentosReservados.indexOf(assento.name),
            1
          );
        }
      }
    } else if (classe === "indisponivel") {
      alert("Esse assento não está disponível");
    }
  }

  return (
    <div className={classe} onClick={alterarClasse}>
      <p>{assento.name}</p>
    </div>
  );
}

export default function TelaAssentos() {
  let idFilme = localStorage.getItem("idFilme");

  const { idSessao } = useParams();

  const [filme, setFilme] = React.useState({});
  const [diaFilme, setDiaFIlme] = React.useState({});
  const [sessao, setSessao] = React.useState({});
  const [assentos, setAssentos] = React.useState([]);

  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");

  const [idsAssentos, setIdAssentos] = React.useState([]);
  const [assentosReservados, setAssentosReservados] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      setFilme({ ...response.data.movie });
      setSessao({ ...response.data });
      setDiaFIlme({ ...response.data.day });
      setAssentos([...response.data.seats]);
    });
  }, []);

  localStorage.setItem("idSessao", idSessao);

  function submitForm(event) {
    event.preventDefault();
    const dados = {
      ids: idsAssentos,
      name: nome,
      cpf,
    };

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      dados
    );

    promise.then(() => {
      localStorage.setItem("nomeFilme", filme.title);
      localStorage.setItem("dia", diaFilme.date);
      localStorage.setItem("hora", sessao.name);
      localStorage.setItem("assentos", assentosReservados);
      localStorage.setItem("nomeComprador", nome);
      localStorage.setItem("cpfComprador", cpf);
      navigate("/sucesso");
    });
  }

  return (
    <TelaAssentosStyle>
      <Link to={`/filme/${idFilme}`}>
      <div className="voltar"><Button>Voltar</Button></div>
      </Link>
      <Header />
      <TituloTela>Selecione o(s) assento(s)</TituloTela>
      <AssentosStyle>
        {assentos.length === 0 ? (
          <img src="https://c.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif" />
        ) : (
          assentos.map((assento, index) => (
            <Assentos
              key={index}
              assento={assento}
              idsAssentos={idsAssentos}
              setIdAssentos={setIdAssentos}
              assentosReservados={assentosReservados}
              setAssentosReservados={setAssentosReservados}
            />
          ))
        )}
      </AssentosStyle>

      <ClassificacaoAssentos>
        <ClasseAssento type="selecionado" name="Selecionado" />
        <ClasseAssento type="disponivel" name="Disponível" />
        <ClasseAssento type="indisponivel" name="Indisponível" />
      </ClassificacaoAssentos>

      <Form onSubmit={submitForm}>
        <div>
          <label htmlFor="nome">Nome do comprador:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome..."
            required
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF do comprador:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Digite seu CPF..."
            required
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
          />
        </div>
        <div className="buttonText">
          <Button type="submit">Reservar assento(s)</Button>
        </div>
      </Form>

      <Footer
        title={filme.title}
        capa={filme.posterURL}
        weekday={diaFilme.weekday}
        sessao={sessao.name}
      />
    </TelaAssentosStyle>
  );
}

const TelaAssentosStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-top: 67px;
`;

const AssentosStyle = styled.div`
  margin: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  p {
    font-size: 12px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 35px;
    margin: 9px 5px;
  }

  div:hover {
    cursor: pointer;
    filter: brightness(0.6);
  }
`;

const ClassificacaoAssentos = styled.div`
  margin: 20px 56px 0px 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.form`
  margin: 45px 25px 220px 25px;

  div {
    margin-bottom: 7px;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 18px;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 51px;
    border: 1px solid #d4d4d4;
    font-size: 18px;
    color: #afafaf;
    padding: 0 18px;
    font-style: italic;
    margin-bottom: 10px;
    border-radius: 3px;
  }
`;

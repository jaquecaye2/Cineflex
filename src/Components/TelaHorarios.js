import axios from "axios";
import styled from "styled-components";
import React from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TituloTela from "./shared/TituloTela";
import Button from "./shared/Button";

function Horario({ showtimes }) {
  return (
    <Link to={`/sessao/${showtimes.id}`}>
      <Button>{showtimes.name}</Button>
    </Link>
  );
}

function OpcaoSessao({ day }) {
  return (
    <OpcaoHorario>
      <p>
        {day.weekday} - {day.date}
      </p>
      <div>
        {day.showtimes.map((showtimes, index) => (
          <Horario key={index} showtimes={showtimes} />
        ))}
      </div>
    </OpcaoHorario>
  );
}

export default function TelaHorarios() {
  const { idFilme } = useParams();

  const [sessoes, setSessoes] = React.useState({});
  const [days, setDays] = React.useState([]);

  React.useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((response) => {
      setSessoes({ ...response.data });
      setDays([...response.data.days]);
    });
  }, []);

  localStorage.setItem("idFilme", idFilme);

  return (
    <TelaHorariosStyle>
      <Link to="/">
      <div className="voltar"><Button>Voltar</Button></div>
      </Link>
      <Header />
      <TituloTela>Selecione o horário</TituloTela>
      <div className="opcoesHorarios">
        <div>
          {days.length === 0 ? (
            <img src="https://c.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif" />
          ) : (
            days.map((day, index) => <OpcaoSessao key={index} day={day} />)
          )}
        </div>
      </div>
      <Footer title={sessoes.title} capa={sessoes.posterURL} />
    </TelaHorariosStyle>
  );
}

const TelaHorariosStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-top: 67px;

  .opcoesHorarios {
    margin: 0 25px 210px 25px;
  }
`;

const OpcaoHorario = styled.div`
  margin-bottom: 25px;

  p {
    margin-bottom: 25px;
    font-size: 20px;
  }
`;

import axios from "axios";

import React from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TituloTela from "./shared/TituloTela";
import Button from "./shared/Button";

function Horario({showtimes}) {
  return (
    <Link to={`/sessao/${showtimes.id}`}>
      <Button>{showtimes.name}</Button>
    </Link>
  );
}

function OpcaoSessao({ day }) {
  return (
    <div className="opcaoHorario">
      <p>
        {day.weekday} - {day.date}
      </p>
      <div className="horarios">
        {day.showtimes.map((showtimes, index) => <Horario key={index} showtimes={showtimes}/>)}
      </div>
    </div>
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

  return (
    <div className="telaHorarios">
      <Header />
      <TituloTela>Selecione o horário</TituloTela>
      <div className="opcoesHorarios">
        <div className="opcaoHorario">
          {days.map((day, index) => (
            <OpcaoSessao key={index} day={day} />
          ))}
        </div>
      </div>
      <Footer title={sessoes.title} capa={sessoes.posterURL}/>
    </div>
  );
}

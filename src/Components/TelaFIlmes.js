import axios from "axios";
import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Header from "./Header";
import TituloTela from "./shared/TituloTela";

function Filme({ idFilme, poster }) {
  return (
    <Link to={`/filme/${idFilme}`}>
      <CapaFilme>
        <img src={poster} alt="capa filme" />
      </CapaFilme>
    </Link>
  );
}

export default function TelaFilmes() {
  const [filmes, setFilmes] = React.useState([]);

  React.useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((response) => {
      setFilmes([...response.data]);
    });
  }, []);

  return (
    <TelaFilmesStyle>
      <Header />
      <TituloTela>Selecione o filme</TituloTela>
      <CaixaFilmes>
        {filmes.length === 0 ? (
          <img src="https://c.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif" />
        ) : (
          filmes.map((filme, index) => (
            <Filme key={index} idFilme={filme.id} poster={filme.posterURL} />
          ))
        )}
      </CaixaFilmes>
    </TelaFilmesStyle>
  );
}

const TelaFilmesStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-top: 67px;
`;

const CaixaFilmes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 20px;
  margin-bottom: 75px;
`;

const CapaFilme = styled.div`
  width: 129px;
  height: 193px;
  margin: 8px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    filter: brightness(0.6);
  }

  img {
    width: 129px;
    height: 193px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

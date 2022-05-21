import axios from "axios";
import React from "react";

import { Link } from "react-router-dom";

import Header from "./Header";
import TituloTela from "./shared/TituloTela";

function Filme({ idFilme, poster }) {
  return (
    <Link to={`/filme/${idFilme}`}>
      <div className="capaFilme">
        <img src={poster} alt="capa filme" />
      </div>
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
    <div className="telaFilmes">
      <Header />
      <TituloTela>Selecione o filme</TituloTela>
      <div className="caixaFilmes">
        {filmes.length === 0 ? (
          <img src="https://c.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif" />
        ) : (
          filmes.map((filme, index) => (
            <Filme key={index} idFilme={filme.id} poster={filme.posterURL} />
          ))
        )}
      </div>
    </div>
  );
}

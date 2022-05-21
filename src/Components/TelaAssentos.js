import axios from "axios";

import React from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TituloTela from "./shared/TituloTela";
import Button from "./shared/Button";

function Assentos({assento}){

  const [classe, setClasse] = React.useState("")

  React.useEffect(() => {
    if (assento.isAvailable === false){
      setClasse("indisponivel")
    } else {
      setClasse("disponivel")
    }
  }, [])

  function alterarClasse(){
    if (classe === "disponivel"){
      setClasse("selecionado")
    }
  }

  return(
      <div className={classe} onClick={alterarClasse}>
        <p>{assento.name}</p>
      </div>
  )
}

export default function TelaAssentos() {
  const { idSessao } = useParams();

  const [filme, setFilme] = React.useState({})
  const [diaFilme, setDiaFIlme] = React.useState({})
  const [assentos, setAssentos] = React.useState([]);

  React.useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      setFilme({...response.data.movie})
      setDiaFIlme({...response.data.day})
      setAssentos([...response.data.seats]);
    });
  }, []);

  return (
    <div className="telaAssentos">
      <Header />
      <TituloTela>Selecione o(s) assento(s)</TituloTela>
      <div className="assentos">
        {assentos.map((assento, index) => <Assentos key={index} assento={assento}/>)}
      </div>

      <div className="classificacaoAssentos">
        <div className="classeAssento">
          <div className="selecionado"></div>
          <p>Selecionado</p>
        </div>
        <div className="classeAssento">
          <div className="disponivel"></div>
          <p>Disponível</p>
        </div>
        <div className="classeAssento">
          <div className="indisponivel"></div>
          <p>Indisponível</p>
        </div>
      </div>

      <form>
        <div>
          <label htmlFor="nome">Nome do comprador:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome..."
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF do comprador:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Digite seu CPF..."
          />
        </div>
        <div className="buttonText">
          <Link to="/sucesso">
            <Button>Reservar assento(s)</Button>
          </Link>
        </div>
      </form>

      <Footer title={filme.title} capa={filme.posterURL} weekday={diaFilme.weekday} date={diaFilme.date}/>
    </div>
  );
}

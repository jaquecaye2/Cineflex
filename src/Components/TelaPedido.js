import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import Header from "./Header";
import Button from "./shared/Button";

export default function TelaPedido() {
  let nomeFilme = localStorage.getItem("nomeFilme");
  let dia = localStorage.getItem("dia");
  let hora = localStorage.getItem("hora");
  let assentos = localStorage.getItem("assentos");
  let nomeComprador = localStorage.getItem("nomeComprador");
  let cpfComprador = localStorage.getItem("cpfComprador");

  let arrayAssentos = assentos.split(",");
  arrayAssentos.sort((a, b) => a - b);

  let idSessao = localStorage.getItem("idSessao");

  const navigate = useNavigate();

  function voltarHome() {
    navigate("/");
    nomeFilme = "";
    dia = "";
    hora = "";
    assentos = "";
    nomeComprador = "";
    cpfComprador = "";
  }

  return (
    <TelaPedidoStyle>
      <Link to={`/sessao/${idSessao}`}>
        <div className="voltar">
          <Button>Voltar</Button>
        </div>
      </Link>
      <Header />
      <h4>Pedido feito com sucesso!</h4>
      <Escolha>
        <h5>Filme e sessão</h5>
        <p>{nomeFilme}</p>
        <p>
          {dia} {hora}
        </p>
      </Escolha>
      <Escolha>
        <h5>Ingressos</h5>
        {arrayAssentos.map((assento, index) => (
          <p key={index}>Assento {assento}</p>
        ))}
      </Escolha>
      <Escolha>
        <h5>Comprador</h5>
        <p>Nome: {nomeComprador}</p>
        <p>CPF: {cpfComprador}</p>
      </Escolha>
      <div className="buttonText" onClick={voltarHome}>
        <Button>Voltar pra Home</Button>
      </div>
    </TelaPedidoStyle>
  );
}

const TelaPedidoStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-top: 67px;

  h4 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #247a6b;
    margin: 35px 70px;
  }
`;

const Escolha = styled.div`
  margin: 15px 28px;

  h5 {
    font-weight: bold;
    line-height: 35px;
    font-size: 24px;
  }

  p {
    font-size: 22px;
    line-height: 28px;
  }
`;

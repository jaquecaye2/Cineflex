import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  function voltarHome() {
    navigate("/");
    nomeFilme = ""
    dia = ""
    hora = ""
    assentos = ""
    nomeComprador = ""
    cpfComprador = ""
  }

  return (
    <div className="telaPedido">
      <Header />
      <h4>Pedido feito com sucesso!</h4>
      <div className="escolha">
        <h5>Filme e sessão</h5>
        <p>{nomeFilme}</p>
        <p>
          {dia} {hora}
        </p>
      </div>
      <div className="escolha">
        <h5>Ingressos</h5>
        {arrayAssentos.map((assento, index) => (
          <p key={index}>Assento {assento}</p>
        ))}
      </div>
      <div className="escolha">
        <h5>Comprador</h5>
        <p>Nome: {nomeComprador}</p>
        <p>CPF: {cpfComprador}</p>
      </div>
      <div className="buttonText" onClick={voltarHome}>
        <Button>Voltar pra Home</Button>
      </div>
    </div>
  );
}

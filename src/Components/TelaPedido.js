import { Link } from "react-router-dom";

import Header from "./Header";
import Button from "./shared/Button";

export default function TelaPedido() {
  return (
    <div className="telaPedido">
      <Header />
      <h4>Pedido feito com sucesso!</h4>
      <div className="escolha">
        <h5>Filme e sessão</h5>
        <p>Enola Holmes</p>
        <p>24/06/2021 15:00</p>
      </div>
      <div className="escolha">
        <h5>Ingressos</h5>
        <p>Assento 15</p>
        <p>Assento 16</p>
      </div>
      <div className="escolha">
        <h5>Comprador</h5>
        <p>Nome: João da Silva Sauro</p>
        <p>CPF: 123.456.789-10</p>
      </div>
      <div className="buttonText">
        <Link to="/"><Button>Voltar pra Home</Button></Link>
      </div>
    </div>
  );
}

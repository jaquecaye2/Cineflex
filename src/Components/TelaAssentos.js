import { Link } from "react-router-dom";

import Header from "./Header";
import TituloTela from "./shared/TituloTela";
import Button from "./shared/Button";

import filme1 from "../assets/images/capa-filme-1.jpg"

export default function TelaAssentos() {
  let listaAssentos = [];

  for (let i = 1; i <= 50; i++) {
    listaAssentos.push(i);
  }

  return (
    <div className="telaAssentos">
      <Header />
      <TituloTela>Selecione o(s) assento(s)</TituloTela>
      <div className="assentos">
        {listaAssentos.map((a) => (
          <div className="disponivel">
            <p>{a}</p>
          </div>
        ))}
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

      {/*CONTINUAR O FORM*/}
      <form>
        <div>
          <label for="nome">Nome do comprador:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome..."
          />
        </div>
        <div>
          <label for="cpf">CPF do comprador:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Digite seu CPF..."
          />
        </div>
        <div className="buttonText">
          <Link to="/sucesso"><Button>Reservar assento(s)</Button></Link>
        </div>
      </form>

      {/*FAZER UM COMPONENTE FOOTER */}
      <div className="footer">
        <div className="filmeSelecionado">
          <div>
            <img src={filme1} alt="capa filme" />
          </div>
        </div>
        <div className="tituloFilmeSelecionado">
          <h3>A menina que roubava livros</h3>
          <h3>Quinta-feira - 24/06/2021</h3>
        </div>
      </div>
    </div>
  );
}
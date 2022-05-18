import { Link } from "react-router-dom";

import Header from "./Header";
import TituloTela from "./shared/TituloTela";
import Button from "./shared/Button";

import filme1 from "../assets/images/capa-filme-1.jpg"

export default function TelaHorarios() {
  return (
    <div className="telaHorarios">
      <Header />
      <TituloTela>Selecione o horário</TituloTela>
      <div className="opcoesHorarios">
        <div className="opcaoHorario">
          <p>Quinta-feira - 24/06/2021</p>
          <div className="horarios">
            <Link to="/sessao"><Button>15:00</Button></Link>
            <Link to="/sessao"><Button>19:00</Button></Link>
          </div>
        </div>
        <div className="opcaoHorario">
          <p>Sexta-feira - 25/06/2021</p>
          <div className="horarios">
            <Link to="/sessao"><Button>15:00</Button></Link>
            <Link to="/sessao"><Button>19:00</Button></Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="filmeSelecionado">
          <div>
            <img src={filme1} alt="capa filme" />
          </div>
        </div>
        <div className="tituloFilmeSelecionado">
          <h3>A menina que roubava livros</h3>
        </div>
      </div>
    </div>
  );
}

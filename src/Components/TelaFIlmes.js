import { Link } from "react-router-dom";

import Header from "./Header";
import TituloTela from "./shared/TituloTela";

import filme1 from "../assets/images/capa-filme-1.jpg";
import filme2 from "../assets/images/capa-filme-2.webp";
import filme3 from "../assets/images/capa-filme-3.jpg";
import filme4 from "../assets/images/capa-filme-4.jpeg";
import filme5 from "../assets/images/capa-filme-5.jpg";
import filme6 from "../assets/images/capa-filme-6.jpg";

export default function TelaFilmes() {
  return (
    <div className="telaFilmes">
      <Header />
      <TituloTela>Selecione o filme</TituloTela>
      <div className="caixaFilmes">
        <Link to="/filme">
            <div className="capaFilme">
              <img src={filme1} alt="capa filme" />
            </div>
        </Link>
        <Link to="/filme">
            <div className="capaFilme">
              <img src={filme2} alt="capa filme" />
            </div>
        </Link>
        <Link to="/filme">
            <div className="capaFilme">
              <img src={filme3} alt="capa filme" />
            </div>
        </Link>
        <Link to="/filme">
            <div className="capaFilme">
              <img src={filme4} alt="capa filme" />
            </div>
        </Link>
        <Link to="/filme">
            <div className="capaFilme">
              <img src={filme5} alt="capa filme" />
            </div>
        </Link>
        <Link to="/filme">
            <div className="capaFilme">
              <img src={filme6} alt="capa filme" />
            </div>
        </Link>
      </div>
    </div>
  );
}

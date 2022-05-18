import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaFilmes from "./TelaFIlmes";
import TelaHorarios from "./TelaHorarios";
import TelaAssentos from "./TelaAssentos";
import TelaPedido from "./TelaPedido";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaFilmes />} />
        <Route path="/filme" element={<TelaHorarios />} />
        <Route path="/sessao" element={<TelaAssentos />} />
        <Route path="/sucesso" element={<TelaPedido />} />
      </Routes>
    </BrowserRouter>
  );
}

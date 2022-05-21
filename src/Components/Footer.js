export default function Footer({title, capa, weekday, sessao}) {
  return (
    <div className="footer">
      <div className="filmeSelecionado">
        <div>
          <img src={capa} alt="capa filme" />
        </div>
      </div>
      <div className="tituloFilmeSelecionado">
        <h3>{title}</h3>
        <h3>{(weekday && sessao) ? `${weekday} - ${sessao}` : ""}</h3>
      </div>
    </div>
  );
}
 
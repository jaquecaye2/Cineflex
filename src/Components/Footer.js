export default function Footer({title, capa}) {
  return (
    <div className="footer">
      <div className="filmeSelecionado">
        <div>
          <img src={capa} alt="capa filme" />
        </div>
      </div>
      <div className="tituloFilmeSelecionado">
        <h3>{title}</h3>
        <h3></h3>
      </div>
    </div>
  );
}

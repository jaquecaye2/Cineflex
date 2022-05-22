import styled from "styled-components";

export default function Footer({ title, capa, weekday, sessao }) {
  return (
    <FooterStyle>
      <FilmeSelecionado>
        <div>
          <img src={capa} alt="capa filme" />
        </div>
      </FilmeSelecionado>
      <TituloFilmeSelecionado>
        <h3>{title}</h3>
        <h3>{weekday && sessao ? `${weekday} - ${sessao}` : ""}</h3>
      </TituloFilmeSelecionado>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 117px;
  background-color: var(--cor-footer);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #9eadba;
`;

const FilmeSelecionado = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: right;

  div {
    width: 64px;
    height: 89px;
    background-color: var(--cor-branca);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 48px;
    height: 72px;
    object-fit: cover;
  }
`;

const TituloFilmeSelecionado = styled.div`
  width: 70%;

  h3 {
    font-size: 22px;
    text-align: left;
    line-height: 30px;
  }
`;

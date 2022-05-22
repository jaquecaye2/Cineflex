import styled from "styled-components";

export default function TituloTela({ children }) {
  return (
    <CaixaTituloTela>
      <h2>{children}</h2>
    </CaixaTituloTela>
  );
}

const CaixaTituloTela = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 24px;
  }
`;

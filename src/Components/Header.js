import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Link to="/">
      <HeaderStyle>
        <h1>CINEFLEX</h1>
      </HeaderStyle>
    </Link>
  );
}

const HeaderStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 67px;
  background-color: var(--cor-header);
  color: var(--cor-laranja);

  h1 {
    font-size: 34px;
    text-decoration: none;
  }
`;

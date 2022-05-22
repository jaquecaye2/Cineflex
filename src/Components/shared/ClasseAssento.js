import styled from 'styled-components';

export default function ClasseAssento({ type, name }) {
  return (
    <ClasseAssentoStyle>
      <div className={type}></div>
      <p>{name}</p>
    </ClasseAssentoStyle>
  );
}

const ClasseAssentoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-bottom: 6px;
  }

  p {
    font-size: 13px;
    color: #4e5a65;
  }
`;

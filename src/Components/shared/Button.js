import styled from 'styled-components';

export default function Button({children}){
    return (
        <ButtonStyle>
            {children}
        </ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    border: none;
    background-color: var(--cor-laranja);
    color: var(--cor-branca);
    font-size: 18px;
    height: 43px;
    border-radius: 3px;
    padding: 0 15px;
    margin-right: 10px;

    &:hover{
        cursor: pointer;
        filter: brightness(0.6);
    }
`
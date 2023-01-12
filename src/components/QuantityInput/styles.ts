import styled from "styled-components";

export const ChangeQuantity = styled.div`
    display: flex;

    input{
        width: 30px;
        text-align: center;
        background: ${(props) => props.theme['input']};
        border: none;
    }
`

export const ButtonQuantity = styled.button`
    color: ${(props) => props.theme['purple']};
    background: ${(props) => props.theme['button']};
    border: none;
    box-shadow: none;
    padding: 0.5rem;
    display: flex;
    align-items: center;

    &:hover{
        background: ${(props) => props.theme['hover']};
        cursor: pointer;
    }
`


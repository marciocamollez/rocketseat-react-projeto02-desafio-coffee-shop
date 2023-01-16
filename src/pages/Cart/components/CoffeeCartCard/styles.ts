import styled from "styled-components";

export const ItemReview = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

export const RemoveButton = styled.button`
    background: ${(props) => props.theme['button']};
    color: ${(props) => props.theme['purple']};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin-top: 0.5rem;

    &:hover{
        background: ${(props) => props.theme['hover']};
        color: ${(props) => props.theme['text']};
        cursor: pointer;
    }
`
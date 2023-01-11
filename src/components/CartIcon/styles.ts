import styled from "styled-components";

export const CartHeaderButton = styled.button`
    display: flex;
    border: none;
    align-items: center;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.5rem;
    border-radius: 10px;
    position: relative;

    span{
        background: ${(props) => props.theme['yellow-dark']};
        color: #FFF;
        border-radius: 50%;
        position: absolute;
        top: -5px;
        right: -5px;
        width: 15px;
        height: 15px;
        font-size: 0.8rem;
    }

    &:hover{
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['yellow-light']};
        cursor: pointer;
        transition: 0.5s;

        span{
            background: ${(props) => props.theme['yellow-light']};
            color: ${(props) => props.theme['yellow-dark']};
        }
    }
`
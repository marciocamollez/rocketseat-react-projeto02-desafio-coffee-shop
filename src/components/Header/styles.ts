import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    max-width: 1120px;
    margin: auto;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;

    section{
        display: flex;
        gap: 1rem;
        
        .location{
            background: ${(props) => props.theme['purple-light']};
            color: ${(props) => props.theme['purple-dark']};
            padding: 0.5rem;
            border-radius: 10px;
            display: flex;
            align-items: center;
        }
    }
`
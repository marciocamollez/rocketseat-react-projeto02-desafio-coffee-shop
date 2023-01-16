import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    max-width: 1120px;
    margin: auto;
    justify-content: space-between;

    p{
        color: ${(props) => props.theme['text']};
        font-size: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
`
export const CompleteOrderContainer = styled.form`
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`
import styled from "styled-components";

export const CartReviewContainer = styled.div`

    h2{
        color: ${(props) => props.theme['title']};
        font-size: 1.5rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

`
export const CartReviewWrapper = styled.div`
    background: ${(props) => props.theme['card']};
    border-radius: 10px 0 10px 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    a{
        text-decoration: none;
    }
`
export const ItemReview = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

export const ValueInfos = styled.div`
    display: flex;
    border-top: 1px solid ${(props) => props.theme['text']};
    padding-top: 1rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;

    p{
        display: inline-block;
    }
`

export const ConfirmButton = styled.button`
    background: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme['white']};
    border-radius: 10px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 100%;

    &:hover{
        background: ${(props) => props.theme['yellow-dark']};
        cursor: pointer;
    }
`
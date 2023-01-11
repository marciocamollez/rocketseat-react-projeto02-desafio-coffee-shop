import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    max-width: 1120px;
    margin: auto;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;

    h1{
        color: ${(props) => props.theme['title']};
        font-size: 2rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    p{
        color: ${(props) => props.theme['text']};
        font-size: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .motivos{
        display: flex;
        margin-top: 1rem;
        flex-wrap: wrap;

        .motivos--item{
            display: flex;
            align-items: center;
            gap: 10px;
            width: 50%;
        }
    }
`

export const CoffeeContainer = styled.div`
    display: flex;
    max-width: 1120px;
    margin: auto;
    flex-direction: column;

    h2{
        color: ${(props) => props.theme['title']};
        font-size: 2rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
`
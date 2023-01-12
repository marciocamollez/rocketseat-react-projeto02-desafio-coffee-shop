import styled from "styled-components";

export const FinishedContainer = styled.div`
    display: flex;
    max-width: 1120px;
    margin: auto;
    flex-direction: column;
`

export const BoxInfos = styled.div`
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
`
export const BoxInfosTxt = styled.div`
    border: 1px solid ${(props) => props.theme['purple']};
    border-radius: 10px;
    padding: 1rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
`
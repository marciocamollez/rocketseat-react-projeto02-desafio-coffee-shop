import styled from "styled-components";

export const FormContainer = styled.div`

    h1{
        color: ${(props) => props.theme['title']};
        font-size: 1.5rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    h2{
        color: ${(props) => props.theme['title']};
        font-size: 1.0rem;
    }

`
export const FormWrapper = styled.div`
    background: ${(props) => props.theme['card']};
    border-radius: 10px;
    padding: 2rem;
    display: flex;

    .title--address{
        display: flex;
        align-items: center;
    }
`
export const FormAddress = styled.form`
    display: flex;
    flex-direction: column;

    div{
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }

    input{
        padding: 0.5rem;
        margin-top: 0.5rem;
        margin-right: 1rem;
        border-radius: 10px;
        border: 0px;
        background: ${(props) => props.theme['input']};
    }
`

export const AddressWrapper = styled.div`
    display: flex;
    gap: 10px;

    input{
        flex: 1;
    }

    button{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 0.5rem;
        background: ${(props) => props.theme['button']};
        color: ${(props) => props.theme['text']};
        border: none;
        border-radius: 10px;
        font-size: 0.8rem;
        border: 1px solid ${(props) => props.theme['label']};

        &:hover{
            border: 1px solid ${(props) => props.theme['purple']};
            color: ${(props) => props.theme['purple']};
            cursor: pointer;
        }

    }
`
import styled from "styled-components";

export const ListItem = styled.div`
    display: flex;
    flex-wrap: wrap;

    .coffee--item{
        max-width: 18%;
        background: ${(props) => props.theme['card']};
        border-radius: 50px 0px 50px 0px;
        padding: 0.8rem;
        margin: 1rem 1rem 2rem 0rem;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .coffee--item_img{
            position: relative;
            top: -3rem;
            display: flex;
            justify-content: center;
        }

        .coffee--item_tag{
            display: flex;
            justify-content: center;
            margin-bottom: 0.5rem;
            flex-wrap: wrap;
            top: -2rem;
            position: relative;

            span{
                background: ${(props) => props.theme['yellow-light']};
                color: ${(props) => props.theme['yellow-dark']};
                padding: 0rem 0.5rem;
                border-radius: 10px;
                margin-right: 0.5rem;
                margin-bottom: 0.5rem;
                display: inline-block;
                font-size: 0.7rem;
                text-transform: uppercase;
            }
            
        }

        .coffee--item_name{
            position: relative;
            top: -1rem;

            h3{
                font-size: 1.5rem;
                color: ${(props) => props.theme['title']};
                text-align: center;
                line-height: 1;
            }
        }

        .coffee--item_desc{
            p{
                font-size: 0.9rem;
                text-align: center;
            }
        }

        .coffee--item_price{
            font-size: 1rem;

            p{
                font-size: 1.5rem;
                font-weight: 700;
                display: inline-block;
            }
        }
    }
`
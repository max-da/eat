import styled from "styled-components";

export const NotFoundWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;

@media screen and (min-width: 1200px) {
    margin: 0;
}
`;

export const H1 = styled.h1`
    color: #68b9b5;
    font-size: 2rem;
    text-transform: uppercase;
    text-shadow: 0 0 2px grey;
    margin-top: 15%;
    padding-bottom: 30px;

    @media screen and (min-width: 768px) {
        margin-top: 10%;
    }
`

export const TextContainer = styled.div`
    width: 65%;
    text-align: center;
    padding: 20px 0;
`

export const PSubHeading = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
`

export const P = styled.p`
    font-size: 1.2rem;
    margin: 5px;
`

export const Button = styled.button`
    background-color: transparent;
    color: #52a39f;
    font-size: 1.2rem;
    border: none;
    margin: 40px 2.5px 0 2.5px;
    cursor: pointer;

    &:hover {
        color: black;
    }
`
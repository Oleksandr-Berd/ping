import styled from "styled-components";

export const LogoCustom = styled.div`
margin-bottom: 32px;

@media (min-width: 1280px){
    margin-bottom: 40px;
}

& > h3{
    text-transform: uppercase;

    font-size: 20px;

    @media (min-width: 1280px){
        font-size: 32px;
    }
}
`
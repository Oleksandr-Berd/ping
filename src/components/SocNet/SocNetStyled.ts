import styled from "styled-components";

export const SocNetList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

margin-bottom: 27px;

& > li:not(:last-child){
    margin-right: 12px;
}
`
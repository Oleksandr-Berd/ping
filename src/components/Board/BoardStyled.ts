import styled from "styled-components";

export const BoardCustom = styled.div`
& > img{
    width: 358px;
    height: 192px;

    @media (min-width: 1280px){
        width: 640px;
        height: 383px;

        margin-bottom: 72px;
    }
}
`
import styled from "styled-components";

export const SharedLayoutCustom = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "LibreFranklin";

  @media (min-width: 1280px){
    height: auto;

    margin-top: 80px;
  }
`;
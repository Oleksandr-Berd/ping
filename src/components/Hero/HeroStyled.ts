import styled from "styled-components";

export const HeroCon = styled.div`
margin-bottom: 72px;
`

export const ContentCon = styled.div`
  margin-bottom: 32px;
`;

export const HeroTitle = styled.h3`
  margin-bottom: 15px;

  font-size: 22px;
  line-height: 1.45;

  color: #969696;

  & > span {
    color: #000;
  }
`;

export const Subscribe = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 1.67;

  color: #15202a;
`;

export const InputCon = styled.div`
  margin-bottom: 20px;

  & > input {
    width: 100%;

    padding-left: 32px;
    padding-top: 10px;
    padding-bottom: 10px;

    font-family: "LibreFranklin";
    font-size: 12px;
    font-weight: 300;
    line-height: 1.67;

    color: #000;

    border-radius: 28px;
    border: 1px solid #c2d3ff;

    &::placeholder {
      color: #b8c7ed;
    }
  }

  & > p {
    font-family: "LibreFranklin";
    font-size: 10px;
    font-style: italic;
    line-height: 2;
    letter-spacing: 0.13px;

    color: #ff5466;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;

  padding-top: 12px;
  padding-bottom: 12px;

  font-family: "LibreFranklin";
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;

  background-color: #4c7bf3;
  color: #fff;

  border-radius: 28px;
`;

import styled from "styled-components";

export const HeroCon = styled.div`
  margin-bottom: 72px;
`;

export const ContentCon = styled.div`
  margin-bottom: 32px;

  @media (min-width: 1280px) {
    margin-bottom: 94px;
  }
`;

export const HeroTitle = styled.h3`
  margin-bottom: 16px;

  font-size: 22px;
  line-height: 1.45;

  color: #969696;

  @media (min-width: 1280px) {
    font-size: 48px;
    line-height: 1.25;
  }

  & > span {
    color: #000;
  }
`;

export const Subscribe = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 1.67;

  color: #15202a;

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const FormCon = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const InputCon = styled.div`
  margin-bottom: 20px;

  @media (min-width: 1280px) {
    min-width: 421px;

    margin: 0;
    margin-right: 16px;
  }

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

    @media (min-width: 1280px) {
      padding-left: 30px;
      padding-top: 18px;
      padding-bottom: 18px;

      font-size: 16px;
      line-height: 1.25;
    }

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

    @media (min-width: 1280px){
        font-size: 12px;
        line-height: 1.67;
    }
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
  transition: opacity 1s linear;

  @media (min-width: 1280px) {
    min-width: 200px;

    padding-top: 18px;
    padding-bottom: 18px;

    font-size: 16px;
    line-height: 1.25;

    &:active,
    &:hover,
    &:focus {
      opacity: 0.7;
      cursor: pointer;
      transition: opacity 1s linear;
    }
  }
`;

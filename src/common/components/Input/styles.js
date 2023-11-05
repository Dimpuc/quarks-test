import styled from "styled-components";

export const Wrapper = styled.div``;

export const Label = styled.label`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 16.41px;
  font-family: "Roboto", sans-serif;
  color: #fff;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin: 6px 0px 0px 0px;
`;

export const ImgWrapper = styled.div`
  img {
    position: absolute;
    right: 16px;
    top: 10px;
  }
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  display: flex;
  right: 16px;
  padding: 0;
  background: inherit;
  cursor: pointer;
  border: none;
  margin: 0;
  top: 10px;
`;

export const InputStyle = styled.input`
  width: 100%;
  border: 1px solid #aab2bd80;
  background-color: #c7c8d0;
  color: #242530;
  box-sizing: border-box;
  box-shadow: 1px 1px 6px 0px #24253080 inset;
  border-radius: 10px;
  outline: none;

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 16.41px;

  padding: calc(1rem + 3px) 16px calc(1rem + 4px) 16px;

  &::placeholder {
    color: #8a8b95;
  }

  &:valid {
    ${({ correct }) =>
      correct && {
        border: "1px solid #599F39",
        background: "#CAD0C7",
      }};
  }

  &:focus {
    box-shadow: 0px 0px 8px 0px #ffbb2f66;
    border: 1px solid #ffa438;
    background: linear-gradient(0deg, #f3f5f7, #f3f5f7),
      linear-gradient(180deg, #ffb45c 0%, #ffa438 100%);
  }

  &:focus ~ ${ImgWrapper} {
    display: none;
  }

  ${({ error }) =>
    error && {
      border: " 1px solid #FF5E5E",
      background: "#D0C7C7",
    }};
`;

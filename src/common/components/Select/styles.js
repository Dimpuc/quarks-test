import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid #aab2bd80;
  margin-top: 0.6rem;
  background-color: #c7c8d0;
  box-sizing: border-box;
  box-shadow: 1px 1px 6px 0px #24253080 inset;
  border-radius: 10px;
  outline: none;

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 16.41px;
  font-family: "Roboto", sans-serif;

  background-image: url("arrow_icon.svg") !important;
  background-repeat: no-repeat !important;
  background-position: 95% !important;
  background-size: 2.4rem 2.4rem !important;

  padding: calc(1rem + 3px) 16px calc(1rem + 4px) 16px;

  color: ${({ dirty }) => (dirty ? "#242530" : "#8a8b95")};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    box-shadow: 0px 0px 8px 0px #ffbb2f66;
    border: 1px solid #ffb45c;
    background: #f3f5f6;
  }

  &:valid {
    ${({ correct }) =>
      correct && {
        border: "1px solid #599F39",
        background: "#CAD0C7",
      }};
  }

  ${({ error }) =>
    error && {
      border: " 1px solid #FF5E5E",
      background: "#D0C7C7",
    }};
`;

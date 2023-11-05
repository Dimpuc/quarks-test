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
  /* 
  background-image: url("src/assets/icons/arrow_icon.svg");
  background-repeat: no-repeat;
  background-position: 85%;
  background-size: 2.4rem 2.4rem; */

  padding: 1rem 0.8rem 1rem 1.6rem;
  color: ${({ value }) => (value ? "#242530" : "#8a8b95")};

  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */

  &:focus {
    box-shadow: 0px 0px 8px 0px #ffbb2f66;
    border: 1px solid #ffa438;
    background: linear-gradient(0deg, #f3f5f7, #f3f5f7),
      linear-gradient(180deg, #ffb45c 0%, #ffa438 100%);
  }

  ${({ correct }) =>
    correct && {
      border: "1px solid #599f39",
      background:
        "linear-gradient( 0deg,rgba(202, 208, 199, 1) 0%,rgba(89, 159, 57, 0.248358718487395) 0%)",
    }};

  ${({ error }) =>
    error && {
      background:
        "linear-gradient(0deg,rgba(255, 94, 94, 1) 0%,rgba(208, 199, 199, 0.9626444327731093) 0%)",
      border: "1px solid #FF5E5E",
    }};
`;

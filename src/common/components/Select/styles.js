import styled from "styled-components";

export const Wrapper = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  font-family: "Roboto", sans-serif;
  color: #fff;
`;

export const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid #aab2bd80;
  margin-top: 6px;
  background-color: #c7c8d0;
  color: #242530;
  box-sizing: border-box;
  box-shadow: 1px 1px 6px 0px #24253080 inset;
  border-radius: 10px;
  outline: none;
  /* &::after {
    content: "▼";
    padding: 0 8px;
    font-size: 12px;
    position: absolute;
    right: 8px;
    top: 4px;
    z-index: 1;
    text-align: center;
    width: 10%;
    height: 100%;
    pointer-events: none;
    box-sizing: border-box;
  } */

  /* background-image: url("../../../assets/icons/bgImage.svg"); */
  background-repeat: no-repeat;
  background-position: 85%;
  background-size: 1.5rem 1.5rem;
  color: #a0a8b4;

  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;

  padding: calc(1rem + 3px) 16px calc(1rem + 4px) 16px;

  &::placeholder {
    color: #8a8b95;
  }

  &:focus {
    box-shadow: 0px 0px 8px 0px #ffbb2f66;
    border: 1px solid #ffa438 !important;
    background: linear-gradient(0deg, #f3f5f7, #f3f5f7),
      linear-gradient(180deg, #ffb45c 0%, #ffa438 100%);
  }
`;

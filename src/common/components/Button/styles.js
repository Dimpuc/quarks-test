import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffb45c 0%, #ffa438 100%);
  border: none;
  border-radius: 10px;
  padding-top: 0.9rem;
  gap: 14px;
  cursor: pointer;
  padding-bottom: calc(0.9rem + 1px);
  max-width: 400px;

  width: 100%;
  box-shadow: 0px 0px 10px 0px #ffa23540;
  &:active {
    background: #e3983f;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 23.12px;
    margin: 0;
    color: #242530;
  }
`;
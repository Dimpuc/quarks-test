import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: #3b3c4b;
  margin-top: auto;
  padding: 24px;
  box-sizing: border-box;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    gap: 20px;
    align-items: center;
    list-style-type: none;
    li {
      color: #ffffff;
      font-weight: 400;
      font-size: 14px;
      font-family: "Roboto";
    }
  }
`;

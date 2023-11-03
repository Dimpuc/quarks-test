import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
  gap: 12px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  text-align: center;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16.41px;
    font-family: "Roboto", sans-serif;
    color: #aab2bd;
  }
`;

export const Title = styled.h3`
  font-family: "Jost", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 26.01px;
  margin: 0;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 18px;
  width: 100%;
`;

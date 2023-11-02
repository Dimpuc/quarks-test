import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: 700;
  text-align: center;
  font-size: 16px;
  line-height: 18.75px;
  font-family: "Roboto", sans-serif;
  margin: 0;
  color: #ffffff;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 0;
  list-style-type: none;

  li {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const SmallText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: center;
  color: #aab2bd;
  margin: 59px 0px 0px 0px;
  font-family: "Roboto", sans-serif;
`;

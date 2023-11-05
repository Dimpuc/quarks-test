import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 1.6rem;
  margin-top: 335px;
  max-width: 400px;
  width: 100%;
`;

export const Title = styled.h3`
  font-weight: 700;
  text-align: center;
  font-size: 1.6rem;
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
  gap: 1.4rem;
  margin: 1.6rem 0px 0px 0px;
  padding: 0;
  list-style-type: none;

  li {
    width: 100%;
    display: flex;
    justify-content: center;

    label {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;

export const SmallText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 16.41px;
  text-align: center;
  color: #aab2bd;
  margin: 5.9rem 0px 0px 0px;
  font-family: "Roboto", sans-serif;
`;

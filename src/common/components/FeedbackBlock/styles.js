import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem calc(2rem + 1px) 2rem 2rem;
  border-radius: 10px;
  max-width: 400px;
  box-sizing: border-box;
  background-color: #2f303e;
  position: relative;
  font-family: "Roboto", sans-serif;

  color: #aab2bd;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.9rem;
  text-overflow: ellipsis;
`;

export const StyledIcon = styled.img`
  position: absolute;
  right: 0;
`;

export const UsersInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.2rem;
`;

export const UsersDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 14.06px;
  span {
    font-weight: 400;
    color: #656d78;
  }
`;

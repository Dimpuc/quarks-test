import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem calc(2rem + 1px) 2rem 2rem;
  border-radius: 10px;
  max-width: 287px;
  box-sizing: border-box;
  background-color: #2f303e;
  position: relative;

  color: #aab2bd;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  text-overflow: ellipsis;
`;

export const StyledIcon = styled.img`
  position: absolute;
  right: 0;
`;

export const UsersInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 12px;
`;

export const UsersDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: #ffffff;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.06px;
  span {
    color: #656d78;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.06px;
  }
`;

export const MainText = styled.p`
  color: #aab2bd;
  font-size: 14px;
  padding: 0;
  overflow: hidden;
  margin: 0;
  font-weight: 400;
  line-height: 19px;
  text-overflow: ellipsis;
`;

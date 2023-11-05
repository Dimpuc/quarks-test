import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 42px;
`;

export const BackgroundImage = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(36, 37, 48, 0) 30.21%,
      #242530 95.83%
    ),
    url("src/assets/icons/bgImageFull.svg");
  height: 50vh;
  width: 100%;
  position: absolute;
  background-size: cover;
  background-position: center;
`;

export const IconButton = styled.button`
  position: absolute;
  z-index: 100;
  left: 1rem;
  top: 1rem;
  font-size: 2.5rem;
  cursor: pointer;
  color: red;
  border: none;
  background-color: inherit;
`;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
`;

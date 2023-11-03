import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconButton = styled.button`
  position: absolute;
  z-index: 100;
  left: 1rem;
  top: 1rem;
  font-size: 2.5rem;
  cursor: pointer;
  color: grey;
  border: none;
  background-color: inherit;
`;

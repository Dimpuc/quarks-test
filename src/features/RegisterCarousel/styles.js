import styled from "styled-components";

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CarouselContent = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
  transition: transform 0.4s ease-in-out;
`;

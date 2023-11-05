import styled from "styled-components";

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(36, 37, 48, 0) 30.21%,
    #242530 95.83%
  );
`;

export const CarouselContent = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
  transition: transform 0.4s ease-in-out;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
`;

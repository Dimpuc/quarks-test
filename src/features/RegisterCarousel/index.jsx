import PropTypes from "prop-types";
import { CarouselContent, CarouselSlide, CarouselWrapper } from "./styles";

const RegisterCarousel = ({ components, currentSlide }) => {
  return (
    <CarouselWrapper>
      <CarouselContent>
        {components.map((component, index) => (
          <CarouselSlide
            key={index}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {component}
          </CarouselSlide>
        ))}
      </CarouselContent>
    </CarouselWrapper>
  );
};

RegisterCarousel.propTypes = {
  currentSlide: PropTypes.number,
  components: PropTypes.array,
};

export { RegisterCarousel };

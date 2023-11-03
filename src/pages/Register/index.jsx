import { useState } from "react";
import { FirstStep } from "../../features/RegisterCarousel/FirstStep";
import { SecondStep } from "../../features/RegisterCarousel/SecondStep";
import { Container } from "./styles";
import { ThirdStep } from "../../features/RegisterCarousel/ThirdStep";
import { RegisterCarousel } from "../../features/RegisterCarousel";

export const Register = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [user, setUser] = useState({
    gender: "",
    datingPurpose: "",
  });

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % customComponents.length);
  };

  const handleFirstStep = (gender) => {
    if (gender) {
      setUser({
        ...user,
        gender,
      });

      nextSlide();
    }
  };

  const handleSecondStep = (datingPurpose) => {
    if (datingPurpose) {
      setUser({
        ...user,
        datingPurpose,
      });

      nextSlide();
    }
  };

  const registerHandler = (data) => {
    if (data) {
      setUser({
        ...user,
        ...data,
      });
    }
  };
  console.log(user);

  const customComponents = [
    <FirstStep key={1} onClick={handleFirstStep} />,
    <SecondStep key={2} onClick={handleSecondStep} />,
    <ThirdStep key={3} onSubmit={registerHandler} />,
  ];

  return (
    <Container>
      <RegisterCarousel
        currentSlide={currentSlide}
        components={customComponents}
      />
    </Container>
  );
};

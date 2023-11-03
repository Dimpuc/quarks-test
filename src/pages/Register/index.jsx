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

  const handleRegister = (data) => {
    const userUpdates = {
      0: { gender: data },
      1: { datingPurpose: data },
      2: { ...data },
    };

    setUser((prevUser) => ({
      ...prevUser,
      ...userUpdates[currentSlide],
    }));

    if (currentSlide < 2) {
      nextSlide();
    } else {
      // call to register api
      console.log(user);
    }
  };

  const customComponents = [
    <FirstStep key={1} onClick={handleRegister} />,
    <SecondStep key={2} onClick={handleRegister} />,
    <ThirdStep key={3} onSubmit={handleRegister} />,
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

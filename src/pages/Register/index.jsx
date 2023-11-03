import { useState } from "react";
import { FirstStep } from "../../features/RegisterCarousel/FirstStep";
import { SecondStep } from "../../features/RegisterCarousel/SecondStep";
import { BackgroundImage, Container, IconButton } from "./styles";
import { ThirdStep } from "../../features/RegisterCarousel/ThirdStep";
import { RegisterCarousel } from "../../features/RegisterCarousel";

export const Register = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [user, setUser] = useState({});

  const handleRegister = (data) => {
    const userUpdates = {
      0: { gender: data },
      1: { datingPurpose: data },
    };

    setUser((prevUser) => ({
      ...prevUser,
      ...userUpdates[currentSlide],
    }));

    if (currentSlide < 2) {
      setCurrentSlide((currentSlide + 1) % customComponents.length);
    } else {
      console.log({
        ...user,
        ...data,
      });
      // call to register api
    }
  };

  const handleBackSlide = () => {
    const userUpdates = {
      1: { gender: "" },
      2: { datingPurpose: "" },
    };

    setUser((prevUser) => ({
      ...prevUser,
      ...userUpdates[currentSlide],
    }));

    setCurrentSlide((currentSlide - 1) % customComponents.length);
  };

  const customComponents = [
    <FirstStep key={1} onClick={handleRegister} />,
    <SecondStep key={2} onClick={handleRegister} />,
    <ThirdStep key={3} handleRegister={handleRegister} />,
  ];

  return (
    <Container>
      <BackgroundImage />

      {currentSlide != 0 && (
        <IconButton onClick={handleBackSlide}>{"<"}</IconButton>
      )}
      <RegisterCarousel
        currentSlide={currentSlide}
        components={customComponents}
      />
    </Container>
  );
};

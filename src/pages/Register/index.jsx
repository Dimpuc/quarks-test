import { useState } from "react";
import { FirstStep } from "../../features/RegisterCarousel/FirstStep";
import { SecondStep } from "../../features/RegisterCarousel/SecondStep";
import { BackgroundImage, Container, IconButton } from "./styles";
import { ThirdStep } from "../../features/RegisterCarousel/ThirdStep";
import { RegisterCarousel } from "../../features/RegisterCarousel";

export const Register = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [user, setUser] = useState({});

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % customComponents.length);
  };

  // const handleSlide = (data, action) => {
  //   // Define data updates for each slide
  //   const userUpdates = {
  //     forward: {
  //       0: { gender: data },
  //       1: { datingPurpose: data },
  //       2: { ...data },
  //     },
  //     backward: {
  //       1: { gender: "" },
  //       2: { datingPurpose: "" },
  //     },
  //   };

  //   // Determine the data updates based on the action
  //   const updates = userUpdates[action];

  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     ...updates[currentSlide],
  //   }));

  //   if (action === "forward" && currentSlide < 2) {
  //     setCurrentSlide((currentSlide + 1) % customComponents.length);
  //   } else if (action === "backward" && currentSlide > 0) {
  //     setCurrentSlide((currentSlide - 1) % customComponents.length);
  //   } else {
  //     // Make an API call for registration
  //   }
  // };

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
    <ThirdStep key={3} onSubmit={handleRegister} />,
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

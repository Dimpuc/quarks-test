import { useState } from "react";
import { useForm } from "react-hook-form";

import { FirstStep } from "@features/RegisterCarousel/FirstStep";
import { SecondStep } from "@features/RegisterCarousel/SecondStep";
import { ThirdStep } from "@features/RegisterCarousel/ThirdStep";
import { RegisterCarousel } from "@features/RegisterCarousel";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "./schema";

import { BackgroundImage, Container, IconButton, StyledForm } from "./styles";

export const Register = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaRegister),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      day: "DD",
      month: "MM",
      year: "YYYY",
    },
  });

  const onSubmit = () => {
    // try => {call to api, reset form} catch => {show error}
    const allFields = watch();
    console.log(allFields);
    reset();
  };

  const handelNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % customComponents.length);
  };

  const handleBackSlide = () => {
    setCurrentSlide((currentSlide - 1) % customComponents.length);
  };

  const customComponents = [
    <FirstStep
      key={1}
      register={register}
      currentSlide={currentSlide}
      errors={errors}
      onNextPage={handelNextSlide}
    />,
    <SecondStep
      key={2}
      register={register}
      errors={errors}
      onNextPage={handelNextSlide}
    />,
    <ThirdStep key={3} register={register} control={control} errors={errors} />,
  ];

  return (
    <Container>
      <BackgroundImage />
      {currentSlide != 0 && (
        <IconButton onClick={handleBackSlide}>{"<"}</IconButton>
      )}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <RegisterCarousel
          currentSlide={currentSlide}
          components={customComponents}
        />
      </StyledForm>
    </Container>
  );
};

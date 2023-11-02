import { useState } from "react";
import { FirstStep } from "../../features/RegisterSteps/FirstStep";
import { SecondStep } from "../../features/RegisterSteps/SecondStep";
import { Container } from "./styles";
import { ThirdStep } from "../../features/RegisterSteps/ThirdStep";

export const Register = () => {
  const [user, setUser] = useState({
    gender: "",
    datingPurpose: "",
  });

  const handleFirstStep = (gender) => {
    if (gender) {
      setUser({
        ...user,
        gender,
      });
    }
  };

  const handleSecondStep = (datingPurpose) => {
    if (datingPurpose) {
      setUser({
        ...user,
        datingPurpose,
      });
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

  return (
    <Container>
      <ThirdStep onSubmit={registerHandler} />
      {/* {!user.gender && <FirstStep onClick={handleFirstStep} />}
      {user.gender && !user.datingPurpose && (
        <SecondStep onClick={handleSecondStep} />
      )}
      {user.gender && user.datingPurpose && (
        <ThirdStep onSubmit={registerHandler} />
      )} */}
    </Container>
  );
};

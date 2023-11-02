import { useState } from "react";
import { FirstStep } from "../../features/RegisterSteps/FirstStep";
import { SecondStep } from "../../features/RegisterSteps/SecondStep";
import { Container } from "./styles";

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

  console.log(user);

  return (
    <Container>
      {!user.gender && <FirstStep onClick={handleFirstStep} />}
      {user.gender && !user.datingPurpose && (
        <SecondStep onClick={handleSecondStep} />
      )}
      {user.gender && user.datingPurpose && <div>Three step</div>}
    </Container>
  );
};

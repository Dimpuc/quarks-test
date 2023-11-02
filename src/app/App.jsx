import { useState } from "react";
import { Input } from "../common/components/Input";
import { QuizButton } from "../common/components/QuizButton";
import Icon from "../assets/icons/f_icon.svg";
import Validate from "../assets/icons/validated_icon.svg";

function App() {
  const [name, setName] = useState();

  const handleOnChange = (event) => setName(event.target.value);

  return (
    <>
      <Input
        placeholder="Введите имя"
        onChange={handleOnChange}
        label="Email"
        id="name"
        // endIcon={<img src={Validate} />}
        errors={false}
        value={name}
      />
      <QuizButton text="I'm man" icon={<img src={Icon} />} />
    </>
  );
}

export default App;

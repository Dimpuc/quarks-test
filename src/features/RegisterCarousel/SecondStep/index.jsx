/* eslint-disable react/prop-types */
import { Wrapper, Title, List, SmallText } from "./styles";
import { QuizButton } from "../../../common/components/QuizButton";
import { datingPurposeMock } from "./mocks";

const SecondStep = ({ onClick }) => {
  return (
    <Wrapper>
      <Title>Цель знакомства:</Title>
      <List>
        {datingPurposeMock.map(({ id, datingPurpose }) => (
          <li key={id}>
            <QuizButton
              onClick={() => onClick(datingPurpose)}
              text={datingPurpose}
            />
          </li>
        ))}
      </List>
      <SmallText>
        Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов
      </SmallText>
    </Wrapper>
  );
};

export { SecondStep };

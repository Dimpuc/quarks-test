/* eslint-disable react/prop-types */
import { Button } from "../../../common/components/Button";
import { datingPurposeMock } from "./mocks";
import { Wrapper, Title, List, SmallText } from "./styles";

export const SecondStep = ({ register, onNextPage }) => {
  return (
    <Wrapper>
      <Title>Цель знакомства:</Title>
      <List>
        {datingPurposeMock.map(({ id, value }) => (
          <li key={id}>
            <input
              {...register("datingPurpose")}
              id={value}
              type="radio"
              value={value}
              style={{ display: "none" }}
            />
            <Button onClick={onNextPage} tag="label" id={value}>
              {value}
            </Button>
          </li>
        ))}
      </List>

      <SmallText>
        Чтобы идеально подобрать для вас пару, ответьте на несколько вопросов
      </SmallText>
    </Wrapper>
  );
};

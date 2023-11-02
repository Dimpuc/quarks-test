/* eslint-disable react/prop-types */
import { QuizButton } from "../../../common/components/QuizButton";
import { FeedbackBlock } from "../../../common/components/FeedbackBlock";
import {
  ButtonWrapper,
  FeedbackList,
  ListItem,
  Title,
  Wrapper,
} from "./styles";
import MIcon from "../../../assets/icons/m_icon.svg";
import FIcon from "../../../assets/icons/f_icon.svg";
import { feedbackListMocks } from "./mocks";

export const FirstStep = ({ onClick }) => {
  return (
    <Wrapper>
      <Title>Наибольшая база анкет для знакомств</Title>
      <ButtonWrapper>
        <QuizButton
          text="Я мужчина"
          icon={<img src={MIcon} />}
          onClick={() => onClick("men")}
        />
        <QuizButton
          text="Я женщина"
          icon={<img src={FIcon} />}
          onClick={() => onClick("woman")}
        />
      </ButtonWrapper>
      <FeedbackList>
        {feedbackListMocks.map(({ usersName, icon, text, data }, index) => (
          <ListItem key={index}>
            <FeedbackBlock
              icon={icon}
              usersName={usersName}
              data={data}
              text={text}
            />
          </ListItem>
        ))}
      </FeedbackList>
    </Wrapper>
  );
};

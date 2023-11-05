/* eslint-disable react/prop-types */
import { Button } from "../../../common/components/Button";
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

const FirstStep = ({ onClick }) => {
  return (
    <Wrapper>
      <Title>Наибольшая база анкет для знакомств</Title>
      <ButtonWrapper>
        <Button
          text="Я мужчина"
          icon={<img src={MIcon} width={12} height={22} />}
          onClick={() => onClick("men")}
        />
        <Button
          text="Я женщина"
          icon={<img src={FIcon} width={12} height={22} />}
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

export { FirstStep };

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
          // size for icon
          icon={<img src={MIcon} />}
          onClick={() => onClick("men")}
        />
        <Button
          text="Я женщина"
          // size for icon
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

export { FirstStep };

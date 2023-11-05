/* eslint-disable react/prop-types */
import { Button } from "../../../common/components/Button";
import { FeedbackBlock } from "../../../common/components/FeedbackBlock";

import { feedbackListMocks, genderMocks } from "./mocks";

import {
  ButtonWrapper,
  FeedbackList,
  ListItem,
  Title,
  Wrapper,
} from "./styles";

export const FirstStep = ({ onNextPage, register, currentSlide }) => {
  return (
    <Wrapper>
      <Title>Наибольшая база анкет для знакомств</Title>
      <ButtonWrapper>
        {genderMocks.map(({ id, value, icon }) => (
          <div style={{ width: "100%" }} key={id}>
            <input
              key={id}
              {...register("gender")}
              id={value}
              type="radio"
              value={value}
              style={{ display: "none" }}
            />
            <Button
              onClick={onNextPage}
              icon={<img src={icon} width={12} height={22} />}
              tag="label"
              id={value}
            >
              {value}
            </Button>
          </div>
        ))}
      </ButtonWrapper>
      {currentSlide === 0 && (
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
      )}
    </Wrapper>
  );
};

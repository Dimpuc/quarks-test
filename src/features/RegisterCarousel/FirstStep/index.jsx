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

import { feedbackListMocks, genderMocks } from "./mocks";

export const FirstStep = ({ onNextPage, register, slideId }) => {
  return (
    <Wrapper>
      <Title>Наибольшая база анкет для знакомств</Title>
      <ButtonWrapper>
        {genderMocks.map(({ id, value, icon }) => (
          <>
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
          </>
        ))}
      </ButtonWrapper>
      {slideId === 0 && (
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

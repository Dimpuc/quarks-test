import PropTypes from "prop-types";
import ReactReadMoreReadLess from "react-read-more-read-less";

import Group from "../../../assets/icons/Group.svg";
import { StyledIcon, UsersDetails, UsersInfo, Wrapper } from "./styles";
import "./styles.css";

export const FeedbackBlock = ({ icon, text, data, usersName }) => {
  return (
    <Wrapper>
      <StyledIcon src={Group} alt="group" width={67} height={45} />
      <UsersInfo>
        <img src={icon} width={62} height={32} />
        <UsersDetails>
          {usersName}
          <span>{data}</span>
        </UsersDetails>
      </UsersInfo>

      <ReactReadMoreReadLess
        charLimit={200}
        readMoreText="Читать полностю"
        readLessText="Скрыть"
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {text}
      </ReactReadMoreReadLess>
    </Wrapper>
  );
};

FeedbackBlock.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  data: PropTypes.string,
  usersName: PropTypes.string,
};

import ReactReadMoreReadLess from "react-read-more-read-less";
import PropTypes from "prop-types";

import { StyledIcon, UsersDetails, UsersInfo, Wrapper } from "./styles";
import "./styles.css";
import Group from "../../../assets/icons/Group.svg";

const FeedbackBlock = ({ icon, text, data, usersName }) => {
  return (
    <Wrapper>
      {/* size fro icon */}

      <StyledIcon src={Group} alt="group" />
      {/* rename this tag */}
      <UsersInfo>
        {/* size fro icon */}
        <img src={icon} />
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

export { FeedbackBlock };

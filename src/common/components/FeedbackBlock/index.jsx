import PropTypes from "prop-types";
import "./styles.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { StyledIcon, UsersDetails, UsersInfo, Wrapper } from "./styles";
import Group from "../../../assets/icons/Group.svg";

const FeedbackBlock = ({ icon, text, data, usersName }) => {
  return (
    <Wrapper>
      <StyledIcon src={Group} alt="group" />
      <UsersInfo>
        {icon}
        <UsersDetails>
          {usersName}
          <span>{data}</span>
        </UsersDetails>
      </UsersInfo>
      <ReactReadMoreReadLess
        charLimit={200}
        readMoreText={"Read more"}
        readLessText={"Read less"}
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
  icon: PropTypes.element,
  data: PropTypes.string,
  usersName: PropTypes.string,
};

export { FeedbackBlock };

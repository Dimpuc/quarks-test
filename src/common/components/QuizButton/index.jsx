import PropTypes from "prop-types";
import "./styles.css";

const QuizButton = ({ text, onClick, icon, type }) => {
  return (
    <button className="quiz_button" type={type} onClick={onClick}>
      {icon && icon}
      <p>{text}</p>
    </button>
  );
};

QuizButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  type: PropTypes.string,
};
export { QuizButton };

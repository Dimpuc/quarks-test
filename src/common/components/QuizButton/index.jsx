import PropTypes from "prop-types";
import "./styles.css";

const QuizButton = ({ text, onClick, icon }) => {
  return (
    <button className="quiz_button" onClick={onClick}>
      {icon && icon}
      <p>{text}</p>
    </button>
  );
};

QuizButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
};
export { QuizButton };

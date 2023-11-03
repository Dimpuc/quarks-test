import PropTypes from "prop-types";
import "./styles.js";
import { StyledButton } from "./styles.js";

const Button = ({ text, onClick, icon, type }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {icon && icon}
      <p>{text}</p>
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  type: PropTypes.string,
};
export { Button };

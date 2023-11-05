import PropTypes from "prop-types";
import { StyledButton } from "./styles.js";
import "./styles.js";

export const Button = ({
  id,
  tag = "button",
  onClick,
  icon,
  type,
  children,
}) => {
  return (
    <StyledButton
      htmlFor={tag === "label" ? id : undefined}
      type={tag === "button" ? type : undefined}
      tag={tag}
      onClick={onClick}
    >
      {icon && icon}
      <p>{children}</p>
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  tag: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  type: PropTypes.string,
};

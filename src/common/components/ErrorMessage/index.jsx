import PropTypes from "prop-types";
import { StyleErrorMessage } from "./styles";

const ErrorMessage = ({ message }) => {
  return <StyleErrorMessage>{message}</StyleErrorMessage>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export { ErrorMessage };

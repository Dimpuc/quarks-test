import PropTypes from "prop-types";
import { StyleErrorMessage } from "./styles";

export const ErrorMessage = ({ message }) => {
  return <StyleErrorMessage>{message}</StyleErrorMessage>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

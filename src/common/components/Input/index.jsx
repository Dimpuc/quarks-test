/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import {
  Label,
  Wrapper,
  InputStyle,
  ErrorMessage,
  InputWrapper,
  ImgWrapper,
} from "./styles";

import Validate from "../../../assets/icons/validated_icon.svg";
import NonValidate from "../../../assets/icons/non_validation2_icon.svg";

export const Input = ({
  id,
  label,
  placeholder,
  value,
  endIcon,
  type,
  onChange,
  errors,
  required = false,
  readOnly,
  disabled,
}) => {
  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper>
        <InputStyle
          id={id}
          placeholder={placeholder}
          value={value}
          required={required}
          disabled={disabled}
          endIcon={!endIcon}
          readOnly={readOnly}
          hasError={errors[id]}
          correct={!errors[id] && value?.length}
          onChange={onChange}
          type={type}
        />
        {endIcon && <ImgWrapper>{endIcon}</ImgWrapper>}
        {!errors[id] && value?.length && !endIcon ? (
          <ImgWrapper>
            <img src={Validate} />
          </ImgWrapper>
        ) : null}
        {errors[id] && !endIcon && (
          <ImgWrapper>
            <img src={NonValidate} />
          </ImgWrapper>
        )}
      </InputWrapper>
      {errors?.[id]?.message && <ErrorMessage>error</ErrorMessage>}
    </Wrapper>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.object,
  required: PropTypes.bool,
  endIcon: PropTypes.element,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import {
  Label,
  Wrapper,
  InputStyle,
  InputWrapper,
  ButtonWrapper,
} from "./styles";
import { ErrorMessage } from "../ErrorMessage";
import HideIcon from "../../../assets/icons/hide_icon.svg";

export const InputPassword = ({
  id,
  label,
  placeholder,
  value,
  type,
  onChange,
  register,
  errors,
  inputRef,
  name,
  required = false,
  readOnly,
  showPassword,
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
          name={name}
          ref={inputRef}
          readOnly={readOnly}
          error={errors}
          correct={!errors && value}
          onChange={onChange}
          type={type}
          autoComplete="off"
          {...register(name)}
        />
        <ButtonWrapper>
          <button type="button" onClick={showPassword}>
            <img src={HideIcon} width={24} height={24} />
          </button>
        </ButtonWrapper>
      </InputWrapper>
      {errors?.message && <ErrorMessage message={errors?.message} />}
    </Wrapper>
  );
};

InputPassword.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  showPassword: PropTypes.func,
  error: PropTypes.object,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Label, Wrapper, InputStyle, InputWrapper, ImgWrapper } from "./styles";

import Validate from "../../../assets/icons/validated_icon.svg";
import NonValidate from "../../../assets/icons/non_validation2_icon.svg";
import { ErrorMessage } from "../ErrorMessage";

export const Input = ({
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
        {!errors && value ? (
          <ImgWrapper>
            <img src={Validate} width={24} height={24} />
          </ImgWrapper>
        ) : null}
        {errors && (
          <ImgWrapper>
            <img src={NonValidate} width={24} height={24} />
          </ImgWrapper>
        )}
      </InputWrapper>
      {errors?.message && <ErrorMessage message={errors?.message} />}
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
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

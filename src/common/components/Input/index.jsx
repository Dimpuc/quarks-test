/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import {
  Label,
  Wrapper,
  InputStyle,
  InputWrapper,
  ImgWrapper,
  ShowPasswordBtn,
} from "./styles";

import Validate from "../../../assets/icons/validated_icon.svg";
import NonValidate from "../../../assets/icons/non_validation2_icon.svg";
import { ErrorMessage } from "../ErrorMessage";
import { useFormState } from "react-hook-form";
import HideIcon from "../../../assets/icons/hide_icon.svg";
import { useState } from "react";

export const Input = ({
  label,
  placeholder,
  value,
  type = "text",
  onChange,
  control,
  register,
  errors,
  name,
  required = false,
  readOnly,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { dirtyFields } = useFormState({ control });

  const onShowPassword = () => setShowPassword(!showPassword);

  const renderIcons = () => {
    switch (type) {
      case "password": {
        return (
          <ShowPasswordBtn type="button" onClick={onShowPassword}>
            <img src={HideIcon} width={24} height={24} />
          </ShowPasswordBtn>
        );
      }
      default: {
        if (!errors && dirtyFields[name]) {
          return (
            <ImgWrapper>
              <img src={Validate} width={24} height={24} />
            </ImgWrapper>
          );
        } else if (errors) {
          return (
            <ImgWrapper>
              <img src={NonValidate} width={24} height={24} />
            </ImgWrapper>
          );
        }
      }
    }
  };

  return (
    <Wrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputWrapper>
        <InputStyle
          id={name}
          placeholder={placeholder}
          value={value}
          required={required}
          disabled={disabled}
          name={name}
          readOnly={readOnly}
          error={errors}
          correct={!errors}
          onChange={onChange}
          type={showPassword ? "text" : type}
          autoComplete="off"
          {...register(name)}
        />
        {renderIcons()}
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

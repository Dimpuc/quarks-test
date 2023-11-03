/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { StyledSelect } from "./styles";

export const Select = ({
  options,
  handelSelectDate,
  register,
  name,
  errors,
}) => {
  return (
    <StyledSelect
      onChange={handelSelectDate}
      error={errors[name]}
      {...register(name)}
    >
      {options.map((i, index) => (
        <option
          disabled={i.disabled}
          defaultValue={i.defaultValue}
          value={i.value}
          key={index}
        >
          {i.option}
        </option>
      ))}
    </StyledSelect>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  format: PropTypes.string,
  handelSelectDate: PropTypes.func,
};

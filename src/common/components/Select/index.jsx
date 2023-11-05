/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { StyledSelect } from "./styles";

export const Select = ({ options, register, name, error, value }) => {
  return (
    <StyledSelect
      id={name}
      name={name}
      error={error}
      value={value}
      correct={!error && value}
      {...register(name)}
    >
      {options.map((i, index) => (
        <option
          key={index}
          disabled={i.disabled}
          value={i.value}
          selected={i.selected}
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

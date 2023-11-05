/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useFormState } from "react-hook-form";

import { StyledSelect } from "./styles";

export const Select = ({ options, register, name, error, control }) => {
  const { dirtyFields } = useFormState({ control });

  return (
    <StyledSelect
      id={name}
      name={name}
      error={error}
      dirty={dirtyFields[name]}
      correct={!error && dirtyFields[name]}
      {...register(name)}
    >
      {options.map((i, index) => (
        <option
          key={index}
          disabled={i.disabled}
          value={i.value}
          selected={i.selected}
          defaultValue={i.defaultValue}
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

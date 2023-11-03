import PropTypes from "prop-types";
import { Label, StyledSelect, Wrapper } from "./styles";

export const Select = ({ options, handelSelectDate, format }) => {
  return (
    <StyledSelect data-format={format} onChange={handelSelectDate}>
      {options.map((i, index) => (
        <option value={i.value} key={index}>
          {i.option}
        </option>
      ))}
    </StyledSelect>
  );
};

export const SelectDate = () => {
  return (
    <Wrapper>
      <Label>Дата рождения:</Label>
      <div>
        <Select
          options={[
            { value: 1, option: 1 },
            { value: 1, option: 1 },
            { value: 1, option: 1 },
            { value: 1, option: 1 },
          ]}
        />
        <Select
          options={[
            { value: 1, option: 1 },
            { value: 1, option: 1 },
            { value: 1, option: 1 },
            { value: 1, option: 1 },
          ]}
        />
        <Select
          options={[
            { value: 1, option: 1 },
            { value: 1, option: 1 },
            { value: 1, option: 1 },
            { value: 1, option: 1 },
          ]}
        />
      </div>
    </Wrapper>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  format: PropTypes.string,
  handelSelectDate: PropTypes.func,
};

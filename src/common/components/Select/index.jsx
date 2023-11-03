import PropTypes from "prop-types";
import { Label, StyledSelect, Wrapper } from "./styles";
// import { useState } from "react";

export const Select = ({ options, handelSelectDate, format }) => {
  return (
    <StyledSelect data-format={format} onChange={handelSelectDate}>
      {options.map((i, index) => (
        <option key={index}>{i}</option>
      ))}
    </StyledSelect>
  );
};

export const SelectDate = () => {
  //   const [date, setDate] = useState({});

  //   const handelSelectDate = (event) => {
  //     const key = event.target.dataset.format;
  //     const value = event.target.value;

  //     setDate({
  //       ...date,
  //       [key]: value,
  //     });
  //   };

  //   console.log(date, "date");

  return (
    <Wrapper>
      <Label>Дата рождения:</Label>
      <div>
        <Select
          //   format="day"
          //   handelSelectDate={handelSelectDate}
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        />
        <Select
          //   format="month"
          //   handelSelectDate={handelSelectDate}
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        />
        <Select
          //   format="year"
          //   handelSelectDate={handelSelectDate}
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        />
      </div>
    </Wrapper>
  );
};

Select.propTypes = {
  options: PropTypes.object,
  format: PropTypes.string,
  handelSelectDate: PropTypes.func,
};

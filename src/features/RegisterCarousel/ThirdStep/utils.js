//hardcode
export const formatSelectErrors = (errors) => {
  if (errors["day"]) {
    return errors["day"]?.message;
  } else if (errors["month"]) {
    return errors["month"]?.message;
  }

  return errors["year"]?.message;
};

export const dayOptions = [
  {
    value: "",
    option: "DD",
    disabled: true,
    selected: true,
  },
  { value: 1, option: "01" },
  { value: 2, option: "02" },
  { value: 3, option: "03" },
  { value: 4, option: "04" },
  { value: 5, option: "05" },
  { value: 6, option: "06" },
  { value: 7, option: "07" },
  { value: 8, option: "08" },
  { value: 9, option: "09" },
  { value: 10, option: "10" },
  { value: 11, option: "11" },
  { value: 12, option: "12" },
  { value: 13, option: "13" },
  { value: 14, option: "14" },
];

export const monthOptions = [
  {
    value: "",
    option: "MM",
    disabled: true,
    selected: true,
  },
  { value: 1, option: "01" },
  { value: 2, option: "02" },
  { value: 3, option: "03" },
  { value: 4, option: "04" },
  { value: 5, option: "05" },
  { value: 6, option: "06" },
  { value: 7, option: "07" },
  { value: 8, option: "08" },
  { value: 9, option: "09" },
  { value: 10, option: "10" },
  { value: 11, option: "11" },
  { value: 12, option: "12" },
];
export const yearOptions = [
  {
    value: "",
    option: "YYYY",
    disabled: true,
    selected: true,
  },
  { value: 2002, option: 2002 },
  { value: 2003, option: 2003 },
  { value: 2004, option: 2004 },
  { value: 2005, option: 2005 },
  { value: 2006, option: 2006 },
];

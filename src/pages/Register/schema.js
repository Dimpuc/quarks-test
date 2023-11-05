import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  email: yup.string().email("Email invalid").required("Email is required"),
  password: yup
    .string()
    .min(8, "The password must be longer than 8 characters")
    .required("Password is required"),
  name: yup
    .string()
    .min(2, "The name must be longer than 2 characters")
    .required("Name is required"),
  gender: yup.string().required("Gender is required"),
  datingPurpose: yup.string().required("Dating Purpose is required"),
  day: yup
    .number()
    .typeError("Введите дату рождения")
    .required("Day is required"),
  month: yup
    .number()
    .typeError("Введите дату рождения")
    .required("Month is required"),
  year: yup
    .number()
    .required("Введите год")
    .typeError("Введите дату рождения")
    .integer()
    .max(new Date().getFullYear() - 18, "Вы должны быть старше 18 лет")
    .min(new Date().getFullYear() - 80, "Вы должны быть младше 80 лет"),
});

import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  email: yup.string().email("Email invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "The password must be longer than 6 characters")
    .required("Password is required"),
  name: yup
    .string()
    .min(1, "The name must be longer than 1 characters")
    .required("Name is required"),
});

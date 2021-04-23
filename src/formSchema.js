
import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  size: yup
    .string()
    .oneOf(["Small", "Medium", "Party"], "Size is required"),
  cheese: yup.boolean(),
  sauce: yup.boolean(),
  pepporoni: yup.boolean(),
  jalapeno: yup.boolean(),
  specialRequest: yup
    .string()
    .max(300, "Requests must be under 300 characters"),
});

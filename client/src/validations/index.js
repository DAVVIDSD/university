import * as yup from "yup";

export const LoginValidationSchema = yup.object({
  email: yup.string() 
  .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Debe poner un mail valido")
  .required("Este campo es obligatorio "),

  password: yup.string()
  .required("Este campo es obligatorio")
})
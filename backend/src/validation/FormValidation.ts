import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().required(),
  email: yup.string().email().required(),
  color: yup.string().optional(),
  observation: yup.string().optional(),
});

export default formSchema;

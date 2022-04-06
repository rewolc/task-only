import { FormComponent } from "../../components/form/form";
import { WarningComponent } from "../../components/warning/warning";

import { useForm } from "react-hook-form";
import {
  LoginWraper,
  Button,
  Checkbox,
  Label,
  LabelText,
} from "../../styled-components/styled-components";

type FormData = {
  login: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const forms = ["login", "password"];
  const user = {
    login: "steve.jobs@example.com",
    password: "password",
  };
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <LoginWraper as="form" onSubmit={onSubmit}>
      <WarningComponent />
      {forms.map((i, indx) => (
        <FormComponent
          register={register}
          prop={i}
          key={indx}
          message={
            i === "login" ? errors.login?.message : errors.password?.message
          }
        />
      ))}

      <Label>
        <Checkbox />
        <LabelText>Запомнить пароль</LabelText>
      </Label>

      <Button value="Войти" />
    </LoginWraper>
  );
};

export default LoginPage;

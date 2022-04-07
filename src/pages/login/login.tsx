import { FormComponent } from "../../components/form/form";
import { WarningComponent } from "../../components/warning/warning";

import { user } from "../../texts/texts";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

import {
  LoginWraper,
  LoginButton,
  LoginCheckbox,
  LoginLabel,
  LoginLabelText,
} from "./login-styled";

type FormData = {
  login: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [login, enteredLogin] = useState("");
  const [password, enteredPassword] = useState("");
  const [isBtnActive, changeBtnActive] = useState(true);

  const sleep = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time));

  const forms = ["login", "password"];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (data) => {
    changeBtnActive(!isBtnActive);
    await sleep(Math.random() * 3000);
    enteredLogin(data.login);
    enteredPassword(data.password);
    ((isBtnActive) => changeBtnActive(!isBtnActive))();
  });

  return (
    <LoginWraper as="form" onSubmit={onSubmit}>
      {login ? (
        login === user.login ? (
          password === user.password ? (
            navigate("/entered")
          ) : (
            <WarningComponent text={"Неверный пароль"} />
          )
        ) : (
          <WarningComponent text={`Пользователя ${login} не существует`} />
        )
      ) : (
        <></>
      )}
      {forms.map((form, indx) => (
        <FormComponent
          register={register}
          form={form}
          key={indx}
          message={
            form === "login" ? errors.login?.message : errors.password?.message
          }
        />
      ))}

      <LoginLabel>
        <LoginCheckbox />
        <LoginLabelText>Запомнить пароль</LoginLabelText>
      </LoginLabel>

      <LoginButton value="Войти" active={isBtnActive} disabled={!isBtnActive} />
    </LoginWraper>
  );
};

export default LoginPage;

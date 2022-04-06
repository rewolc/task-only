import {
  Inpt,
  UpperForm,
  UnderForm,
} from "../../styled-components/styled-components";

export const FormComponent: React.FC<{
  prop: string;
  message: string | undefined;
  register: Function;
}> = ({ prop, register, message }) => {
  return (
    <>
      <UpperForm> {prop === "login" ? "Логин" : "Пароль"}</UpperForm>
      <Inpt
        filled={message}
        type={prop === "login" ? "text" : "password"}
        {...register(prop, { required: "Обязательное поле" })}
      />
      <UnderForm>{message}</UnderForm>
    </>
  );
};

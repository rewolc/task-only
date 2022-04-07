import { Inpt, UpperFormText, UnderFormText } from "./form-styled";

export const FormComponent: React.FC<{
  form: string;
  message: string | undefined;
  register: Function;
}> = ({ form, register, message }) => {
  return (
    <>
      <UpperFormText> {form === "login" ? "Логин" : "Пароль"}</UpperFormText>
      <Inpt
        filled={message}
        type={form === "login" ? "text" : "password"}
        {...register(form, { required: "Обязательное поле" })}
      />
      <UnderFormText>{message}</UnderFormText>
    </>
  );
};

import styled from "styled-components";
import { AppWraper } from "../../styled-components/App-styled";
import { Inpt } from "../../components/form/form-styled";

export const LoginWraper = styled(AppWraper)`
  margin-top: 184px;
  justify-content: center;
  align-items: flex-start;
  width: 640px;
  position: relative;
`;

interface ButtonProps {
  readonly active: boolean;
}

export const LoginButton = styled(Inpt).attrs({
  type: "submit",
})<ButtonProps>`
  background-color: ${(props) => (props.active ? "#4a67ff" : "#606a9f;")};
  padding: 0;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-top: 40px;
  cursor: ${(props) => (props.active ? "pointer" : "default")};

  &:hover {
    ${(props) =>
      props.active
        ? "background-color : #4a67ff"
        : "background-color : #606a9f"};
  }
`;

///CheckBox

export const LoginCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  border-radius: 4px;
`;
export const LoginLabel = styled.label`
  margin-top: 20px;
  align-items: center;
  display: flex;
  gap: 13px;
`;

export const LoginLabelText = styled.span`
  font-size: 14px;
`;

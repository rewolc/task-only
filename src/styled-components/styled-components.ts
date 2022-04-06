import styled from "styled-components";

///App
export const AppWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderText = styled.h1`
  margin-top: 40px;
  font-size: 64px;
  font-weight: 700;
`;

/// Forms

interface InptProps {
  readonly filled?: string;
}

export const Inpt = styled.input<InptProps>`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background-color: whitesmoke;
  border: none;
  padding-left: 15px;
  transition: all 0.5s;
  &:focus {
    outline: none;
    box-shadow: inset 0px 0px 0px 1px
      ${(props) => (props.filled ? "rgba(226, 111, 111, 1);" : "#8c9df2c4")};
  }
`;

export const UpperForm = styled.p`
  margin: 20px 0 10px 0px;
  color: rgba(31, 31, 31, 1);
  font-size: 16px;
`;

export const UnderForm = styled.p`
  margin-top: 8px;
  color: rgba(226, 111, 111, 1);
  font-size: 14px; ;
`;

///Login-page

export const LoginWraper = styled(AppWraper)`
  margin-top: 184px;
  justify-content: center;
  align-items: flex-start;
  width: 640px;
  position: relative;
`;

export const Button = styled(Inpt).attrs({
  type: "submit",
})`
  background-color: #4a67ff;
  padding: 0;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-top: 40px;
  cursor: pointer;

  &:hover {
    background-color: #3347b2;
  }
`;

///CheckBox

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  border-radius: 4px;
`;
export const Label = styled.label`
  margin-top: 20px;
  align-items: center;
  display: flex;
  gap: 13px;
`;

export const LabelText = styled.span`
  font-size: 14px;
`;

///Warning
interface WerningProps {
  readonly display: string;
}
export const Warning = styled(Inpt)<WerningProps>`
  position: absolute;
  top: -60px;
  border: 1px solid rgba(226, 111, 111, 1);
  background: rgba(245, 233, 233, 1);
  display: ${(props) => props.display};
  align-items: center;
  gap: 15px;
  .symbol {
    color: rgba(238, 101, 101, 1);
    background-color: rgba(255, 200, 200, 1);
    width: 20px;
    line-height: 20px;
    border-radius: 100%;
    text-align: center;
  }
`;

export const WarningText = styled.span`
  font-size: 14px;
`;

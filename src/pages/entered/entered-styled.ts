import styled from "styled-components";

import { AppWraper } from "../../styled-components/App-styled";
import { Inpt } from "../../components/form/form-styled";

export const EnteredWraper = styled(AppWraper)`
  margin-top: 342px;
`;

export const EnteredText = styled.p`
  font-size: 40px;
  span {
    font-weight: 700;
  }
`;

export const EnteredButton = styled(Inpt).attrs({
  type: "submit",
})`
  font-size: 18px;
  width: 200px;
  margin-top: 50px;
  padding: 0px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: rgb(220 220 220);
  }
`;

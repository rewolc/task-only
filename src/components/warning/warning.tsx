import {
  WarningText,
  Warning,
} from "../../styled-components/styled-components";

export const WarningComponent: React.FC<{ text?: string }> = ({ text }) => {
  return (
    <Warning as="div" display="flex">
      <WarningText className="symbol">!</WarningText>
      <WarningText>Пользователь не найден</WarningText>
    </Warning>
  );
};

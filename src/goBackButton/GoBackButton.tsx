import { FC } from "react";
import { StyledGoBackButton } from "./GoBackButton.styled";

type Props = {
  onClick: () => void;
};

const GoBackButton: FC<Props> = ({ onClick }) => {
  return (
    <StyledGoBackButton
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      Back
    </StyledGoBackButton>
  );
};

export default GoBackButton;

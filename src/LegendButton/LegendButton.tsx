import { FC } from "react";
import { StyledLegendButton } from "./LegendButton.styled";

type Props = {
  onClick: () => void;
};

const LegendButton: FC<Props> = ({ onClick }) => {
  return <StyledLegendButton onClick={onClick}>Legend</StyledLegendButton>;
};

export default LegendButton;
  
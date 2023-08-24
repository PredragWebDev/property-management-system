import { FC } from "react";
import { StyledSortBorder } from "./SortBorder.styled";

type Props = {
  // onClick: () => void;
};

const SortBorder: FC<Props> = (() => {
  return (
  <StyledSortBorder >
    <div>
      <p>Sort boarder</p>
      <input type="checkbox" id="1"/>
      <input type="checkbox" id="1"/>
      <input type="checkbox" id="1"/>
      <input type="checkbox" id="1"/>
      <input type="checkbox" id="1"/>
      <input type="checkbox" id="1"/>
      <input type="checkbox" id="1"/>
      <input type="checkbox" id="1"/>
    </div>
  </StyledSortBorder>
)});

export default SortBorder;
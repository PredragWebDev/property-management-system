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
      <label>
        <input type="checkbox" id="1" value={'from_listed_to_sold'}/>
        From Listed to Sold in a very short time
      </label>
      <label>
        <input type="checkbox" id="1" value={'multiple_properties'}/>
        Multiple properties bought by a single company/person
      </label>

      <label>
        <input type="checkbox" id="1" value={'substantial_price_drop'}/>
        Substantial Price Drop
      </label>

      <label>
        <input type="checkbox" id="1" value={'bulk_property_purchases'}/>
        Bulk Property Purchases
      </label>

      <label>
        <input type="checkbox" id="1" value={'properties_replaced'}/>
        Properties Replaced by Non-residential Structures
      </label>

      <label>
        <input type="checkbox" id="1" value={'rapid_relisting'}/>
        Rapid Relisting
      </label>

      <label>
        <input type="checkbox" id="1" value={'frequent_status_changes'}/>
        Frequent Status Changes
      </label>

      <label>
        <input type="checkbox" id="1" value={'sold_multiple_times'}/>
        Properties Sold Multiple Times in a Short Period
      </label>
    </div>
  </StyledSortBorder>
)});

export default SortBorder;
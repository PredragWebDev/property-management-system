import { FC, useState } from "react";
import { StyledSortBorder } from "./SortBorder.styled";
import { chooseEmoji } from "../utils/chooseEmoji";

type Props = {
  // onClick: () => void;
  closepopup:() => void;
  setSortFilter:(data: any) => void;
  checkbox_data: {};
  setCheckBox: (data:any) => void;
};

const SortBorder: FC<Props> = ({closepopup, setSortFilter, checkbox_data, setCheckBox}) => {

  const handleCheckboxChange = (event: { target: { id: any; checked: any; }; }) => {
    const {id, checked} = event.target;

    setCheckBox((prevCheckboxes) =>
        prevCheckboxes.map(checkbox => checkbox.id === id
          ? { ...checkbox, isChecked: checked }
          : checkbox
        )
      );
  }   

  const handle_closepopup = () => {
    closepopup();
  }

  const handle_set = () => {

    let tempData: (string | undefined)[] = [];

    checkbox_data.map((box) => {
      if (box.isChecked) {
          tempData.push(box.value);
      }
    })

    console.log('filter data>>>>>>', tempData);

    setSortFilter(tempData);
  
    closepopup();
  }

  return (
  <StyledSortBorder >
    <div id="checkbox_group">
      <p>Sort boarder</p>
      {checkbox_data.map((box) => {
          return (
              <label key = {box.id}>
                  {/* {chooseEmoji(box.value)} */}
                  <input type="checkbox" id={box.id} checked = {box.isChecked} value={box.value} onChange={handleCheckboxChange} />
                  {box.label}
              </label>
          )
      })}
{/* 
      <label>
        <input type="checkbox" id="1" value={'from_listed_to_sold'} onChange={handleCheckboxChange}/>
        From Listed to Sold in a very short time
      </label>
      <label>
        <input type="checkbox" id="1" value={'multiple_properties'} onChange={handleCheckboxChange}/>
        Multiple properties bought by a single company/person
      </label>

      <label>
        <input type="checkbox" id="1" value={'substantial_price_drop'} onChange={handleCheckboxChange}/>
        Substantial Price Drop
      </label>

      <label>
        <input type="checkbox" id="1" value={'bulk_property_purchases'} onChange={handleCheckboxChange}/>
        Bulk Property Purchases
      </label>

      <label>
        <input type="checkbox" id="1" value={'properties_replaced'} onChange={handleCheckboxChange}/>
        Properties Replaced by Non-residential Structures
      </label>

      <label>
        <input type="checkbox" id="1" value={'rapid_relisting'} onChange={handleCheckboxChange}/>
        Rapid Relisting
      </label>

      <label>
        <input type="checkbox" id="1" value={'frequent_status_changes'} onChange={handleCheckboxChange}/>
        Frequent Status Changes
      </label>

      <label>
        <input type="checkbox" id="1" value={'sold_multiple_times'} onChange={handleCheckboxChange}/>
        Properties Sold Multiple Times in a Short Period
      </label> */}
    </div>

    <div id="button_group">
      <button onClick={handle_set}>SET</button>
      <button onClick={handle_closepopup}>CLOSE</button>
    </div>
  </StyledSortBorder>
)};

export default SortBorder;
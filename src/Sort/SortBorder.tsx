import { FC } from "react";
import { StyledSortBorder } from "./SortBorder.styled";
// import { DatePicker } from '@mui/lab';
import { chooseEmoji } from "../utils/chooseEmoji";

type Props = {
  // onClick: () => void;
  closepopup:() => void;
  setSortFilter:(data: any) => void;
  checkbox_data: Array<{ id: string; label: string; isChecked: boolean; value: string; }>;
  setCheckBox: (data:any) => void;
  history_filter:Array<{ id: string; label: string; isChecked: boolean; value: string; }>;
  setHistoryFilterData:(data:any) => void;
  setHistoryFilter: (data:any) => void;
};

const SortBorder: FC<Props> = ({closepopup, setSortFilter, checkbox_data, history_filter, setHistoryFilter,  setCheckBox,}) => {

  // const curDate = new Date().toISOString().slice(0, 10);

  // const [curDate, setCurDate] = useState(new Date());
  const handleCheckboxChange = (event: { target: { id: any; checked: any; }; }) => {
    const {id, checked} = event.target;

    setCheckBox((prevCheckboxes: any[]) =>
      prevCheckboxes.map((checkbox: { id: any; }) => checkbox.id === id
        ? { ...checkbox, isChecked: checked }
        : checkbox
      )
    );
  }   

  const handleHistoryChange = (event: { target: { id: any; checked: any; }; }) => {
    const {id, checked} = event.target;

    setHistoryFilter((prevCheckboxes: any[]) =>
      prevCheckboxes.map((checkbox: { id: any; }) => checkbox.id === id
        ? { ...checkbox, isChecked: checked }
        : checkbox
      )
    );
  } 

  // const handleFromdate = (event:any) => {
  //   setFromDateFilter(event.target.value);
  //   // setFromDate(event.target.value);
  // }

  // const handleEnddate = (e:any) => {
  //   setEndDateFilter(e.target.value);
  //   // setEndDate(e.target.value);
  // }

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

    tempData = [];

    history_filter.map((data) => {
      if (data.isChecked) {
        tempData.push(data.value);
      }
    })
  
    closepopup();
  }

  return (
  <StyledSortBorder >
      <div id='label_time'>
        <p>Filter Board</p>
        {/* <DatePicker value = {fromDate} onChange = {handleFromdate}/>
        -
        <DatePicker value = {endDate} onChange = {handleEnddate}/> */}

        
      </div>
      <div id="checkbox_group">

        {history_filter.map((box) => {
            return (
              <label key = {box.id}>
                  {/* {chooseEmoji(box.value)} */}
                  <input type="checkbox" id={box.id} checked = {box.isChecked} value={box.value} onChange={handleHistoryChange} />
                  {box.label}
              </label>
            )
        })}
        <div id="line"></div>
        {checkbox_data.map((box) => {
            return (
              <label key = {box.id}>
                  {chooseEmoji(box.value)}
                  <input type="checkbox" id={box.id} checked = {box.isChecked} value={box.value} onChange={handleCheckboxChange} />
                  {box.label}
              </label>
            )
        })}

      </div>

      <div id="button_group">
        <button onClick={handle_set}>SET</button>
        <button onClick={handle_closepopup}>CLOSE</button>
      </div>

  </StyledSortBorder>
)};

export default SortBorder;
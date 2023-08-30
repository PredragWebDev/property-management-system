// import { Property } from "../types/Property";
import Map from "react-map-gl";
import { StyledApp } from "./Maui.styled";
// import { useQuery } from "@tanstack/react-query";
import MapItems from "../MapItems/MapItemList";
import Drawer from "../Drawer/Drawer";
import { useEffect, useState } from "react";
import LandingModal from "../LandingModal/LandingModal";
import Footer from "../Footer/Footer";
import LegendButton from "../LegendButton/LegendButton";
import LegendModal from "../LegendModal/LegendModal";
import DonateButton from "../DonateButton/DonateButton";
import DonateModal from "../DonateModal/DonateModal";
import SortBorder from "../Sort/SortBorder";
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popover from '@mui/material/Popover';
import GoBackButton from "../goBackButton/GoBackButton";
// import useHistory from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Maui() {
  const [showModal, setShowModal] = useState(true);
  const [showLegend, setShowLegend] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [sortFilerData, setSortFilterData] = useState([]);
  const [historyFiterData, setHistoryFilterData] = useState([]);
  const [fromDate, setFromDate] = useState(new Date('2023-08-09').toISOString().slice(0,10));
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0,10));
  const [properties, setProperties] = useState([]);
 
  let navigate = useNavigate();

  const location = useLocation();
  const param = location.state?.param;

  
  useEffect(() => {

    let isMounted = true;

    const fetchData = async () => {
      try {
        const api_key = 'asd723erbkjhabsd8213';
        const event_flag = param;
        
        const response = await axios.get(`https://api-new.landgrabwatch.com/get_properties?api_key=${api_key}&event_flag=${event_flag}&start_date=${fromDate}&end_date=${endDate}`);
  
        // console.log('default date>>>', response.data['default_start_date']);
        setProperties(response.data['properties']);
  
        // setFromDate(new Date(response.data['default_start_date']).toISOString().slice(0,10));
  
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (isMounted) {
      console.log('test>>>>>>>>');

      isMounted = false;
      fetchData();
    }

    return () => {
    };

  }, [fromDate, endDate])

  // useEffect (() => {
  //   fetchData();

  //   console.log('changed date>>>', fromDate);
  // }, [])

  // const { data } = useQuery<any, unknown, Property[], any>({
  //   queryKey: [
  //     "get_properties",
  //     // turn back on when this filters properties and not events
  //     // { params: { start_date: "2023-08-08" } } as AxiosRequestConfig,
  //   ],
  // });

  const setSortFilter = (data: any) => {
    setSortFilterData(data);
  }

  const goBack = () => {
    console.log('go back okay?');
    navigate('/');
    // history.push('/');
  }

  const [checkbox_data, setCheckBox] = useState([
    {
      id:'1',
      label:'From Listed to Sold in a very short time',
      isChecked:false,
      value:'rapid_sale_check'
    },
    {
      id: '2',
      label:'Multiple properties bought by a single company/person',
      isChecked:false,
      value:'multiple_purchases_by_buyer'
    },
    {
      id:'3',
      label:'Substantial Price Drop',
      isChecked:false,
      value:'substantial_price_drop'
    },
    {
      id:'4',
      label:'Single Entity Listing Bulk Properties',
      isChecked:false,
      value: 'bulk_sale_check'
    },
    {
      id:'6',
      label:'Rapid Relisting',
      isChecked:false,
      value:'rapid_relist_check'
    },
    {
      id:'7',
      label:'Frequent Status Changes',
      isChecked:false,
      value:'frequent_change_check'
    },
    {
      id:'5',
      label:'Properties Sold Multiple Times in a Short Period',
      isChecked:false,
      value:'frequent_sales_check'
    }

  ]);

  const [history_filter, setHistoryFilter] = useState([
    {
      id:'1',
      label:'All listed properties',
      isChecked:false,
      value:"listed"
    },
    {
      id:'2',
      label:' buying/selling entities',
      isChecked:false,
      value:"sold"
    }
  ])
  return (
    <>
    <StyledApp>
      <h1 onClick={() => setShowModal(true)}>LandGrab Watch
      <DonateButton onClick={() => setShowDonate(true)} />
      </h1>


      <div id="date">
        <input type="date" id='time' value={fromDate} onChange={(e) => setFromDate(new Date(e.target.value).toISOString().slice(0,10))}/>
          -
        <input type="date" id='time' value={endDate} onChange={(e) => setEndDate(new Date(e.target.value).toISOString().slice(0,10))}/>
      </div>

      <GoBackButton onClick={() => goBack()} />
      
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        mapLib={import("mapbox-gl")}
        initialViewState={{
          // lahaina location
          longitude: -156.64771868530957,
          latitude: 20.913646483159667,
          zoom: 11.5,
        }}
        maxBounds={[
          [-156.9752737894423, 20.672864436517315],
          [-156.22767799535026, 21.174269005265103],
        ]}
        // pitch={65}
        // onClick={(e) => console.log(e)}
        // onDrag={(e) => console.log(e)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {!!properties && <MapItems properties={properties} filterData = {sortFilerData} historyFiterData = {historyFiterData} fromDate = {fromDate} endDate = {endDate} />}
      </Map>
      <Drawer />
      {showModal && <LandingModal dismiss={() => setShowModal(false)} />}
      {showDonate && <DonateModal dismiss={() => setShowDonate(false)} />}
      {showLegend && <LegendModal dismiss={() => setShowLegend(false)} />}
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <>
            <button {...bindTrigger(popupState)}
              id="popover"
              type="button"
              
              className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              // onClick={handleOpenDownLoad_Modal}
            >
              FILTER
            </button>
            <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
            >
            <SortBorder closepopup = {popupState.close} history_filter = {history_filter} setHistoryFilter = {setHistoryFilter} setHistoryFilterData = {setHistoryFilterData} setSortFilter = {setSortFilter} checkbox_data = {checkbox_data} setCheckBox = {setCheckBox} />

            {/* <button onClick={popupState.close}>close</button> */}
            </Popover>
          </>
        )}
      </PopupState>

      <LegendButton onClick={() => setShowLegend(true)} />
      <Footer />
    </StyledApp>
    </>

  );
}

export default Maui;

import { Property } from "./types/Property";
import Map from "react-map-gl";
import { StyledApp } from "./App.styled";
import { useQuery } from "@tanstack/react-query";
import MapItems from "./MapItems/MapItemList";
import Drawer from "./Drawer/Drawer";
import { useState } from "react";
import LandingModal from "./LandingModal/LandingModal";
import Footer from "./Footer/Footer";
import LegendButton from "./LegendButton/LegendButton";
import LegendModal from "./LegendModal/LegendModal";
import DonateButton from "./DonateButton/DonateButton";
import DonateModal from "./DonateModal/DonateModal";
import SortBorder from "./Sort/SortBorder";
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popover from '@mui/material/Popover';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showLegend, setShowLegend] = useState(false);
  const [showDonate, setShowDonate] = useState(false);

  const { data } = useQuery<any, unknown, Property[], any>({
    queryKey: [
      "get_properties",
      // turn back on when this filters properties and not events
      // { params: { start_date: "2023-08-08" } } as AxiosRequestConfig,
    ],
  });

  return (
    <>
    <StyledApp>
      <h1 onClick={() => setShowModal(true)}>LandGrab Watch
      <DonateButton onClick={() => setShowDonate(true)} />
      </h1>
      
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
        {!!data && <MapItems properties={data} />}
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
              SORT
            </button>
            <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
            >
            <SortBorder closepopup = {popupState.close}/>

            {/* <button onClick={popupState.close}>close</button> */}
            </Popover>
          </>
        )}
      </PopupState>

      {/* <SortBorder/> */}
      <LegendButton onClick={() => setShowLegend(true)} />
      <Footer />
    </StyledApp>
    </>

  );
}

export default App;

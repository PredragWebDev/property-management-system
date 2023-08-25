import { FC } from "react";
import { Marker } from "react-map-gl";
import { Property } from "../types/Property";
import { StyledMapItem } from "./MapItem.styled";
import { stringToPastelColor } from "../utils/colorMappings";
import { useDrawerStore } from "../stores/drawerStore";
import { chooseEmoji } from "../utils/chooseEmoji";

type Props = {
  property: Property;
  filterData: any [];
};

const MapItem: FC<Props> = ({ property, filterData }) => {
  const selectProperty = useDrawerStore((state) => state.selectProperty);
  const selectedProperty = useDrawerStore((state) => state.selectedProperty);

  const selectedPropertyUniqueId =
    (selectedProperty?.apn || "") + selectedProperty?.address;
  const currentPropertyUniqueId = (property?.apn || "") + property?.address;

  const isSelected = selectedPropertyUniqueId === currentPropertyUniqueId;

  return (

      <div>
        {filterData.map((data) => {
          const display = (property[data] !== false) ? data : "";

          return (display !== "") ? (
            <Marker
              latitude={property.latitude}
              longitude={property.longitude}
              style={{ cursor: "pointer" }}
              onClick={() => {
                selectProperty(property);
              }}
            >
              <StyledMapItem
                selected={isSelected}
                background={stringToPastelColor(property.listing_brokers[0])}
              >
                {chooseEmoji(display)}
              </StyledMapItem>
            </Marker>

            ) : null;
        })}
      </div>
  );
};

export default MapItem;

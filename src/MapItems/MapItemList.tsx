import { FC } from "react";
import { Property } from "../types/Property";
import MapItem from "./MapItem";

type Props = {
  properties: Property[];
  filterData: any[];
};

const MapItems: FC<Props> = ({ properties, filterData }) => {
  console.log('filter data<<<<<<<', filterData);
  const filteredProperties = properties.filter((prop) => {
    return new Date(prop.events[0].date).valueOf() > new Date("2023-08-08").valueOf();
  });

  return (
    <>
      {filteredProperties.map((property) => (
        <MapItem key={property.apn + property.address} property={property} filterData = {filterData} />
      ))}
    </>
  );
};

export default MapItems;

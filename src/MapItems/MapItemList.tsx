import { FC } from "react";
import { Property } from "../types/Property";
import MapItem from "./MapItem";

type Props = {
  properties: Property[];
  filterData: any[];
  fromDate: any;
  endDate: any;
};

const MapItems: FC<Props> = ({ properties, filterData, fromDate, endDate }) => {
  console.log('end data>>>>', endDate);

  const filteredProperties = properties.filter((prop) => {
    // console.log('from data>>>>', new Date(prop.events[0].date) );

    // return new Date(prop.events[0].date).valueOf() > new Date("2023-08-08").valueOf();
    return new Date(prop.events[0].date).valueOf() >= new Date(fromDate).valueOf() && new Date(prop.events[0].date).valueOf() <= new Date(endDate).valueOf();

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

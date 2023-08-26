import { FC } from "react";
import { Property } from "../types/Property";
import MapItem from "./MapItem";

type Props = {
  properties: Property[];
  filterData: any[];
  fromDate: any;
  endDate: any;
  historyFiterData:any[];
};

const MapItems: FC<Props> = ({ properties, filterData, fromDate, endDate, historyFiterData }) => {
  console.log('end data>>>>', endDate);

  const filteredProperties = properties.filter((prop) => {

    return (historyFiterData.length > 0 ? (new Date(prop.events[0].date).valueOf() >= new Date(fromDate).valueOf() && new Date(prop.events[0].date).valueOf() <= new Date(endDate).valueOf() && (prop.events.map((e) => {
      historyFiterData.map((data) => {
        
          e.description === data ? true :false;
      })
    }))
    ):(
      new Date(prop.events[0].date).valueOf() >= new Date(fromDate).valueOf() && new Date(prop.events[0].date).valueOf() <= new Date(endDate).valueOf()
    ));

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

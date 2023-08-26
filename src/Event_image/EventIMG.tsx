// import React from 'react';
import { FC } from "react";
type Props = {
    src:any;
    name:string;
  };

const EventIMG:FC<Props> = ({src, name}) => {
    console.log('test>>>', name);
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        id="event_img"
        src={src}
        alt="Maui fires"
        style={{ width: '100%' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '10px',
        }}
      >
        {name}
      </div>
    </div>
  );
};

export default EventIMG;
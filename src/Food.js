import React from 'react';

export default function Food({ tea, savory, sweet }) {
  return (
    <div className="food">

      <img src={`tea-${tea}.jpeg`} />
      <img src={`savory-${savory}.jpg`} />
      <img src={`sweet-${sweet}.jpeg`} />
    </div>
  );
}

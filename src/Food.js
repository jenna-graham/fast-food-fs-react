import React from 'react';

export default function Food({ tea, savory, sweet }) {
  return (
    <div className="food">

      <img src={`${tea}.jpeg`} />
      <img src={`${savory}.jpg`} />
      <img src={`${sweet}.jpeg`} />
    </div>
  );
}

import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <section>
      <label>
        Name your Order! <input onChange={e => setOrderName(e.target.value)}/>
      </label>
    </section>
  );
}

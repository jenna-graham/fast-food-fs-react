import React from 'react';

export default function InstructionList({ instructions }) {
  return (
    <section>
      <h2>Your Instructions:</h2>
      <ul>
        {
          instructions.map((instruction, i) => <li key={instruction + i}>{instruction}</li>)
        }
      </ul>
        
    </section>
  );
}

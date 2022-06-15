import React from 'react';

export default function InstructionForm({ handleSubmit, setInstructionInForm, instructionInForm }) {
  return (
    
    <form onSubmit={handleSubmit}>
      <label>
            Add instructions:
        <input value={instructionInForm} onChange={e => setInstructionInForm(e.target.value)} />
      </label>
      <button>Submit</button>

    </form>
    
  );
}

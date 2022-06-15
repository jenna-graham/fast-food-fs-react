import './App.css';
import { useState } from 'react';
import Food from './Food.js';
import OrderNameInput from './OrderNameInput.js';
import TheDropDowns from './TheDropDowns.js';
import InstructionForm from './InstructionForm.js';
import InstructionList from './InstructionList';

function App() {
  const [tea, setTea] = useState('herbal');
  const [savory, setSavory] = useState('toast');
  const [sweet, setSweet] = useState('scone');
  const [orderName, setOrderName] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [instructionInForm, setInstructionInForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, instructionInForm]);
    setInstructionInForm('');
  }

  return (
    <div className="App">
      <Food 
        tea={tea}
        savory={savory}
        sweet={sweet}
      />
      <h1>Welcome to The Tea House!! <br></br>
        Your order name: {orderName}</h1>
      <div className="order-input">
        <OrderNameInput setOrderName={setOrderName} />
        <section className="dropdowns">
          <TheDropDowns 
            setTea={setTea}
            setSavory={setSavory}
            setSweet={setSweet}
          />
          
        </section>
        <InstructionForm handleSubmit={handleSubmit} setInstructionInForm={setInstructionInForm} instructionInForm={instructionInForm}/>
        <InstructionList instructions={instructions} />
       

      </div>
        
      
    
    </div>
  );
}

export default App;

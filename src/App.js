import './App.css';
import { useState } from 'react';
import Food from './Food.js';
import OrderNameInput from './OrderNameInput.js';
import TheDropDowns from './TheDropDowns.js';

function App() {
  const [tea, setTea] = useState('herbal');
  const [savory, setSavory] = useState('toast');
  const [sweet, setSweet] = useState('scone');
  const [orderName, setOrderName] = useState('Healthy Lunch!');
  const [instructions, setInstructions] = useState([]);
  const [instructionsInForm, setInstructionsInForm] = useState('');

  return (
    <div className="App">
      <Food 
        tea={tea}
        savory={savory}
        sweet={sweet}
      />
      <h1>Order Name: {orderName}</h1>
      <div className="order-input">
        <OrderNameInput setOrderName={setOrderName} />
        <section className="dropdowns">
          <TheDropDowns 
            setTea={setTea}
            setSavory={setSavory}
            setSweet={setSweet}
          />
          
        </section>

      </div>
        
      
    
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Food from './Food.js';
import OrderNameInput from './OrderNameInput';

function App() {
  const [tea, setTea] = useState(1);
  const [savory, setSavory] = useState(1);
  const [sweet, setSweet] = useState(1);
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
        <OrderNameInput setOrderName={setOrderName}/>
      </div>
        
      
    
    </div>
  );
}

export default App;

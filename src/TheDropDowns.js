import React from 'react';
import CustomDropDown from './CustomDropDown.js';

export default function TheDropDowns({ setTea, setSavory, setSweet }) {
  return (
    <div>
      <CustomDropDown 
        label="What tea do you prefer?"
        setItem={setTea}
        options={[
          { value: 'herbal', displayText: 'herbal' },
          { value: 'black', displayText: 'black' },
          { value: 'green', displayText: 'green' },
        ]}
      />
      <CustomDropDown 
        label="Something savory?"
        setItem={setSavory}
        options={[
          { value: 'toast', displayText: 'lox avocado toast' },
          { value: 'salad', displayText: 'strawberry balsamic salad' },
          { value: 'sandwich', displayText: 'egg salad sandwich' },
        ]}
      />
      <CustomDropDown 
        label="Or something sweet?"
        setItem={setSweet}
        options={[
          { value: 'scone', displayText: 'jammin scones w/ cream' },
          { value: 'brownie', displayText: 'double fudge brownies' },
          { value: 'tart', displayText: 'strawberry cake tarts' },
        ]}
      />
    </div>
  );
}

import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">HI</div>
        <h1>Item List Manager</h1>
      </header>

      <h2>Item List</h2>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">
          Add Item
        </button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Clock from './components/Clock';
import Form from './components/Form';

function App() {
  const [clocks, setClocks] = useState([]);

  const getIndex = (id) => {
    const index = clocks.findIndex((clock) => clock.id === id);
    return index
  }

  const handleFormSubmit = (form) => {
    setClocks((prevState) => [...prevState, { id: crypto.randomUUID(), capital: form.capital, timeZone: form.timeZone }]);
  };

  const handleDeleteClick = (id) => {
    const index = getIndex(id)
    const updatedClocks = [...clocks.slice(0, index), ...clocks.slice(index + 1)]
    
    setClocks(updatedClocks)
  }

  return (
    <div className='container'>
      <Form onFormSubmit={handleFormSubmit} />
      <div className='clocks-container'>
        {clocks.map(clock => (
          <Clock 
            key={clock.id} 
            id={clock.id} 
            capital={clock.capital} 
            timeZone={clock.timeZone}
            onDeleteClick={handleDeleteClick} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
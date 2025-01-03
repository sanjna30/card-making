import React from 'react';
import './App.css';

const App = () => {
  const data = [
    { id: 1, title: 'Card 1', description: 'This is card 1' },
    { id: 2, title: 'Card 2', description: 'This is card 2' },
    { id: 3, title: 'Card 3', description: 'This is card 3' },
  ];

  return (
    <div className="cards-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';

const App = () => {
  const data = [
    { id: 1, title: 'How Rare', description: 'You Are Beautiful' },
    { id: 2, title: 'Stay Positive', description: 'Shine Bright Always' },
    { id: 3, title: 'Be You', description: 'I like who i m becoming.' },
    { id: 4, title: 'Keep Going', description: 'Great Things Take Time' },
  ];

  return (
    <div className="app-container">
      <div className="cards-container">
        {data.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

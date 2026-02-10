import React, { useState } from 'react';
import './App.css'; // Don't forget to import the CSS!

function App() {
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <div className="presentation-card">
        <h1>CI/CD Pipeline</h1>
        
        {/* data-testid is crucial for automation */}
        <h2 className="counter-value" data-testid="counter-display">
          {count}
        </h2>

        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';

function App() {
  const ls = localStorage;
  const [count, setCount] = React.useState(Number(ls.getItem('counter')) || 0);

  const toLS = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      ls.setItem('counter', JSON.stringify(newCount));
      return newCount;
    });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" />
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={toLS}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

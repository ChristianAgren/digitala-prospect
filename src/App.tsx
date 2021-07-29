import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(count);
  }, [count]);

  return (
    <div className="bg-gray-700 min-h-full">
      <header className="text-gray-50 text-center space-y-4">
        <img src={logo} className="w-60 h-60 mx-auto animate-pulse" alt="logo" />
        <h1 className="text-2xl font-semibold">React + Tailwind + Vite</h1>

        <button
          className="px-4 py-2 rounded-full bg-green-600 hover:bg-opacity-80"
          type="button"
          onClick={() => setCount(prevCount => prevCount + 1)}
        >
          Count is: {count}
        </button>

        <p>
          Edit <code className="bg-gray-800 p-1">App.tsx</code> and save to test HMR updates.
        </p>
        <p className="space-x-2">
          <a className="text-blue-400" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            React
          </a>
          <span>|</span>
          <a className="text-green-500" href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
            Tailwind
          </a>
          <span>|</span>
          <a className="text-indigo-400" href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            Vite
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  console.log('toggle', toggle);

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <motion.button
        className="p-3 rounded-sm bg-red-500 hover:bg-red-500"
        onClick={() => setToggle(!toggle)}
        animate={{ rotate: toggle ? 180 : 0 }}
        transition={{ duration: 0.7 }}
      >
        Toggle
      </motion.button>
    </div>
  );
}

export default App;

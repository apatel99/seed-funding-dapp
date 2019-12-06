import React from 'react';

function App() {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      <div id="header" className="flex-none">
        <div className="w-full h-16 bg-gray-800"></div>
      </div>

      <div id="main" className="flex-grow container mx-auto flex flex-col overflow-y-scroll">
      </div>

      <div id="footer" className="flex-none">
        <div className="w-full h-16 bg-gray-800"></div>
      </div>
      
    </div>
  );
}

export default App;

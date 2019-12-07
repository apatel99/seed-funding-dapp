import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateSeeding from './components/CreateSeeding';

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      <Header />

      <div id="main" className="flex-grow container mx-auto flex flex-col overflow-y-scroll">
        <CreateSeeding/>

      <div id="footer" className="flex-none">
        <div className="w-full h-16 bg-gray-800"></div>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;

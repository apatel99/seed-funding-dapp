import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateSeeding from './components/CreateSeeding';
import AddInvestor from './components/AddInvestor';
import RemoveInvestor from './components/RemoveInvestor';
import Invest from './components/Invest';
import Withdraw from './components/Withdraw';

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      <Header />

      <div id="main" className="flex-grow container mx-auto flex flex-col overflow-y-scroll">
        <CreateSeeding/>

        <AddInvestor/>

        <RemoveInvestor/>
            <Invest/>
            <Withdraw/>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;

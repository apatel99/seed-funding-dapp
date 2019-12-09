import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateSeeding from './components/CreateSeeding';
import AddInvestor from './components/AddInvestor';
import RemoveInvestor from './components/RemoveInvestor';
import Invest from './components/Invest';
import Withdraw from './components/Withdraw';
import GetInvestment from './components/GetInvestment';

const App = () => {
  const [tab, setTab] = useState('1');

  const changeOption = (event) => {
    setTab(event.target.value);
  }

  return (
    <div className="flex flex-col overflow-hidden h-screen">
      <Header />

      <div className="flex justify-center bg-yellow-500">
        <button onClick={changeOption} value="1" className={tab==1 ? `p-4 text-white bg-yellow-900` : `p-4`}>Companies</button>
        <button onClick={changeOption} value="2" className={tab==2 ? `p-4 text-white bg-yellow-900` : `p-4`}>Investors</button>
        <button onClick={changeOption} value="3" className={tab==3 ? `p-4 text-white bg-yellow-900` : `p-4`}>Make Investment</button>
        <button onClick={changeOption} value="4" className={tab==4 ? `p-4 text-white bg-yellow-900` : `p-4`}>Claim Rewards!</button>
        <button onClick={changeOption} value="5" className={tab==5 ? `p-4 text-white bg-yellow-900` : `p-4`}>Owner Functions</button>
      </div>

      <div id="main" className="p-2 flex-grow container mx-auto flex flex-col overflow-y-scroll md:p-auto">
        {
          {
            1: <CreateSeeding/>,
            2: <div><AddInvestor/> <RemoveInvestor/></div>,
            3: <Invest/>,
            4: <Withdraw/>,
            5: <GetInvestment/>
          } [tab]
        }
      </div>
      
      <Footer />
    </div>
  );
};

export default App;

import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import { InvestmentFormComponent } from './components/Form/InvestmentFormComponent';
import { Table } from './components/Table/Table';
import { YearlyData } from './types/YearlyData';

function App() {
  const [userInvestment, setUserInvestment] = useState<YearlyData[]>([]);

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InvestmentFormComponent setUserInvestment={setUserInvestment} />

      {userInvestment.length ? <Table userInvestment={userInvestment} /> : <h2 className='header'>Add a new investment and see your result!</h2>}
    </div>
  );
}

export default App;

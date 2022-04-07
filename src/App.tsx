import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import logo from './assets/images/logo.svg';
import Card from './components/Card';
import Form from './components/Form';

const App: React.FC = () => {
  const [bill, setBill] = useState<null | number>(null);
  const [tip, setTip] = useState(5);
  const [people, setPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(1);

  // Changes the tip amount based on the tip percentage
  // Just when we have a change on bill, people or tip
  useEffect(() => {
    const handleTipCalculation = () => {
      const tipAmt = (tip / 100) * (bill || 0);
      setTipAmount(tipAmt);
      const total = tipAmt / people;
      setTotalPerPerson(total);
    };
    handleTipCalculation();
  }, [bill, people, tip]);

  // useCallback makes this function only gets declared when any of the items on the
  // dependencies array changes
  const handleReset = useCallback(() => {
    setBill(null);
    setTip(5);
    setPeople(1);
    setTipAmount(0);
    setTotalPerPerson(1);
  }, [setBill, setTip, setPeople, setTipAmount, setTotalPerPerson]);

  return (
    <div className="App">
      <div className="container">
        <img alt="logo" className="container__img" src={logo} />
        <div className="card">
          <div className="card__details">
            <Form
              bill={bill}
              people={people}
              setBill={setBill}
              setPeople={setPeople}
              setTip={setTip}
              tip={tip}
            />
            <Card
              handleReset={handleReset}
              tipAmount={tipAmount}
              totalPerPerson={totalPerPerson}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

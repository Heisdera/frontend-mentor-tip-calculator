import { useState, createContext } from 'react';

export const BillContext = createContext();

function BillSplitterProvider({ children }) {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [customTipPercent, setCustomTipPercent] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  const tipAmount = bill * tipPercentage;
  const tipAmountPerPerson = tipAmount / numberOfPeople;
  const totalPerPerson = (bill + tipAmount) / numberOfPeople;

  const noPersonSelected = numberOfPeople === '' || numberOfPeople === null;

  function handleSetBill(e) {
    setBill(Number(e.target.value) <= 0 ? null : Number(e.target.value));
  }

  function handleTipChange(e) {
    e.preventDefault();
    setTipPercentage(Number(e.target.value) / 100);
    setCustomTipPercent('');
  }

  function handleCustomTipChange(e) {
    setCustomTipPercent(
      Number(e.target.value) <= 0 ? null : Number(e.target.value)
    );
    setTipPercentage(Number(e.target.value) / 100);
  }

  function handleSetNumPeople(e) {
    setNumberOfPeople(
      Number(e.target.value) <= 0 ? null : Number(e.target.value)
    );
  }

  function handleReset() {
    setBill('');
    setTipPercentage('');
    setCustomTipPercent('');
    setNumberOfPeople('');
  }

  return (
    <BillContext.Provider
      value={{
        bill,
        handleSetBill,
        handleTipChange,
        customTipPercent,
        handleCustomTipChange,
        tipPercentage,
        numberOfPeople,
        handleSetNumPeople,
        tipAmountPerPerson,
        totalPerPerson,
        handleReset,
        noPersonSelected,
      }}
    >
      {children}
    </BillContext.Provider>
  );
}

export default BillSplitterProvider;

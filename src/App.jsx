import { useState } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Container from './ui/Container';
import Logo from './ui/Logo';
import Section from './ui/Section';
import ResultSection from './ui/ResultSection';
import Label from './ui/Label';
import Input from './ui/Input';
import Button from './ui/Button';
import CustomInput from './ui/CustomInput';
import ButtonWrapper from './ui/ButtonWrapper';

export default function App() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [customTipPercent, setCustomTipPercent] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  const tipAmount = bill * tipPercentage;
  const tipAmountPerPerson = tipAmount / numberOfPeople;
  const totalPerPerson = (bill + tipAmount) / numberOfPeople;

  const noPersonSelected = numberOfPeople === '' || numberOfPeople === null;

  function handleSetBill(e) {
    setBill(Number(e.target.value) === 0 ? null : Number(e.target.value));
  }

  function handleTipChange(e) {
    e.preventDefault();
    setTipPercentage(Number(e.target.value) / 100);
    setCustomTipPercent('');
  }

  function handleCustomTipChange(e) {
    setCustomTipPercent(
      Number(e.target.value) === 0 ? null : Number(e.target.value)
    );
    setTipPercentage(Number(e.target.value) / 100);
  }

  function handleSetNumPeople(e) {
    setNumberOfPeople(
      Number(e.target.value) === 0 ? null : Number(e.target.value)
    );
  }

  function handleReset() {
    setBill('');
    setTipPercentage('');
    setCustomTipPercent('');
    setNumberOfPeople('');
  }

  return (
    <>
      <GlobalStyles />

      <Logo src='../images/logo.svg' />

      <Container>
        <Section>
          <div>
            <Label htmlFor='bill'>Bill</Label>

            <Input
              type='number'
              placeholder='0'
              id='bill'
              value={bill}
              onChange={handleSetBill}
            />
          </div>

          <div>
            <p>Select Tip %</p>

            <ButtonWrapper>
              <Button
                className='border bg-slate-400'
                value='5'
                onClick={handleTipChange}
              >
                5%
              </Button>

              <Button
                className='border bg-slate-400'
                value='10'
                onClick={handleTipChange}
              >
                10%
              </Button>
              <Button
                className='border bg-slate-400'
                value='15'
                onClick={handleTipChange}
              >
                15%
              </Button>
              <Button
                className='border bg-slate-400'
                value='25'
                onClick={handleTipChange}
              >
                25%
              </Button>
              <Button
                className='border bg-slate-400'
                value='50'
                onClick={handleTipChange}
              >
                50%
              </Button>

              <CustomInput
                type='number'
                placeholder='Custom'
                value={customTipPercent}
                onChange={handleCustomTipChange}
              />
            </ButtonWrapper>
          </div>

          <div>
            <Label htmlFor='people'>Number of People</Label>
            <span className={`${numberOfPeople === null ? 'block' : 'hidden'}`}>
              Can&apos;t be zero
            </span>

            <Input
              id='people'
              type='number'
              placeholder='0'
              className='border text-right'
              value={numberOfPeople}
              onChange={handleSetNumPeople}
            />
          </div>
        </Section>

        <ResultSection className='flex h-screen flex-col gap-10 bg-green-400'>
          <div>
            <div>
              <span>
                <h2>Tip Amount</h2>
                <h3>/ person</h3>
              </span>

              <span>
                {numberOfPeople > 0 ? tipAmountPerPerson.toFixed(2) : '0.00'}
              </span>
            </div>

            <div className='flex justify-between'>
              <span>
                <h2>Total</h2>
                <h3>/ person</h3>
              </span>

              <span>
                {bill > 0 && numberOfPeople > 0
                  ? totalPerPerson.toFixed(2)
                  : '0.00'}
              </span>
            </div>
          </div>

          <button
            className='w-full  border'
            onClick={handleReset}
            disabled={noPersonSelected}
          >
            RESET
          </button>
        </ResultSection>
      </Container>
    </>
  );
}

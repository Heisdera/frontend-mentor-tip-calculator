import { useBillSplitter } from './context/useBillSplitter';

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
import AmountSpan from './ui/AmountSpan';
import AmountDiv from './ui/AmountDiv';
import RelativeDiv from './ui/RelativeDiv';
import AbsoluteIcon from './ui/AbsoluteIcon';
import Error from './ui/Error';
import FlexRowDiv from './ui/FlexRowDiv';
import FlexColDiv from './ui/FlexColDiv';
import ResetButton from './ui/ResetButton';
import PersonSpan from './ui/PersonSpan';

export default function App() {
  const {
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
  } = useBillSplitter();
  return (
    <>
      <GlobalStyles />

      <Logo src='../images/logo.svg' />

      <Container>
        <Section>
          <RelativeDiv>
            <Label htmlFor='bill'>Bill</Label>

            <Input
              type='number'
              placeholder='0'
              id='bill'
              value={bill === null ? '' : bill}
              onChange={handleSetBill}
            />

            <AbsoluteIcon src='../images/icon-dollar.svg' alt='dollar-icon' />
          </RelativeDiv>

          <div>
            <p>Select Tip %</p>

            <ButtonWrapper>
              <Button
                className={`${tipPercentage === 0.05 && 'selected'}`}
                value='5'
                onClick={handleTipChange}
              >
                5%
              </Button>

              <Button
                className={`${tipPercentage === 0.1 && 'selected'}`}
                value='10'
                onClick={handleTipChange}
              >
                10%
              </Button>

              <Button
                className={`${tipPercentage === 0.15 && 'selected'}`}
                value='15'
                onClick={handleTipChange}
              >
                15%
              </Button>

              <Button
                className={`${tipPercentage === 0.25 && 'selected'}`}
                value='25'
                onClick={handleTipChange}
              >
                25%
              </Button>

              <Button
                className={`${tipPercentage === 0.5 && 'selected'}`}
                value='50'
                onClick={handleTipChange}
              >
                50%
              </Button>

              <CustomInput
                type='number'
                placeholder='Custom'
                value={customTipPercent === null ? '' : customTipPercent}
                onChange={handleCustomTipChange}
              />
            </ButtonWrapper>
          </div>

          <RelativeDiv>
            <div>
              <FlexRowDiv>
                <Label htmlFor='people'>Number of People</Label>

                <Error className={`${numberOfPeople === null ? '' : 'hide'}`}>
                  Can&apos;t be zero
                </Error>
              </FlexRowDiv>

              <Input
                id='people'
                type='number'
                placeholder='0'
                className={`${numberOfPeople === null && 'error'}`}
                value={numberOfPeople === null ? '' : numberOfPeople}
                onChange={handleSetNumPeople}
              />
            </div>

            <AbsoluteIcon src='../images/icon-person.svg' alt='dollar-icon' />
          </RelativeDiv>
        </Section>

        <ResultSection>
          <FlexColDiv>
            <AmountDiv>
              <p>
                Tip Amount <br />
                <PersonSpan>/ person</PersonSpan>
              </p>

              <AmountSpan>
                ${numberOfPeople > 0 ? tipAmountPerPerson.toFixed(2) : '0.00'}
              </AmountSpan>
            </AmountDiv>

            <AmountDiv>
              <p>
                Total <br />
                <PersonSpan>/ person</PersonSpan>
              </p>

              <AmountSpan>
                $
                {bill > 0 && numberOfPeople > 0
                  ? totalPerPerson.toFixed(2)
                  : '0.00'}
              </AmountSpan>
            </AmountDiv>
          </FlexColDiv>

          <ResetButton onClick={handleReset} disabled={noPersonSelected}>
            RESET
          </ResetButton>
        </ResultSection>
      </Container>
    </>
  );
}

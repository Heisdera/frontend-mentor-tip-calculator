import { useContext } from 'react';
import { BillContext } from './BillContext';

function useBillSplitter() {
  const context = useContext(BillContext);

  if (context === undefined) {
    throw new Error('bill context was used outside the bill splitter provider');
  }

  return context;
}

export { useBillSplitter };

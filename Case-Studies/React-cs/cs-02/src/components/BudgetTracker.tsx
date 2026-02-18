import React, { useReducer, useState } from 'react';
import type { BudgetState,BudgetAction,Currency } from '../types/budgetTypes';

const reducer = (state: BudgetState,action: BudgetAction): BudgetState => {
  switch (action.type) {
    case 'addIncome':
      return {...state,balance: state.balance + action.payload.amount};

    case 'addExpense':
      if (state.balance - action.payload.amount < 0) {
        return state; // prevent negative balance
      }
      return {...state,balance: state.balance - action.payload.amount};

    case 'changeCurrency':
      return {...state,selectedCurrency: action.payload};

    default:
      return state;
  }
};

const BudgetTracker: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {balance: 0,selectedCurrency: 'USD'});
  const [amount, setAmount] = useState<string>('');

  return (
    <div>
      <h2>
        Balance: {state.balance} {state.selectedCurrency}
      </h2>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <select value={state.selectedCurrency} onChange={(e) =>dispatch(
          {type: 'changeCurrency',payload: e.target.value as Currency}
        )
      }
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <br></br> <br></br> 
      <button onClick={() => dispatch({
            type: 'addIncome',
            payload: {
              amount: Number(amount),
              currency: state.selectedCurrency
            }
          })
        }
      >
        Add Income
      </button>

      <button onClick={() => dispatch({
            type: 'addExpense',
            payload: {
              amount: Number(amount),
              currency: state.selectedCurrency
            }
          })
        }
      >
        Add Expense
      </button>
    </div>
  );
};

export default BudgetTracker;

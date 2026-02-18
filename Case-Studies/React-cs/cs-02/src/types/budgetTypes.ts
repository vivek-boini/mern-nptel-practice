export type Currency = 'USD' | 'EUR';

export interface IncomeEntry {
  amount: number;
  currency: Currency;
}

export interface ExpenseEntry {
  amount: number;
  currency: Currency;
}

export interface BudgetState {
  balance: number;
  selectedCurrency: Currency;
}

export type BudgetAction =
  | { type: 'addIncome'; payload: IncomeEntry }
  | { type: 'addExpense'; payload: ExpenseEntry }
  | { type: 'changeCurrency'; payload: Currency };

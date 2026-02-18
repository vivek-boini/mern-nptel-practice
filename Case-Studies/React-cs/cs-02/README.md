# React Case Study 02 – Secure Banking Dashboard

## Overview

This case study demonstrates how to build a secure and type-safe banking dashboard using **React with TypeScript (TSX)**.

---

## Objective

- Define strictly typed transaction models.
- Manage complex state using `useReducer`.
- Prevent negative balances using safe logic.
- Enforce type safety for props, state, and actions.

---

## Task

Build a BudgetTracker component that:

- Tracks income and expenses in different currencies.
- Shows net balance in a selected currency.
- Uses useReducer for state management.
- Implements type-safe props for currency conversion rates.

## Requirements:

- Define interfaces for IncomeEntry and ExpenseEntry.
- Create a reducer with addIncome and addExpense actions.
- Prevent negative balances through type-safe checks.

--- 

## Features

- Add Income
- Add Expense
- Prevent negative balance
- Change currency (USD / EUR)
- Strictly typed reducer actions

---

## Steps to Run

```
npm install
npm run dev
```

## Example Input:

```
Amount: 500
Currency: USD
Click: Add Income
```

## Output:
```
Balance: 500 USD
```
## React Case Study 01

This case study demonstrates the use of React with TypeScript (TSX) to build strictly typed components.

### Components

**PortfolioSummary (Functional Component)**
- Receives a typed array of assets (`Asset[]`)
- Displays total portfolio value
- Displays average percentage change

**AssetEditor (Class Component)**
- Uses typed state for name, symbol, value, and change
- Accepts a typed callback prop `onUpdate`
- Resets the form after submission

---

## Steps to Run

```
npm install
npm run dev
```

- Add assets using the form and observe changes in the portfolio summary.

## Example Input
```
Name: Apple
Symbol: AAPL
Value: 100
Change: 10
```

## Output

```
Total Value: 100
Average Percentage Change: 10
```
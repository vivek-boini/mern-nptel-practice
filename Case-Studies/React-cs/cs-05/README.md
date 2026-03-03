# React Case Study – Testing & Debugging (NewsFleet Dashboard)

## Overview

This project demonstrates testing and debugging in a React + TypeScript application using **Vitest** and **React Testing Library**.

The goal is to ensure components are reliable, maintainable, and safe for deployment.

---

## Component Tested

### CommentBox

The `CommentBox` component:

- Renders an input field and a **Post** button
- Calls the `onPost` callback when clicked
- Clears the input after posting
- Prevents posting empty input

---

## Testing Setup

- **Vitest** – Test runner
- **React Testing Library** – Component testing
- **jsdom** – Browser-like test environment
- **TypeScript** – Type-safe tests
- **ESLint** – Code quality enforcement

---

## Test Cases Covered

1. Renders input and Post button
2. Calls `onPost` with input value
3. Clears input after posting
4. Does not call `onPost` for empty input

---

## Running Tests

Run in watch mode:

```
npm run test
```

Run once with coverage:

```
npx vitest --coverage
```

## Coverage Report

- Statements: 100%
- Branches: 100%
- Functions: 100%
- Lines: 100%
# React Case Study – Zustand State Management

## Overview

This project demonstrates global state management in React using **Zustand with TypeScript**.

A notification system is implemented where users can:
- Add notifications
- Mark notifications as read
- Clear all notifications

---

## Features

- Type-safe Zustand store
- Notification model with:
  - id
  - message
  - type (`info | error | success`)
  - read status
- Selective state subscription (no unnecessary re-renders)
- Immutable state updates

---

## Store Actions

- `addNotification(message, type)`
- `markAsRead(id)`
- `clearNotifications()`

---

## How It Works

1. Enter a message and click **Add**
2. Notification appears in the list
3. Click **Mark as Read** to remove from unread list
4. Click **Clear All** to remove all notifications

---

## Steps to Run
```
npm install
npm run dev
```
# MVC Library System (Express)

## Description

This project demonstrates the **MVC pattern with Repository and Service layers** in Express to manage a library system.

The system allows users to borrow and return books while keeping business logic separate from storage and request handling.

## Run the Project

Install dependencies

npm install

Start server

npm run dev

Server runs at
http://localhost:3000

## Test APIs

Borrow a book
POST /books/1/borrow

Return a book
POST /books/1/return

The API returns JSON responses showing the updated book status.

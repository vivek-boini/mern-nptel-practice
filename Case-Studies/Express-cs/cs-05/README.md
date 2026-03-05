# Routing Controllers – Express Case Study

## Description

This project demonstrates how to organize an Express application using **controllers and routing**.
Orders are managed through an **OrderController**, and baking operations are handled by a **BakingController**.

## How It Works

* Customers create orders using `/orders`.
* Baking for an order can be started using `/baking/start/:id`.
* The baking status of an order can be checked using `/baking/status/:id`.

## Running the Project

Install dependencies
`npm install`

Start the server
`npm run dev`

Server runs at
`http://localhost:3000`

## Testing Endpoints

Get all orders
`GET /orders`

Create order
`POST /orders`

Start baking
`POST /baking/start/1`

Check baking status
`GET /baking/status/1`

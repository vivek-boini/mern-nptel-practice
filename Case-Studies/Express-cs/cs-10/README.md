# Dependency Injection – Express Case Study

## Description

This project demonstrates **Dependency Injection and Inversion of Control using TypeDI** in an Express appointment booking system.

Services like notifications and billing are injected into the appointment service, allowing implementations to be swapped easily.

## Folder Structure

appointments → appointment business logic
notifications → notification services
billing → payment services

## Run the Project

Install dependencies
npm install

Start server
npm run dev

Server runs at
http://localhost:3000

## Testing

Send POST request to `/appointments` with patient, time, and amount.
The system processes billing and sends a notification using injected services.

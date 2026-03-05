# Request Validation – Express Case Study

## Description

This project demonstrates **request validation in Express using express-validator** for a university admissions system.

## How It Works

Students submit applications through `/apply`.
Validation middleware checks required fields like name, email, birthdate, grades, essay, and recommendation letter before processing the request.

## Run the Project

Install dependencies
npm install

Start server
npm run dev

Server runs at
http://localhost:3000

## Testing

Send POST request to `/apply` with required fields.
If validation passes, the API returns **Application received**.
If fields are missing or invalid, validation errors are returned.

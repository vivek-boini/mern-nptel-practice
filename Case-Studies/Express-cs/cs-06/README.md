# Express Middleware Case Study

## Description

This project demonstrates the use of **middleware in Express** to process a hospital discharge workflow.
Each middleware acts as a checkpoint such as doctor approval, pharmacy review, follow-up scheduling, and insurance approval.

## How It Works

A POST request to `/discharge` passes through multiple middleware functions.
Each middleware validates a step before allowing the request to continue.

## Run the Project

Install dependencies
npm install

Start the server
npm run dev

Server runs at
http://localhost:3000

## Testing

Send a POST request to `/discharge` with:

{
"patientName": "John",
"doctorSigned": true,
"pharmacyChecked": true,
"followupScheduled": true,
"insuranceApproved": true
}

If all checks pass, the API returns **Discharge complete** with the workflow log.

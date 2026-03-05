# Repository Pattern – Express Case Study

## Description

This project demonstrates the **Repository Pattern** in Express for a university course registration system.

The repository layer handles data storage, while the service layer manages business rules such as course capacity and enrollment.

## Run the Project

Install dependencies
npm install

Start server
npm run dev

Server runs at
http://localhost:3000

## Testing APIs

Enroll student
POST /courses/:id/enroll

Get student courses
GET /students/:id/courses

Delete course
DELETE /courses/:id

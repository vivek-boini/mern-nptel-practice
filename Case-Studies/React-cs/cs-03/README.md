# React Case Study – Type-Safe Routing

## Overview

This project demonstrates dynamic routing in React using **React Router + TypeScript**.

The application uses type-safe route parameters to display doctor and patient details.

---

## Main Features

- Dynamic route:
```
/doctors/:doctorId/patients/:patientId
```

## Example Usage

From Doctors List page:
```
View Patient 101 for Doctor 1
```

This navigates to:
```
/doctors/1/patients/101
```

## Output
```
Patient : 101
Doctor : 1
```

## Steps to Run
```
npm install
npm run dev
```
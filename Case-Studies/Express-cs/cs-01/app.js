const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Greenfield Community Center");
});

// Events route
app.get("/events", (req, res) => {
  const events = [
    "Yoga Class - Monday 7pm",
    "Gardening Workshop - Wednesday 5pm",
    "Book Club - Friday 6pm"
  ];

  res.json(events);
});

// Contact route that returns email and phone
app.get("/contact", (req, res) => {
  const contactInfo = {
    email: "vivek@gmail.com",
    phone: "123456789"
  };

  res.json(contactInfo);
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
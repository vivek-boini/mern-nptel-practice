const express = require("express");
const app = express();

const port = 3000;

// Import routes
const eventsRouter = require("./routes/events");
const contactRouter = require("./routes/contact");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Greenfield Community Center");
});

app.use("/events", eventsRouter);
app.use("/contact", contactRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
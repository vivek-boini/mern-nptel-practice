const express = require("express");
const router = express.Router();

// Events route
router.get("/", (req, res) => {
  res.json([
    "Yoga Class - Monday 7pm",
    "Gardening Workshop - Wednesday 5pm",
    "Book Club - Friday 6pm"
  ]);
});

module.exports = router;
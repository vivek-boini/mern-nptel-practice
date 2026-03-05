const express = require("express");
const router = express.Router();

// Contact route
router.get("/", (req, res) => {
  res.json({
    email: "vivek@gmail.com",
    phone: "123456789"
  });
});

module.exports = router;
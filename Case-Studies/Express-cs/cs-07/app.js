const express = require("express")
const { body, validationResult } = require("express-validator")

const app = express()
app.use(express.json())

// Validation Rules
const applicationValidation = [

  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("birthdate")
    .isISO8601()
    .withMessage("Birthdate must be a valid date (YYYY-MM-DD)"),

  body("grades")
    .isArray({ min: 1 })
    .withMessage("At least one grade is required"),

  body("grades.*")
    .isNumeric()
    .withMessage("All grades must be numbers"),

  body("essay")
    .isLength({ min: 100 })
    .withMessage("Essay must be at least 100 characters"),

  body("recommendationLetter")
    .isURL()
    .withMessage("Recommendation letter must be a valid URL"),

  // Challenge validation
  body("portfolioLink")
    .optional()
    .isURL()
    .withMessage("A valid portfolio link is required for art applicants")
]

// Route
app.post("/apply", applicationValidation, (req, res) => {

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }

  res.json({
    status: "Application received!",
    student: req.body.name
  })
})

app.listen(3000, () => {
  console.log("Admissions system running on http://localhost:3000")
})
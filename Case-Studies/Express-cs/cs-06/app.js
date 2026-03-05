const express = require("express")
const app = express()

app.use(express.json())

// Middleware 1: Log discharge request
function logDischargeRequest(req, res, next) {
  req.dischargeLog = []
  req.dischargeLog.push({
    step: "requestReceived",
    time: new Date().toISOString()
  })
  next()
}

// Middleware 2: Doctor sign-off check
function doctorSignoffCheck(req, res, next) {
  if (!req.body.doctorSigned) {
    return res.status(400).json({ error: "Doctor sign-off required." })
  }

  req.dischargeLog.push({
    step: "doctorSignoff",
    time: new Date().toISOString()
  })

  next()
}

// Middleware 3: Pharmacy review
function pharmacyReview(req, res, next) {
  if (!req.body.pharmacyChecked) {
    return res.status(400).json({ error: "Pharmacy review required." })
  }

  req.dischargeLog.push({
    step: "pharmacyReview",
    time: new Date().toISOString()
  })

  next()
}

// Middleware 4: Follow-up check
function followupCheck(req, res, next) {
  if (!req.body.followupScheduled) {
    return res.status(400).json({ error: "Follow-up appointment required." })
  }

  req.dischargeLog.push({
    step: "followupCheck",
    time: new Date().toISOString()
  })

  next()
}

// Middleware: Insurance approval check
function insuranceCheck(req, res, next) {
  if (!req.body.insuranceApproved) {
    return res.status(403).json({ error: "Insurance approval required." })
  }

  req.dischargeLog.push({
    step: "insuranceApproved",
    time: new Date().toISOString()
  })

  next()
}

// Discharge Route with middleware chain
app.post(
  "/discharge",
  logDischargeRequest,
  doctorSignoffCheck,
  pharmacyReview,
  followupCheck,
  insuranceCheck,
  (req, res) => {

    req.dischargeLog.push({
      step: "dischargeComplete",
      time: new Date().toISOString()
    })

    res.json({
      status: "Discharge complete",
      patient: req.body.patientName,
      log: req.dischargeLog
    })
  }
)

app.listen(3000, () => {
  console.log("Hospital system running on http://localhost:3000")
})
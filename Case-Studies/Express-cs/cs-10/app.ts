import "reflect-metadata"
import express, { Request, Response } from "express"
import { Container } from "typedi"
import { AppointmentService } from "./src/appointments/AppointmentService"

const app = express()

app.use(express.json())

const appointmentService = Container.get(AppointmentService)

app.post("/appointments", async (req: Request, res: Response) => {

  try {

    const { patient, time, amount } = req.body

    const result = await appointmentService.bookAppointment(
      patient,
      time,
      amount
    )

    res.json(result)

  } catch (error: any) {

    res.status(400).json({ error: error.message })

  }

})

app.listen(3000, () => {
  console.log("Clinic system running on http://localhost:3000")
})
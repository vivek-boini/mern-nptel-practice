import express, { Request, Response, NextFunction } from "express"
import { z } from "zod"

const app = express()
app.use(express.json())

// Types

interface ApiResponse<T = any> {
  status: "success" | "error"
  data?: T
  error?: string
}

// Transfer request type
interface TransferRequest {
  fromCustomerId: string
  toCustomerId: string
  points: number
}

// Sample Data
let members = [
  { customerId: "550e8400-e29b-41d4-a716-446655440000", points: 500 },
  { customerId: "6ba7b810-9dad-11d1-80b4-00c04fd430c8", points: 300 }
]

// Validation Schema
const TransferSchema = z.object({
  fromCustomerId: z.string().uuid(),
  toCustomerId: z.string().uuid(),
  points: z.number().int().positive()
})

// Custom Error
class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message)
  }
}

// Transfer Endpoint
app.post(
  "/transfer",
  (req: Request<{}, {}, TransferRequest>, res: Response<ApiResponse>) => {

    // Validate request body
    const result = TransferSchema.safeParse(req.body)

    if (!result.success) {
      return res.status(400).json({
        status: "error",
        error: result.error.issues[0].message
      })
    }

    const { fromCustomerId, toCustomerId, points } = result.data

    const sender = members.find(m => m.customerId === fromCustomerId)
    const receiver = members.find(m => m.customerId === toCustomerId)

    if (!sender) {
      throw new ApiError(404, "Sender not found")
    }

    if (!receiver) {
      throw new ApiError(404, "Receiver not found")
    }

    if (sender.points < points) {
      throw new ApiError(400, "Insufficient points")
    }

    // Transfer points
    sender.points -= points
    receiver.points += points

    res.json({
      status: "success",
      data: {
        fromCustomerId,
        toCustomerId,
        transferredPoints: points,
        remainingPoints: sender.points
      }
    })
  }
)

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      status: "error",
      error: err.message
    })
  }

  console.error(err)

  res.status(500).json({
    status: "error",
    error: "Internal server error"
  })
})

app.listen(3000, () => {
  console.log("API running on http://localhost:3000")
})
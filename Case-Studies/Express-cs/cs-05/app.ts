import "reflect-metadata"
import { createExpressServer } from "routing-controllers"
import { OrderController } from "./OrderController"
import { BakingController } from "./BakingController"

const app = createExpressServer({
  controllers: [OrderController, BakingController]
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})
import { JsonController, Post, Get, Param } from "routing-controllers"
import { orders } from "./OrderController"

let bakingStatus: any = {}

@JsonController("/baking")
export class BakingController {

  @Post("/start/:id")
  startBaking(@Param("id") id: string) {

    const order = orders.find(o => o.id === id)

    if (!order) {
      return { status: "error", error: "Order not found" }
    }

    bakingStatus[id] = "Baking started"

    return {
      status: "success",
      message: "Baking started",
      orderId: id
    }
  }

  @Get("/status/:id")
  getStatus(@Param("id") id: string) {

    if (!bakingStatus[id]) {
      return { status: "error", error: "Baking not started" }
    }

    return {
      status: "success",
      orderId: id,
      bakingStatus: bakingStatus[id]
    }
  }
}
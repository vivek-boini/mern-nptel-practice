// primitive Alias
type CustomerID = string;

// object Alias
type Customer={
    id: CustomerID,
    name: string,
    email?: string
}

// order status union type
type OrderStatus = "pending" | "shipped" | "returned";

// Function type Alias
type ProcessOrder = (
    orderId: number,
    callback: (status: OrderStatus) => void
)=>void;

// Generic type
type Container<T> = {
    value: T,
    timestamp: Date
};

// customer object
let customer1: Customer={
    id: "C1",
    name:"Sai",
}

// Wrap Customer in Container<T>
let customerContainer: Container<Customer> = {
  value: customer1,
  timestamp: new Date()
};
console.log("Customer Details: ")
console.log(customerContainer);

//function implementation
const processOrder:ProcessOrder = (orderId, callback) =>{
    console.log("Order Details: ")
    console.log(`processing Order: ${orderId}`);
    callback("pending");
}

// callback function
const statusUpdate=(status: OrderStatus): void =>{
    console.log(`Current Status: ${status}`)
}

processOrder(101,statusUpdate);

/*
Output: 

Customer Details: 
{
  value: { id: 'C1', name: 'Sai' },
  timestamp: 2026-01-27T15:07:51.274Z
}
Order Details:
processing Order: 101
Current Status: pending
*/
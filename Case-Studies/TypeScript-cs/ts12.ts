// Simple Declaration & Optional Parameter
function displayMember(id: number, name: string, email?: string): void {
  console.log(`\nID: ${id}, Name: ${name}`);
  if (email) console.log(`Email: ${email}`);
}

displayMember(101,"vivek","vivek@abc.com");
displayMember(102,"sai");

// Rest Parameters for Fines Tally
function calculateFines(...fines: number[]): number {
  let total = 0;
  for (let fine of fines) total += fine;
  return total;
}

console.log("\nTotal Fine:",calculateFines(5, 10, 2.5));

// Default Parameter for Discount
function membershipFee(price: number, discountRate: number = 0.1): number {
  return price - price * discountRate;
}

console.log("\nmembership Fee with default discount:",membershipFee(100));
console.log("membership Fee with 20% discount:",membershipFee(100,0.2));

// Anonymous Function & Callback
function greetVisitor(visitor: string, formatter: (name: string) => void): void {
  formatter(visitor);
}
const vipGreet = (name: string) => console.log(`Welcome VIP ${name}!`);

// Function Type & Alias
type VisitorFormatter = (name: string) => void;
let consoleGreet: VisitorFormatter = (n) => console.log(`\nHello, ${n}!`);

greetVisitor("Alice",consoleGreet);
greetVisitor("Bob",vipGreet);


// Recursion: Factorial 
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(`\nFactorial of 5 is ${factorial(5)}`);

/*
Output:

ID: 101, Name: vivek
Email: vivek@abc.com

ID: 102, Name: sai

Total Fine: 17.5

membership Fee with default discount: 90
membership Fee with 20% discount: 80

Hello, Alice!
Welcome VIP Bob!

Factorial of 5 is 120
*/

type Transaction = {
  id: number;
  type: "checkout" | "return" | "cancelled" | "priority";
};

const transactions: Transaction[] = [
  { id: 1, type: "checkout"},
  { id: 2, type: "cancelled"},
  { id: 3, type: "return" },
  { id: 4, type: "priority" },
  { id: 5, type: "checkout" }
];

//1
//counter object
const transactionCounts:{ [type:string] :number}={}

for(let i=0;i<transactions.length;i++){
    const tx = transactions[i];
    if(tx?.type){
        //if not exist use 0 or use previous value
        transactionCounts[tx.type]=(transactionCounts[tx.type]??0)+1;
    }
}

console.log("\nTransaction counts:",transactionCounts);

// 2
console.log("\nInfinite loop untill priority transaction arrive")
let i=0;
while(true){
    let tx=transactions[i];

    if(tx?.type==="priority"){
        console.log("New Priority transaction arrived, loop stopped")
        break;
    }
    console.log(`Processing transaction ${tx?.id}: ${tx?.type}`);
    i++;
}

//3
let returnQueue: Transaction[] = [];
let idx=0;

do{
    let tx=transactions[idx];
    if(tx?.type==="return"){
        returnQueue.push(tx);
    }
    idx++;
}while(idx<transactions.length);

console.log("\nReturn Queue:",returnQueue);

//4
const inventory: { [title: string]: number } = {
  "The Hobbit": 3,
  "1984": 5,
  "TypeScript Guide": 2
};

for(let key in inventory){
    inventory[key]=0;
}
console.log("\nInventory after reset:",inventory);

//5
const visitors: string[] = ["Alice", "Bob", "Carol"];

console.log("\nVisitors:")
for(let i=visitors.length-1; i>=0;i--){
    console.log(visitors[i]);
}

/*
Output:

Transaction counts: { checkout: 2, cancelled: 1, return: 1, priority: 1 }

Infinite loop untill priority transaction arrive
Processing transaction 1: checkout
Processing transaction 2: cancelled
Processing transaction 3: return
New Priority transaction arrived, loop stopped

Return Queue: [ { id: 3, type: 'return' } ]

Inventory after reset: { '1984': 0, 'The Hobbit': 0, 'TypeScript Guide': 0 }

Visitors:
Carol
Bob
Alice
*/
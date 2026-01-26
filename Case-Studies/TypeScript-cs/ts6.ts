function negativeAmountError():never{
    throw new Error("Ammount cannot be negative")
}

function processTransaction(amount:number,isCredit:boolean,description?:string):void{
    if(amount<0){
        negativeAmountError();
    }
    console.log("\nTransaction Summary:");
    console.log("Amount:",amount);

    if(description===undefined){
        console.log("No description");
    }else{
        console.log("Description:",description);
    }

    if(isCredit){
        console.log("Credit");
    }else{
        console.log("Debit");
    }
}

//processTransaction(-20,true,"Lunch");
//output: Error: Ammount cannot be negative

processTransaction(50,false);
/*
Output: 
Transaction Summary:
Amount: 50
No description
Debit
*/

processTransaction(20,true,"Shopping");
/*
Output:
Transaction Summary:
Amount: 20
Description: Shoping
Credit
*/
// Interface for all payment gateways
interface PaymentGateway{
    processPayment(amount:number): Promise<boolean>;
}

class BankTransferGateway implements PaymentGateway{
    async processPayment(amount: number): Promise<boolean> {
        console.log("Processing Payment...");
        return true;
    }
}

class PaymentProcessor{
    constructor(private gateway:PaymentGateway){}
    
    async pay(amount:number):Promise<void>{
        const success = await this.gateway.processPayment(amount);
        if(success){
            console.log(`Payment of ${amount} is successful!`);
        }else{
            console.log("Payment failed.");
        }
    }
}

class MockGateway implements PaymentGateway{
    async processPayment(amount: number): Promise<boolean> {
        // simulate failure condition
        if(amount>100){
            return false;
        }
        return true;
    }
}

// function for ordered output
async function main() {
    console.log("Simulating bank transfer:")
    const bankTransferGateway=new BankTransferGateway();
    const processor1=new PaymentProcessor(bankTransferGateway);
    await processor1.pay(1000);

    const mockGateway=new MockGateway();
    const processor2=new PaymentProcessor(mockGateway);
    console.log("\nSimulating mock gateway for failure testing");
    await processor2.pay(500);
}

main()

/*
Output:

Simulating bank transfer:
Processing Payment...
Payment of 1000 is successful!

Simulating mock gateway for failure testing
Payment failed.

*/
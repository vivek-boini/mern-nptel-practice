// PromotionSystem observer
interface PromotionSystem { update(msg: string):void};

class Customer implements PromotionSystem{
    update(msg: string): void {
        console.log(`Customer: ${msg}`);
    }
}

class DrinkOrder{
    private promotionObservers:PromotionSystem[]=[];
    addObserver(obs:PromotionSystem) {
        this.promotionObservers.push(obs);
    }
    notifyCustomer(msg:string){
        this.promotionObservers.forEach(obs=>obs.update(msg));
    }
    //announces special offers to customers
    completeOrder(){
        this.notifyCustomer("promotion: Special offer is here!");
    }
}

const order=new DrinkOrder();
order.addObserver(new Customer());
order.completeOrder();

/*
Output:
Customer: promotion: Special offer is here!
*/
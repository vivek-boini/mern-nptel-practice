let favFruit:String="Mango";
console.log(`My favorite fruit is: ${favFruit}`);

function printDouble(num: number):void{
    let double:number=num*2;
    console.log(`Double of ${num} is ${double}`);
}
printDouble(3);

//single line comment

/*multi
line
comment
*/

class Person{
    sayHello():void{
        console.log("Person says hello")
    }
}
const p1=new Person();
p1.sayHello();
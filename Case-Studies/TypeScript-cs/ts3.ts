var city: string="Hyderabad";
var temperature: number=23;
var isRaining=false;  // inferred as boolean

function weatherReport(city:string, temperature:number, isRaining:boolean):void{
    console.log(`In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`);
}

weatherReport(city,temperature,isRaining);

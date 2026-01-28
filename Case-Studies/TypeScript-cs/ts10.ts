function checkSign(num: number):void{
    if(num>0){
        console.log(`Given number ${num} is positive`);
    }
}
checkSign(10);

function evenOrOdd(num: number):void{
    if(num % 2===0){
        console.log(`Given number ${num} is Even`);
    }else{
        console.log(`Given number ${num} is Odd`);
    }
}
evenOrOdd(4);
evenOrOdd(9);

function getGrade(score: number):string{
    if(score>=90){
        return "A";
    }else if(score>=80){
        return "B";
    }else if(score>=70){
        return "C";
    }else if(score>=60){
        return "D";
    }else{
        return "F";
    }
}
console.log(`Grade: ${getGrade(83)}`);

function provideFeedback(grade: string): void{
    switch (grade) {
        case "A":
            console.log("Feedback: Excellent performance!");
            break;
        case "B":
            console.log("Feedback: Great job! Keep it up.");
            break;
        case "C":
            console.log("Feedback: Good effort; aim higher next time.");
            break;
        case "D":
            console.log("Feedback: Needs improvement; review your work.");
            break;
        default:
            console.log("Feedback: Unsatisfactory; please seek help.");
  }
}
provideFeedback(getGrade(56));

/*
Given number 10 is positive
Given number 4 is Even
Given number 9 is Odd
Grade: B
Feedback: Unsatisfactory; please seek help.
*/
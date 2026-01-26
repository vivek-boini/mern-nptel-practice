//object type
type Answer={
    QID:string,
    Ans:any
}

//Array of objects
let allAnswers:Answer[]=[]

function recordAnswer(QuestionId:string,answer:any):void{
    //storing in object
    let ansRecord: Answer={
        QID:QuestionId,
        Ans:answer
    }

    //pushing the object into the Array
    allAnswers.push(ansRecord);
}

recordAnswer("Q101","Refer FAQ");
recordAnswer("Q102",100);
recordAnswer("Q103",["yes",25]);

console.log(allAnswers);

/*
Output:
[
  { QID: 'Q101', Ans: 'Refer FAQ' },
  { QID: 'Q102', Ans: 100 },
  { QID: 'Q103', Ans: [ 'yes', 25 ] }
]
*/
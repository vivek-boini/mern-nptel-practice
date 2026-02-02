// Generic class
class FeedbackBox<T>{
    private feedbacks: T[]=[];

    addFeedback(feedback: T){
        this.feedbacks.push(feedback);
    }

    getAllFeedback(): T[]{
        return [...this.feedbacks];
    }
}

// Generic Function
function getFirstItem<T>(items: T[]): T | undefined{
    return items[0];
}

const box=new FeedbackBox<string>();
box.addFeedback("Great");
box.addFeedback("Nice");
console.log(box.getAllFeedback());

console.log(getFirstItem(box.getAllFeedback()));

/*
Output:
[ 'Great', 'Nice' ]
Great
*/
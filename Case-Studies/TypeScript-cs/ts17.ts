abstract class Content{
    public readonly title:string;
    public readonly author:string;
    private published: boolean = false;

    constructor(title: string, author: string){
        this.title=title;
        this.author=author;
    }

    public publish(){
        this.published=true;
    }

    protected isPublished():boolean{
        return this.published;
    }

    abstract getType():string;
}

class Assignment extends Content{
    private dueDate!: Date; // Definite assignment assertion: value will be set later via method
    constructor(title: string, author: string){
        super(title,author);
    }
    public setOrUpdateDueDate(dueDate: Date, isInstructor: boolean){
        // Allows only instructors to set or update the due date before publishing
        if(isInstructor && !this.isPublished()){
            this.dueDate=dueDate;
        }else{
            throw new Error("Cannot set due date if not instructor or after publishing");
        }
    }
    public getDueDate(): Date {
        return this.dueDate;
    }
    public getType(): string {
        return "Assignment";
    }
}

const assignment1=new Assignment("Week 1","Rohith");
assignment1.setOrUpdateDueDate(new Date("2026-03-24"),true);
console.log("Due date:",assignment1.getDueDate());
console.log("Type:",assignment1.getType());

/*
Output:
Due date: 2026-03-24T00:00:00.000Z
Type: Assignment
*/
// create a class student accept rollno name and three sub marks calculate total marks and per and display
class student
{
    rollno:number;
    name:string;
    maths:number;
    history:number;
    biology:number;
    total:number;
    Percentage:number;

    constructor(rollno,name,maths,history,biology)
    {
        this.rollno=rollno;this.calculate
        this.name=name;
        this.maths=maths;
        this.history=history;
        this.biology=biology;    
    }
    calculate()
    {
        this.total=this.maths+this.history+this.biology;
        this.Percentage=this.total/300*100;
    }
    print()
    {
        console.log(this.total+"  "+this.Percentage);
    }
}
const b=new student(11,"Rohit",59,65,45);
b.calculate();
b.print();
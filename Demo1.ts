//let message="Hello Angular";
//console.log(message);
//var emp={id:1,name:"Angular"};
//console.log(emp);

// class Date1
// {
//     day:Number;
//     month:String;
//     year:Number;

//     constructor(day,month,year)
//     {
//         this.day=day;
//         this.month=month;
//         this.year=year;
//     }

//     print()
//     {
//         console.log(this.day+"/"+this.month+"/"+this.year);
//     }
    
// }
// const d=new Date1(23,"Nov",2023);
//     d.print();

// interface IData
// {
//     a:number;
//     b:number;
// }
// class Test
// {
//     print(value:IData)
//     {
//         console.log(value.a+" "+value.b);
//     }
// }
// const IData={a:10,b:20}
// const t1=new Test();
// t1.print(IData);

interface IStudnet
{
    rollno:Number;
    name:string;
}
class Student
{
    rollno:Number;
    name:string;
    constructor(rollno,name){
        this.rollno=rollno;
        this.name=name;
    }
}
const s:IStudnet=new Student(1,"Angular");
console.log("Rollno:"+s.rollno+"name:"+s.name);
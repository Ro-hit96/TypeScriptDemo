// Create a class emp IdleDeadline,name,basic sal in constructor calculate gross sal calculate 
// all allowances in a calculate method and print
class employee
{
    id : number;
    name : string;
    salary : number;
    hra : number;
    ta : number;
    da : number;
    pf : number;
    grosssal:number;

    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary
    }
    calculate()
    {
        this.hra=this.salary*0.40;
        this.da=this.salary*0.20;
        this.ta=this.salary*0.10;
        this.pf=this.salary*0.12;

        this.grosssal=this.salary+this.hra+this.da+this.ta-this.pf;
    }
    print()
    {
        console.log(this.grosssal);
    }
}
const a = new employee(11,"Rohit",40000);
a.calculate();
a.print(); 

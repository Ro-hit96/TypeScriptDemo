// Create a class emp IdleDeadline,name,basic sal in constructor calculate gross sal calculate 
// all allowances in a calculate method and print
var employee = /** @class */ (function () {
    function employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    employee.prototype.calculate = function () {
        this.hra = this.salary * 0.40;
        this.da = this.salary * 0.20;
        this.ta = this.salary * 0.10;
        this.pf = this.salary * 0.12;
        this.grosssal = this.salary + this.hra + this.da + this.ta - this.pf;
    };
    employee.prototype.print = function () {
        console.log(this.grosssal);
    };
    return employee;
}());
var a = new employee(11, "Rohit", 40000);
a.calculate();
a.print();

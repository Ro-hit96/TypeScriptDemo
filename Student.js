// create a class student accept rollno name and three sub marks calculate total marks and per and display
var student = /** @class */ (function () {
    function student(rollno, name, maths, history, biology) {
        this.rollno = rollno;
        this.calculate;
        this.name = name;
        this.maths = maths;
        this.history = history;
        this.biology = biology;
    }
    student.prototype.calculate = function () {
        this.total = this.maths + this.history + this.biology;
        this.Percentage = this.total / 300 * 100;
    };
    student.prototype.print = function () {
        console.log(this.total + "/" + this.Percentage);
    };
    return student;
}());
var b = new student(11, "Rohit", 59, 65, 45);
b.calculate();
b.print();

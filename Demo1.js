//let message="Hello Angular";
//console.log(message);
//var emp={id:1,name:"Angular"};
//console.log(emp);
var Student = /** @class */ (function () {
    function Student(rollno, name) {
        this.rolllno = rollno;
        this.name = name;
    }
    return Student;
}());
var s = new Student(1, "Angular");
console.log("Rollno:" + s.rollno + "name:" + s.name);

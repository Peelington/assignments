var employees = []

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeesRecords = function() {
        console.log("name :", name)
        console.log("job tile :", jobTitle)
        console.log("salary :", salary)
        console.log("status :", status)
    }
}
 
var john = new Employee ("john", "mechanic", "$24/hour", "Part Time")
var shawna = new Employee ("shawna", "accounant", "$45/hour", "Full Time")
var rudy = new Employee ("Rudy", "Owner", "$150k/Year","Full Time")

employees.push(john, shawna, rudy)

john.status = "full time"

console.log(john)


//john.printEmployeesRecords()
//shawna.printEmployeesRecords()
//rudy.printEmployeesRecords()

//class Employees {
//   constructor (name, jobTitle, salary, status){ 
//    this.name = name;
//    this.jobTitle = jobTitle;
//    this.salary = salary;
//    this.fullTime
//    }
//    printEmployeesRecords() {
//        console.log("name :", name)
//        console.log("job tile :", jobTitle)
//        console.log("salary :", salary)
//        console.log("status :", status)
//    }
//}


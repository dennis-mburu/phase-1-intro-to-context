// Your code here
let dataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
  ]


let thor = ["Thor", "Odinsson", "Electrical Engineer", 45];



function createEmployeeRecord (detailsArray){
    let employee ={};
    employee.firstName = detailsArray[0];
    employee.familyName = detailsArray[1];
    employee.title = detailsArray[2];
    employee.payPerHour = detailsArray[3];
    employee.timeInEvents = [];
    employee.timeOutEvents = [];
    return employee
}


function createEmployeeRecords(arrayOfArrays){
    let employeeRecords = [];
    if (arrayOfArrays.length === 2){
        for (let i = 0; i<2; i++){
            let employeeObj = createEmployeeRecord(arrayOfArrays[i])
            employeeRecords.push(employeeObj)
        }
        return employeeRecords
    }
    // else{
    //     for (let elem of arrayOfArrays){
    //         let employeeObj = createEmployeeRecord(elem)
    //         employeeRecords.push(employeeObj)        
    //     }
    //     return employeeRecords
    // }

    else{
        employeeRecords = arrayOfArrays.map(elem => createEmployeeRecord(elem))
    }
    return employeeRecords

}

function createTimeInEvent(empOb, dateStamp){
    // let empOb = createEmployeeRecord(empDetails)
    let splitDate = dateStamp.split(" ");
    let date = splitDate[0];
    let hour = splitDate[1];
    let timeInObj = {};
    timeInObj.type = "TimeIn"
    timeInObj.date = date;
    timeInObj.hour = parseInt(hour);
    empOb.timeInEvents.push(timeInObj)
    return empOb

}



function createTimeOutEvent(empObj, dateStamp){
    let splitDate = dateStamp.split(" ");
    let date = splitDate[0];
    let hour = splitDate[1];
    let timeOutObj = {};
    timeOutObj.type = "TimeOut"
    timeOutObj.date = date;
    timeOutObj.hour = parseInt(hour);
    empObj.timeOutEvents.push(timeOutObj)
    return empObj
}

function hoursWorkedOnDate(empObj, date){
    let timeInObj = createTimeInEvent(empObj, date);
    let timeOutObj = createTimeOutEvent(empObj, date);
    let timeOutHrs = timeOutObj.timeOutEvents[0].hour;
    let timeInHrs = timeInObj.timeInEvents[0].hour;
    return (timeOutHrs -timeInHrs)/100
}

function wagesEarnedOnDate(empObj, date){
    let wagesPerHr = empObj.payPerHour;
    let hrs = hoursWorkedOnDate(empObj, date)
    return wagesPerHr * hrs
}

function allWagesFor (empObj){

}


function calculatePayroll (empArray){

}









// hoursWorkedOnDate(thor)
// console.log(createEmployeeRecords(dataEmployees))
let jcObj = createEmployeeRecord(["Julius", "Caesar", "General", 27])
console.log(jcObj)
console.log(hoursWorkedOnDate(jcObj, '0044-03-15 0900'))


// console.log(wagesEarnedOnDate(["Julius", "Caesar", "General", 27],
//  "2014-02-28 1400"))




// function createTimeInEvent(empDetails, dateStamp){
    //     let empOb = createEmployeeRecord(empDetails);
    //     // let splitDate = dateStamp.split(" ");
    //     let date = new Date(dateStamp)
    //     // let hour = splitDate[1];
    //     // let hour = new Time(dateStamp)
    //     let timeInObj = {};
    //     timeInObj.type = "TimeIn"
    //     timeInObj.date = date;
    //     // timeInObj.hour = hour;
    //     empOb.timeInEvents.push(timeInObj)
    //     return empOb
    // }


// Today




// function createTimeInEvent(empDetails, dateStamp){
    // let empOb = createEmployeeRecord(empDetails)
    // let splitDate = dateStamp.split(" ");
    // let date = splitDate[0];
    // let hour = splitDate[1];
    // let timeInObj = {};
    // timeInObj.type = "TimeIn"
    // timeInObj.date = date;
    // timeInObj.hour = parseInt(hour);
    // empOb.timeInEvents.push(timeInObj)
    // return empOb
// }


// function createTimeOutEvent(empDetails, dateStamp){
    // let empOb = createEmployeeRecord(empDetails);
    // let splitDate = dateStamp.split(" ");
    // let date = splitDate[0];
    // let hour = splitDate[1];
    // let timeOutObj = {};
    // timeOutObj.type = "TimeOut"
    // timeOutObj.date = date;
    // timeOutObj.hour = parseInt(hour);
    // empOb.timeOutEvents.push(timeOutObj)
    // return empOb
// }



// function hoursWorkedOnDate(empRec, date){
    //     // empObj = createEmployeeRecord(empRec);
    //     let timeInObj = createTimeInEvent(empRec, "0044-03-15 0900");
    //     let timeOutObj = createTimeOutEvent(empRec, "0044-03-15 1100"); 
    //     // console.log(timeOutObj.timeOutEvents[0].hour) 
    //     let timeOutHrs = timeOutObj.timeOutEvents[0].hour
    //     let timeInHrs = timeInObj.timeInEvents[0].hour
    //     return Math.floor((timeOutHrs - timeInHrs)/100)
    
    // }
    
// function wagesEarnedOnDate(empRec){
    //     let empObj = createEmployeeRecord(empRec)
    //     let hrs = hoursWorkedOnDate(empRec) 
    //     let wagesPerHr = empObj.payPerHour
    //     return hrs * wagesPerHr
    // }
    
    
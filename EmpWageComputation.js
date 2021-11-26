console.log("Welcome to Employee Wage Calculation");
const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR =20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

//fuction to check part or full time
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
         case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default :
            return 0;
    }
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

function calcDailyWage (empHrs) {     
    return empHrs * WAGE_PER_HOUR;
}    
//calculate total working hours
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
       totalWorkingDays <= NUM_OF_WORKING_DAYS){
    //increment working days
    totalWorkingDays++;
    //get random values
    let empCheck = Math.floor(Math.random()*10) % 3;
    //calculate emp hrs
    let empHrs = getWorkingHours (empCheck);
    totalEmpHrs += empHrs; 
    empDailyWageArr.push(calcDailyWage (empHrs));  
}
//calculate emp wage
empWage = calcDailyWage(totalEmpHrs);

console.log("UC-6 Total Days: "+totalWorkingDays+" Total hours : "+totalEmpHrs+" Emp Wage : "+ empWage);
console.log("Daily Wage Store in Array : ["+ empDailyWageArr +"]");

console.log("Welcome to Employee Wage Calculation");
const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR =20;

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
let empHrs = 0;
//get random values
let empCheck = Math.floor(Math.random()*10) % 3;
//calculate emp hrs
empHrs = getWorkingHours(empCheck);
//calculate emp wage
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage : "+empWage);
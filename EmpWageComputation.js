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
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

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
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}
//calculate emp wage
empWage = calcDailyWage(totalEmpHrs);

console.log("UC-6 Total Days: "+totalWorkingDays+" Total hours : "+totalEmpHrs+" Emp Wage : "+ empWage);
console.log("Daily Wage Store in Array : ["+ empDailyWageArr +"]");

// UC7
//UC7 A - calculate total wage using array forEach traversal or reduce method
let totEmpWage = 0;

function sum(dailyWage) {
totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs +" Emp Wage:"  + totEmpWage); 

function totalWages (totalWage, dailyWage) {
return totalWage + dailyWage;
}

//UC 7B show the day along with daily wage using Array map helper function
let dailyCntr = 0;
function mapDailyWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " +dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDailyWithWage);
console.log("UC 7B - Daily wage Map");
console.log(mapDayWithWageArr);

//UC7C - Show Day When full time wage of 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC-7C - Daily Wage Filter when Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D- Find the first occurrence when Full Time Wage was earned using find function 
function findFulltimewage (dailyWage) {
    return dailyWage.includes ("160");
}
console.log("UC 7D- First time Fulltime wage was earned on Day: "+ mapDayWithWageArr.find (findFulltimewage));
    
// UC 7E- Check if Every Element of Full Time Wage is truely holding Full time wage    
function isAllFulltimeWage (dailyWage) {
     return dailyWage. includes ("160");
}
console.log("UC 7E- Check All Element have Full Time Wage: "+ fullDayWageArr.every(isAllFulltimeWage));
    
// UC 7F - Check if there is any Part Time Wage 
function isAnyPartTimeWage (dailyWage) {    
    return dailyWage. includes ("80");   
}  
console.log("UC 7F- Check If Any Part Time Wage: "   
            + mapDayWithWageArr.some (isAnyPartTimeWage));

// UC 7G- Find the number of days the Employee Worked  
function totalDaysWorked (numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}   
console.log("UC 7G- Number of Days Emp Worked: "+    
            + empDailyWageArr.reduce (totalDaysWorked, 0));

// UC8 Use Map to Store daily emp wage with day 
function totalWage(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC 8 - Storing daily Emp wage with day in map : " 
            + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
console.log("display daily wage along with day : " )
console.log(empDailyWageMap);

//UC 9 Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0)
                   .reduce(findTotal, 0);
console.log("UC 9A - Emp Wage with Arrow : " + " Total Hours: "+
            totalHours + " Total Wages: "+ totalSalary );

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach((value, key) => {
    if (value == 8) 
        fullWorkingDays.push(key);
    else if (value == 4)
        partWorkingDays.push(key);
    else
        nonWorkingDays.push(key);
});
console.log("Full Working Days: "+ fullWorkingDays);
console.log("Part Workinhg Days: " + partWorkingDays);
console.log("Non Working Days: "+ nonWorkingDays);
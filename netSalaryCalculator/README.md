# Code challange
This is a simple command-line application that determines the student's grades, speed and the netSalary. It includes example usage along with the instructions on dependencies & additional requirements 

# studentsgradeGenerator Function
The user inputs the scores and determines whether the grades are defined 
# Description
The 'studentgradeGenerator' prompts the user to the student's grades and scores as follows:
*A:scores are between 79 to 100.
*B:scores are between 60 to 79.
*C:scores are between 50 to 59.
*D:scores are between 40 to 49.
*E:scores are below 40.

# How it works
Inorder to make this project function to run you will need to:
1. Clone the repository
2. Make sure the node.js is installed
3. Install the `prompt-sync` (npm install "prompt-sync")

# speedDetector
This function determines a given criteria of speed against predefined limits that normally determine whether the speed detected is within the limits highlighted.

# Description

The `speedDetector` detects a `speed`, which normally represents the speed at which was determined
 If the`speed` is 70, it outputs`ok`.
 If `speed` exceeds 70, it prints the demerit points based on the formula `(speed - 70) / 5`. If the calculated demerit points are more than 12, it outputs `"License Suspended"`.

## Usage

To use the `speedDetector` function:

1. Clone the repository
2. Call the function with a numeric argument representing the speed in kilometers per hour (km/h).

Example in the Node.js:

```javascript
// write the function definition
function speedDetector(speed) {
    if (speed <= 70) {
        console.log("Speed: ok");
    } else {
        let totalDemeritPoints = Math.floor((speed - 70) / 5);

        if (totalDemeritPoints > 12) {
            console.log("Points: License Suspended");
        } else {
            console.log(`Points: ${totalDemeritPoints}`);
        }
    }
}

// Example uses of the function
speedDetector(70); // Output: "Speed: ok"
speedDetector(100); // Output: "Points: License Suspended"
speedDetector(80); // Output: "Points: 2"


# netSalaryCalculator
The `netSalaryCalculator`calculates the net salary of an employee based on how the basic salary, benefits, and deductions including the PAYE tax, Housing Levy, NHIF, and NSSF.

# Description
The `netSalaryCalculator` does the following steps:

1. Prompts the user about the basic salary and benefits input.
2. Validates the input making sure that  it's a number and greater than zer0.
3. Calculates the gross salary by adding the basic salary and benefits.
4. Calculates the PAYE tax based on the defined tax brackets.
5. Calculates Housing Levy, NHIF deduction, and NSSF deduction based on how it specifies the rates and brackets.
6. Computes the net salary by subtracting PAYE tax, Housing Levy, NHIF, and NSSF from the gross salary.
7. Outputs the details of PAYE tax, Housing Levy, NHIF deduction, NSSF deduction, gross salary, and net salary.

# Usage

in order to use `netSalaryCalculator`you should follow the steps below:

1. Clone the repository.
2. Ensure  Node.js is installed.
3. Call the function `netSalaryCalculator()` in the Node.js.

Example in the Javascript file:

```javascript
// Include the function definition
function netSalaryCalculator() {
    const prompt = require('prompt-sync')();

    //prompt of the basic salary and the benefits
    let basicSalary = parseFloat(prompt("Please Enter a Valid Basic Salary: "));
    let benefits = parseFloat(prompt("Key in Benefits: "));

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary <= 0 || benefits <= 0) {
        console.log("Entries must be a number and the basic salary should be >= 0");
        return;
    }

    // Tax rates and deductions

    //grossSalary
    const grossSalary = basicSalary + benefits;

    //paye
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = 24000 * 0.10 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = 24000 * 0.10 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        paye = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325;
    } else {
        paye = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35;
    }

    const HousingLevyDeductionsRate = 0.015;
    const housingLevy = grossSalary * HousingLevyDeductionsRate;

    //nhif 
    let nhif;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else if (grossSalary <= 99999) nhif = 1600;
    else nhif = 1700;

    //NSSF deductions calculations
    const tier1Limit = 7000;
    const tier2Limit = 36000;
    const nssfRate = 0.06;
    let nssf;

    if (grossSalary <= tier1Limit) {
        nssf = grossSalary * nssfRate;
    } else if (grossSalary <= tier2Limit) {
        nssf = tier1Limit * nssfRate + (grossSalary - tier1Limit) * nssfRate;
    } else {
        nssf = tier1Limit * nssfRate + (tier2Limit - tier1Limit) * nssfRate;
    }

    const netSalary = grossSalary - paye - housingLevy - nhif - nssf;

    console.log(`Paye (Tax): ${paye.toFixed(2)}`);
    console.log(`Housing Levy: ${housingLevy.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhif.toFixed(2)}`);
    console.log(`NSSF Deduction: ${nssf.toFixed(2)}`);
    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

netSalaryCalculator();

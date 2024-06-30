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
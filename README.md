# Code challange
This is a simple command-line application that determines the student's grades, speed and the netSalary. It includes example usage along with the instructions on dependencies & additional requirements 

# studentsgradeGenerator Function
The user inputs the scores and determines whether the grades are defined 

# Question
Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

A > 79, B - 60 to 79, C - 49 to 59, D - 40 to 49, E - less 40.

Solution
Two prompt routines are used by this program: one asks the user to enter the student's name, and the other requests the student's mark. The computer checks to see if the markers input ranges from 0 to 100 before starting the grading process; if it does, the procedure moves forward. Should the user enter a mark that is invalid, an output indicating such will be displayed. At last, it prints the student's name, mark, and grade after computing their grade using the grading scheme specified in the question. Simply invoke the main function to begin using the software. The user will be prompted to enter the student's name and grades, and the grade, marks, and student name will be output to the console.


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

# Question
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

# Solution
'Speed' is the only argument that the program's function takes. Conditions are used to test the various car speeds. There is a 70 km/h speed restriction. "Ok" is printed when the speed is less than or equal to the speed limit. The application will figure out how many demerit points are earned for every 5 km/s over the speed limit and print that figure after the speed restriction is exceeded. The application writes "License cancelled" if the demerit points surpass 12, which is equivalent to a speed of at least 135 km/s. Simply use the calculateDemeritPoints method to begin using the application. This function computes demerit points and exceeding speed and outputs the number of points based on speed, excess speed, and penalty based on point total to the console.


# Description

The `speedDetector` detects a `speed`, which normally represents the speed at which was determined
 If the`speed` is 70, it outputs`ok`.
 If `speed` exceeds 70, it prints the demerit points based on the formula `(speed - 70) / 5`. If the calculated demerit points are more than 12, it outputs `"License Suspended"`.

## Usage

To use the `speedDetector` function:

1. Clone the repository
2. Call the function with a numeric argument representing the speed in kilometers per hour (km/h).


# netSalaryCalculator
The `netSalaryCalculator`calculates the net salary of an employee based on how the basic salary, benefits, and deductions including the PAYE tax, Housing Levy, NHIF, and NSSF. 

 # question
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htm to an external site.

https://www.kra.go.ke/individual/calculate-tax/calculating-tax/paye to an external site.

Solution
Using an individual's base pay and benefits—basically, allowances—this tool determines their net compensation. The program's primary function is to calculate gross tax, NHIF and NSSF deductions, gross salary, and net salary. These functions are divided into multiple parts. The program's initial constants are taken from the URLs provided in the question. To traverse through the arrays and obtain the right values required for calculation, loops are employed. Call the calculateNetSalary function to begin using the application. It will ask the user to enter their base pay and benefits before displaying the net salary on the console.

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

# License
The content of this site is licensed under the MIT license Copyright (c) 2024.
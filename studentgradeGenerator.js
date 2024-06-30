function studentsGradeGenerator () {
    prompt=require("prompt-sync")();
    let scores=prompt('please enter valid scores');
    scores=parseInt(scores);

    let grade ;
    if (scores <= 100 && scores >= 79) {
        grade ='A';
    } else if (scores <=78 && scores >=60) {
        grade ='B';
    } else if (scores <=59 && scores >=49) {
        grade = 'C';
    } else if (scores <=49 && scores >=40) {
        grade = 'D';
    } else  {
        grade = 'E';
    } console.log(`${grade}`);
}


    studentsGradeGenerator();
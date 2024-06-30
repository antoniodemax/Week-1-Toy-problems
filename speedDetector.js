//speedDetector

function speedDetector (speed) {
    if (speed <= 70) {
        console.log ("ok");
    
        //totaldemeritPoints

    }else {
        let totaldemeritPoints = Math.floor((speed - 70)/ 5);

        console.log(`Points :${totaldemeritPoints}`)

        if(totaldemeritPoints > 12 ) {
            console.log("License Suspended");

        } else {
            console.log("Points:" + totaldemeritPoints);
        }
    }
}
//Example
speedDetector(70); //output "ok"
speedDetector(100);// License Suspended
speedDetector(80); // print:points;2
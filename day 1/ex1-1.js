const total = 67;
const payment = 100;

if (payment < total) {
    console.log("Insufficient payment");
} else {
    let sukli = payment - total;
    console.log("sukli: ₱" + sukli);

    let p20 = Math.floor (sukli / 20);
    sukli = sukli % 20;
    
    let p10 = Math.floor(sukli / 10);
    sukli = sukli % 10;

    let p5 = Math.floor(sukli / 5);
    sukli = sukli % 5;

    let p1 = Math.floor(sukli/1);


    console.log("₱20 x " + p20);
    console.log("₱10 x " + p10);
    console.log("₱5 x " + p1);

} 

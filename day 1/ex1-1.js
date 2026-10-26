const distance = 10;
let extraKm = distance - 4;
let fare = 13 + (extraKm * 1.80);

console.log("fare for" + distance + " km: ₱"+ fare.toFixed(2));
 let Studentfare = fare * 0.80;
 console.log("Student fare: ₱" + Studentfare.toFixed(2));

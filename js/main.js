let userAge = prompt("Tug'ilgan oyingiz kuningiz va yilingizni kiriting \n mm:dd:yyyy shunday formatda");
let count = new Date(userAge)
let now = new Date();
console.log(now);

let result = Math.round((now-count) / 1000);
console.log("Sizning tug'ilganingizga");
console.log(`${result} Sekund `);
console.log(Math.round((now-count) / 1000 / 60 / 60) +"Soat ;");
console.log(Math.round((now-count) / 1000 / 60 / 60 / 24) +"Kun ;");
console.log(Math.round((now-count) / 1000 / 60 / 60 / 24 / 365.25) +"Yil ;");
console.log("bo'ldi.Yashashda davom eting");
let akomodimi = 96;
let transporti = 42;
let ushqimi = 57;
let numriPersonave = 3;

let kostoTotale = akomodimi + transporti + ushqimi;
let pjesaPerPerson = kostoTotale / numriPersonave;

console.log("Kostoja totale: " + kostoTotale + " €");
console.log("Pjesa për person: " + pjesaPerPerson + " €");

let buxhetiPerPerson = 80;
let mbetja = buxhetiPerPerson - pjesaPerPerson;

console.log("Sa euro i mbeten secilit: " + mbetja + " €");
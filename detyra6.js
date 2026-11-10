let cmimiProduktit1 = 35;
let sasiaProduktit1 = 2;
let cmimiProduktit2 = 24;
let sasiaProduktit2 = 1;

let cmimiParaZbritjes = (cmimiProduktit1 * sasiaProduktit1) + (cmimiProduktit2 * sasiaProduktit2);
let shumaZbritjes = cmimiParaZbritjes * 15 / 100;
let cmimiPasZbritjes = cmimiParaZbritjes - shumaZbritjes;

let transport = 4;
let vleraPerfundimtare = cmimiPasZbritjes + transport;

console.log("Çmimi para zbritjes: " + cmimiParaZbritjes + " €");
console.log("Shuma e zbritjes: " + shumaZbritjes + " €");
console.log("Çmimi pas zbritjes: " + cmimiPasZbritjes + " €");
console.log("Vlera përfundimtare: " + vleraPerfundimtare + " €");
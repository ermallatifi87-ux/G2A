let cmimiLibrit = 12.50;
let sasiaLibrave = 3;
let cmimiFletores = 1.80;
let sasiaFletoreve = 4;

let kostoLibrave = cmimiLibrit * sasiaLibrave;
let kostoFletoreve = cmimiFletores * sasiaFletoreve;

let totali = kostoLibrave + kostoFletoreve;
totali += 2.50;

console.log("=== 01 Fatura e librarisë ===");
console.log("Kostoja e librave: " + kostoLibrave.toFixed(2) + " €");
console.log("Kostoja e fletoreve: " + kostoFletoreve.toFixed(2) + " €");
console.log("Totali me transport: " + totali.toFixed(2) + " €");

let aktivitetet = 18;
let projekti = 24;
let provimi = 43;
let maksimumi = 100;

let totaliPikeve = aktivitetet + projekti + provimi;
let perqindja = (totaliPikeve / maksimumi) * 100;

console.log("\n=== 02 Rezultati i vlerësimit ===");
console.log("Totali fillestar: " + totaliPikeve + " pikë");
console.log("Përqindja: " + perqindja + "%");

provimi = 48;
totaliPikeve = aktivitetet + projekti + provimi;
perqindja = (totaliPikeve / maksimumi) * 100;

console.log("Totali i rillogaritur: " + totaliPikeve + " pikë");
console.log("Përqindja e re: " + perqindja + "%");

let akomodimi = 96;
let transporti = 42;
let ushqimi = 57;
let numriPersonave = 3;

let kostoTotale = akomodimi + transporti + ushqimi;
let pjesaPerPerson = kostoTotale / numriPersonave;

console.log("\n=== 03 Buxheti i një udhëtimi ===");
console.log("Kostoja totale: " + kostoTotale + " €");
console.log("Pjesa për person: " + pjesaPerPerson + " €");

let buxhetiPerPerson = 80;
let mbetja = buxhetiPerPerson - pjesaPerPerson;

console.log("Buxheti për person: " + buxhetiPerPerson + " €");
console.log("Sa euro i mbeten secilit: " + mbetja + " €");

let produkti1 = 35;
let sasiaProdukti1 = 2;
let produkti2 = 24;
let sasiaProdukti2 = 1;

let cmimiParaZbritjes = (produkti1 * sasiaProdukti1) + (produkti2 * sasiaProdukti2);
let perqindjaZbritjes = 15;
let shumaZbritjes = cmimiParaZbritjes * perqindjaZbritjes / 100;
let cmimiPasZbritjes = cmimiParaZbritjes - shumaZbritjes;

let transport = 4;
let vleraPerfundimtare = cmimiPasZbritjes + transport;

console.log("\n=== 04 Porosia online me zbritje ===");
console.log("Çmimi para zbritjes: " + cmimiParaZbritjes + " €");
console.log("Shuma e zbritjes (15%): " + shumaZbritjes + " €");
console.log("Çmimi pas zbritjes: " + cmimiPasZbritjes + " €");
console.log("Vlera përfundimtare (me transport): " + vleraPerfundimtare + " €");
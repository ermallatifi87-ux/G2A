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

let vlera1 = "25";
let vlera2 = "17";
let vlera3 = "8";

console.log("\n=== 05 Konvertimi i të dhënave ===");
console.log("Mbledhja pa konvertim: " + (vlera1 + vlera2 + vlera3));
// Vlerat janë tekst (string), prandaj operatori + i bashkon si tekst në vend që t'i mbledhë numerikisht.

let numri1 = Number(vlera1);
let numri2 = Number(vlera2);
let numri3 = Number(vlera3);
let shuma = numri1 + numri2 + numri3;
let mesatarja = shuma / 3;

console.log("Shuma pas konvertimit: " + shuma);
console.log("Mesatarja: " + mesatarja);
console.log("Tipi i shumës: " + typeof shuma);
console.log("Tipi i mesatares: " + typeof mesatarja);

let eHena = 95;
let eMarta = 80;
let eMerkura = 115;
let totaliMinutave = eHena + eMarta + eMerkura;
let totaliOreve = totaliMinutave / 60;
let oreTePlota = Math.floor(totaliMinutave / 60);
let minutaTeMbetura = totaliMinutave % 60;

console.log("\n=== 06 Analiza e kohës së studimit ===");
console.log("Minutat gjithsej: " + totaliMinutave);
console.log("Koha gjithsej në orë: " + totaliOreve);
console.log("Koha gjithsej: " + oreTePlota + " orë e " + minutaTeMbetura + " minuta");

let stoku = 120;
let cmimiNjesise = 6.75;

console.log("\n=== 07 Inventari i dyqanit ===");
console.log("Stoku fillestar: " + stoku + " njësi");

stoku -= 18;
console.log("Pas shitjes së parë: " + stoku + " njësi");

stoku -= 27;
console.log("Pas shitjes së dytë: " + stoku + " njësi");

stoku += 35;
console.log("Pas furnizimit: " + stoku + " njësi");
console.log("Vlera përfundimtare e stokut: " + (stoku * cmimiNjesise).toFixed(2) + " €");

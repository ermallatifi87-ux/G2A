let aktivitetet = 18;
let projekti = 24;
let provimi = 43;
let maksimumi = 100;

let totaliPikeve = aktivitetet + projekti + provimi;
let perqindja = (totaliPikeve / maksimumi) * 100;

console.log("Totali fillestar: " + totaliPikeve + " pikë");
console.log("Përqindja: " + perqindja + "%");

provimi = 48;
totaliPikeve = aktivitetet + projekti + provimi;
perqindja = (totaliPikeve / maksimumi) * 100;

console.log("Totali i rillogaritur: " + totaliPikeve + " pikë");
console.log("Përqindja e re: " + perqindja + "%");
let cmimiLibrit = 12.50;
let sasiaLibrave = 3;
let cmimiFletores = 1.80;
let sasiaFletoreve = 4;

let kostoLibrave = cmimiLibrit * sasiaLibrave;
let kostoFletoreve = cmimiFletores * sasiaFletoreve;

let totali = kostoLibrave + kostoFletoreve;
totali += 2.50;

console.log("Kostoja e librave: " + kostoLibrave.toFixed(2) + " €");
console.log("Kostoja e fletoreve: " + kostoFletoreve.toFixed(2) + " €");
console.log("Totali me transport: " + totali.toFixed(2) + " €");
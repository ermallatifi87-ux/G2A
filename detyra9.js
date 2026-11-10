let stoku = 120;
let cmimiNjesise = 6.75;

console.log("Stoku fillestar: " + stoku);

stoku -= 18;
console.log("Stoku pas shitjes së parë: " + stoku);

stoku -= 27;
console.log("Stoku pas shitjes së dytë: " + stoku);

stoku += 35;
console.log("Stoku pas furnizimit: " + stoku);

let vleraStokut = stoku * cmimiNjesise;
console.log("Vlera e stokut: " + vleraStokut.toFixed(2) + " €");
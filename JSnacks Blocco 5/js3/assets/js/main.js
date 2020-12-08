// Crea 10 oggetti che rappresentano una zucchina.
var zucchine = [
  {
    nome: "zucchina1",
    varietà: "nero di Milano",
    peso: 2,
    lunghezza: 3
  },
  {
    nome: "zucchina2",
    varietà: "romanesco",
    peso: 8,
    lunghezza: 8
  },
  {
    nome: "zucchina3",
    varietà: "lunga fiorentina",
    peso: 1,
    lunghezza: 14
  },
  {
    nome: "zucchina4",
    varietà: "siciliano",
    peso: 8,
    lunghezza: 22
  },
  {
    nome: "zucchina5",
    varietà: "striata di Napoli",
    peso: 3,
    lunghezza: 25
  },
  {
    nome: "zucchina6",
    varietà: "bianca triestina",
    peso: 6,
    lunghezza: 7
  },
  {
    nome: "zucchina7",
    varietà: "rigata pugliese",
    peso: 9,
    lunghezza: 10
  },
  {
    nome: "zucchina8",
    varietà: "tondo di Piacenza",
    peso: 4,
    lunghezza: 16
  },
  {
    nome: "zucchina9",
    varietà: "trombetta di Albenga",
    peso: 5,
    lunghezza: 9
  },
  {
    nome: "zucchina10",
    varietà: "pâtisson",
    peso: 6,
    lunghezza: 4
  }
]
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var menoQuindici = [];
var piùQuindici = [];


for(var key in zucchine) {
  if (zucchine[key].lunghezza < 15) {
    menoQuindici.push(zucchine[key]);
  } else{
    piùQuindici.push(zucchine[key]);
  }
}

// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine

// console.log(menoQuindici);
// console.log(piùQuindici);

var menoTot = 0;
for (var key in menoQuindici) {
  menoTot += menoQuindici[key].peso;
}
console.log("Il peso delle zucchine che misurano meno di 15 sono " + menoTot + " kg");

var piùTot = 0;
for (var key in piùQuindici) {
  piùTot += piùQuindici[key].peso;
}
console.log("Il peso delle zucchine che misurano più di 15 sono " + piùTot + " kg");

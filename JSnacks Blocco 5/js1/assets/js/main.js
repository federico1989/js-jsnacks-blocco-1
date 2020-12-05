// Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

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
    lunghezza: 3
  },
  {
    nome: "zucchina3",
    varietà: "lunga fiorentina",
    peso: 1,
    lunghezza: 3
  },
  {
    nome: "zucchina4",
    varietà: "siciliano",
    peso: 8,
    lunghezza: 3
  },
  {
    nome: "zucchina5",
    varietà: "striata di Napoli",
    peso: 3,
    lunghezza: 3
  },
  {
    nome: "zucchina6",
    varietà: "bianca triestina",
    peso: 6,
    lunghezza: 3
  },
  {
    nome: "zucchina7",
    varietà: "rigata pugliese",
    peso: 9,
    lunghezza: 3
  },
  {
    nome: "zucchina8",
    varietà: "tondo di Piacenza",
    peso: 4,
    lunghezza: 3
  },
  {
    nome: "zucchina9",
    varietà: "trombetta di Albenga",
    peso: 5,
    lunghezza: 3
  },
  {
    nome: "zucchina10",
    varietà: "pâtisson",
    peso: 6,
    lunghezza: 3
  }
]


var pesoTotale = 0;

for(var key in zucchine) {
  pesoTotale += zucchine[key].peso;
}

// Calcola quanto pesano tutte le zucchine.
console.log(pesoTotale);

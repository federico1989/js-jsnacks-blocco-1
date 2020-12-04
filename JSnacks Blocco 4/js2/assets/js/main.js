// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

var bici = [
  {
    nome : "blu",
    peso : 40,
  },
  {
    nome : "verde",
    peso : 60,
  },
  {
    nome : "giallo",
    peso : 35,
  }
]
// Stampare a schermo la bici con peso minore.

var firstWeight = bici[0].peso;
for (var i = 0; i < bici.length; i++) {
  if (bici[i].peso < firstWeight) {
    firstWeight = bici[i].peso;
  }
}
console.log(firstWeight);

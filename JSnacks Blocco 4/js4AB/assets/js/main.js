// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.

var squadre = [
  {
    nome : "Napoli",
    puntiFatti : 0,
    falliSubiti : 0
  },
  {
    nome : "Milan",
    puntiFatti : 0,
    falliSubiti : 0
  },
  {
    nome : "Inter",
    puntiFatti : 0,
    falliSubiti : 0
  }
]

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.


// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti
for (var i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = Math.floor(Math.random() * 101);
  squadre[i].falliSubiti = Math.floor(Math.random() * 101);
}
// console.log(squadre);

for (var key in squadre) {
  console.log(squadre[key]);
}

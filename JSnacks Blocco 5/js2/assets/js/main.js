// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)
var parola = "ciao";

function reverse(parola) {
  var parolaGirata = parola.split("").reverse().join("");
  return parolaGirata;
}

var soluzione = reverse(parola);

console.log(soluzione);

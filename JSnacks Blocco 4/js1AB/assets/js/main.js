// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

var palla = {
  nome: "palla",
  peso: 10
}

// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

var pesoUtente = Number(prompt("Inserisci il peso"));

palla.peso = pesoUtente;

console.log(palla);

// Scrivi una funzione che fonda due array (con lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var letters = ["a", "b", "c"];
var numbers = [1, 2, 3];
var numLett = fusion(letters, numbers);



function fusion(letters, numbers){
  total = [];

  for (var i = 0; i < letters.length; i++) {
    total.push(letters[i]);
  }
  for (var j = 0; j < numbers.length; j++) {
    total.push(numbers[j]);
  }

console.log(total);
}

// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.

var triangolo = {
  base: 27,
  altezza: 36
}

// Calcolare perimetro e area.

var base = triangolo.base;
var altezza = triangolo.altezza;

var area = ((base * altezza) / 2);

var ipotenusa = Math.floor(Math.sqrt( (Math.pow(base,2)) + (Math.pow(altezza,2)) ));

var perimetro = (base + altezza + ipotenusa);

console.log(area);
console.log(perimetro);

// (ripassiamo il Teorema di Pitagora ;D )

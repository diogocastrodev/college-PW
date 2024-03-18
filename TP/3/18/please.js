// function sayMagicWord() {
//   //var paragrafo = document.getElementById("disse");
//   //paragrafo.innerHTML = "PoR FavOr!";
//   // alert("PLEASE!");
// }

let x = 5;
let y = 6;
var z = x + y;
document.getElementById("demo").innerHTML = z;

const sayMagicWord = () => {
  const paragrafo = document.getElementById("disse");
  paragrafo.innerHTML = "PoR FavOr!";
};

var paragrafos = document.getElementsByTagName("li");

for (var i = 0; i < paragrafos.length; i++) {
  paragrafos[i].innerHTML =
    i + 1 + " - Este parágrafo foi modificado usando js!";
}

var idade = 10 + 5;
var eMaior = idade > 18;
var resultado = 10 === "10" || 5 !== 3;
// alert(resultado);

var i = 0;
while (i < 99) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.warn(i);
  i++;
} while (i < 10);

var frutas = ["Banana", "Laranja", "Maçã", "Molango"];

frutas.forEach((fruta, i) => {
  console.log("Indice: " + i + ": " + fruta);
});

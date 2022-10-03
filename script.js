//                  0         1       2
const frutas = ["laranja", "limão", "uva"];

let fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML += frutas[0]

let fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML += frutas[1]

let frutas3 = document.getElementById("fruta-3")
frutas3.innerHTML += frutas[2]

let imprimaFrutaNoConsole = document.getElementById("fruta")
console.log(imprimaFrutaNoConsole.value);


function aparecerNaTela(){
    let fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = imprimaFrutaNoConsole.value
}

const form = document.getElementById('form-numero');

let valor1 = document.getElementById('campoA');
let valor2 = document.getElementById('campoB');
const campoA = parseFloat('valor1');
const campoB = parseFloat('valor2');

if(campoA > campoB) {
    alert('formulario invalido')
} else {
    alert ('fomulario valido')
}

console.log(form)
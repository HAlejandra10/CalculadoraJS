/* eslint-disable no-undef */
const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOPeradores = document.querySelectorAll(".operador");


//new Calculadoora:instancia para hacer calculos u operaciones
//  const calculadora = new Calculadora();

// console.log(calculadora.sumar(2,3));
// console.log(calculadora.restar(2,3));
// console.log(calculadora.dividir(2,3));
// console.log(calculadora.multiplicar(2,3));

const display = new Display(displayValorAnterior,displayValorActual);

botonesNumeros.forEach(boton => {
     boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});
//computar meetodo está en el file Display
 botonesOPeradores.forEach(boton => {
      boton.addEventListener('click', () => display.computar(boton.value));
 });




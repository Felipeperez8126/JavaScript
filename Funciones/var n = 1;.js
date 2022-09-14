// Asignamos la funcion a una variable para reutilizarla
var suma = (numero1, numero2) => numero1 + numero2
var a = suma(2, 3);
// 5
var b = suma(4, 5);
// 9

// O la usamos directamente
function calcular(operacion, numero1, numero2) {
  return operacion(numero1, numero2);
}

var c = calcular((numero1, numero2) => numero1 + numero2, 6, 7);
console.log(c);
// 13
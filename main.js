/**
 * 1. Acceso a un sistema 
Un sistema debe permitir el acceso a un usuario si cumple estas condiciones: 
• El nombre de usuario es "admin". 
• La contraseña es "1234". 
Si no cumple las dos condiciones, debe mostrar "Acceso denegado". 
Pregunta de análisis: ¿Qué operador lógico usarías para verificar que se cumplan  ambas condiciones? 
 */
/*
const nombreUsuario = "Admin"
const password = "1234"

let opcionNombreUsuario = prompt("Ingrese el nombre de usuario")
let opcionPassword = prompt("Ingrese su contraseña")
if (!opcionNombreUsuario == nombreUsuario || !opcionPassword == password) {
  console.log("Credenciales incorrectas !!!")
}*/

/**2. Calcular precio de entradas al cine 
Un cine aplica las siguientes reglas: 
• Si el cliente tiene menos de 12 años, el valor de la entrada es 5000. • Si tiene entre 12 y 18 años, el valor es 8000. 
• Si es mayor de 18, el valor es 10000.
GFPI-F-135 V04 
  

• Si el cliente es estudiante (condición adicional), 
se le aplica un descuento del 20% al valor de la entrada. 
Pregunta de análisis:
¿Qué estructura condicional usarías para resolver este caso: 
if else if-else o switch? ¿Por qué?  */
/*
let valorEntrada = 5000
esEstudiante = parseFloat(prompt("¿Es usted estudiante? true/false"))
if (esEstudiante == true) {
  valorEntrada -= valorEntrada * 0.20
  console.log("El valor de la entrada para el estudiante vale con 20 % de descuento es : " + valorEntrada)
} else {
  console.log("La entrada para alguien que no es estudiante equivale a : " + valorEntrada)
}
*/





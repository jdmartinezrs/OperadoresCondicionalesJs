/**
 * 1. Acceso a un sistema 
Un sistema debe permitir el acceso a un usuario si cumple estas condiciones: 
• El nombre de usuario es "admin". 
• La contraseña es "1234". 
Si no cumple las dos condiciones, debe mostrar "Acceso denegado". 
Pregunta de análisis: ¿Qué operador lógico usarías para verificar que se cumplan  ambas condiciones? 
 */

const nombreUsuario = "Admin"
const password = "1234"

let opcionNombreUsuario = prompt("Ingrese el nombre de usuario")
let opcionPassword = prompt("Ingrese su contraseña")
if (!opcionNombreUsuario == nombreUsuario || !opcionPassword == password) {
  console.log("Credenciales incorrectas !!!")
}

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

let valorEntrada = 5000
esEstudiante = parseFloat(prompt("¿Es usted estudiante? true/false"))
if (esEstudiante == true) {
  valorEntrada -= valorEntrada * 0.20
  console.log("El valor de la entrada para el estudiante vale con 20 % de descuento es : " + valorEntrada)
} else {
  console.log("La entrada para alguien que no es estudiante equivale a : " + valorEntrada)
}


/**3. Clasificación de números 
Crea un programa que pida un número entero y muestre: 
• "Número positivo" si el número es mayor que 0. 
• "Número negativo" si es menor que 0. 
• "Cero" si es igual a 0. 
Extensión: ¿Cómo cambiaría la solución si quieres que, 
además, se verifique si el  número es par o impar?  */

numeroEntero = parseInt(prompt("Ingrese un número "))
if (numeroEntero < 0) {
  console.log("Número Negativo")
} else if (numeroEntero > 0) {
  console.log("Número Positívo")
} else if (numeroEntero == 0) {
}
switch (numeroEntero) {
  case numeroEntero % 2 == 0:
    console.log("Número Par")
    break;
  case numeroEntero % 2 != 0:
    console.log("Número Impar")
}

/**
 4. Menú de opciones 
Un cajero automático presenta el siguiente menú: 
1. Consultar saldo 
2. Retirar dinero 
3. Depositar dinero 
4. Salir 
Crea un programa con switch que muestre la acción correspondiente según el número  ingresado. 
Pregunta de análisis: ¿Qué pasaría si el usuario ingresa un número que no está entre 1  y 4? 
 */

console.log("Ingrese: 1. Consultar saldo")
console.log("Ingrese: 2. Retirar dinero")
console.log("Ingrese: 3. Depositar dinero ")
console.log("Ingrese: 4. Salir ")
opcionUsuario = parseInt(prompt("Ingrese un nuúmero según corresponda"))
switch(opcionUsuario){
  case 1:
    console.log("Consultando saldo")
    break;
  case 2:
    console.log("Retirando dinero")
    break;
  case 3:
    console.log("Depositando dinero")
    break;
  case 4:
    console.log("Saliendo")
    break;
  
  default:
    console.log("Valor erroneo")
}


/**
 * 5. Sistema de calificaciones con condiciones lógicas 
Un estudiante aprueba una materia si: 
• Su nota final es mayor o igual a 60 y 
• Su asistencia es mayor o igual al 80%. 
Si no cumple ambas condiciones, debe mostrar "Reprobado".
 */

const clasesTotales = 40

let notaEstudiante = parseFloat(prompt("Ingrese la nota del estudiante"))

let asistenciasEstudiante = parseInt(prompt("Ingrese las clases asistidas del estudiante "))

let porcentaje = (asistenciasEstudiante / clasesTotales) * 100

if (notaEstudiante >= 60 && porcentaje >= 80) {
  console.log("El estudiante APRUEBA")
} else {
  console.log("El estudiante REPRUEBA")
}
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



// ============================================
// LABORATORIO 1: Variables y Tipos de Datos
// ============================================

// 1. DECLARACIÓN DE VARIABLES
// let - para valores que cambian
// const - para valores constantes

let nombre = "Cristian";  // String (texto)
let edad = 23;          // Numero  (número entero)
let altura = 1.80;      // Numero  (decimal)
let esEstudiante = true; // Boolean (verdadero/falso)
let ciudad;             // undefined (sin valor asignado)
let salario = null;     // null (intencionalmente vacío)

// 2. TIPOS DE DATOS
console.log("=== INFORMACIÓN PERSONAL ===");
console.log("Nombre:", nombre, "| Tipo:", typeof nombre);
console.log("Edad:", edad, "| Tipo:", typeof edad);
console.log("Altura:", altura, "| Tipo:", typeof altura);
console.log("Es estudiante:", esEstudiante, "| Tipo:", typeof esEstudiante);
console.log("Ciudad:", ciudad, "| Tipo:", typeof ciudad);
console.log("Salario:", salario, "| Tipo:", typeof salario);

// 3. OPERACIONES CON VARIABLES
let añoNacimiento = 2025 - edad;
let nombreCompleto = nombre + " gutierrez"; // Concatenación
let edadFutura = edad + 5;

console.log("\n=== CÁLCULOS ===");
console.log("Año de nacimiento:", añoNacimiento);
console.log("Nombre completo:", nombreCompleto);
console.log("Edad en 5 años:", edadFutura);

// 4. EJERCICIO PRÁCTICO
// Modifica estos valores con tu información
let miNombre = "Crisitian david";
let miEdad = 24;
let miCiudad = "Dosquebradas";
let soyProgramador = "junior";

console.log("\n=== MI INFORMACIÓN ===");
console.log(`Hola, soy ${miNombre}, tengo ${miEdad} años`);
console.log(`Vivo en ${miCiudad} y programador: ${soyProgramador}`);

// DESAFÍO: Crea 3 variables más con diferentes tipos de datos
// y haz operaciones con ellas


let miHobby = "arquero de futbol"; // String
let añosDeExperiencia = 2; // Numero 
const meGustaprogramar = "si"; // String

console.log("\n=== MAS SOBRE MI ===");
console.log('mi hobby es:', miHobby, 'con', añosDeExperiencia, 'años de experiencia');
console.log('¿Megusta Programar?:', meGustaprogramar);
